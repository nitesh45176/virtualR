const User = require("../models/User")

const jwt = require("jsonwebtoken")

//generate jwt tokens
const generateToken = (id) => {
    return jwt.sign(
        {id}, process.env.JWT_SECRET, {
            expiresIn: "1h"
        })
}

exports.registerUser = async(req, res) => {
    console.log("📩 Received signup data:", req.body); 
   const {fullName, email, password} = req.body

   if(!fullName || !email || !password){
     return res.status(400).json({message:"All fields are required"})
   }
   try {
    const existingUser = await User.findOne({email})
    if(existingUser){
        return res.status(400).json({msg: "User already exists"})
    }

    const user = await User.create({
        fullName,
        email,
        password
    })
    console.log("🧑‍💻 Saved user:", user);
    res.status(201).json({
        id: user._id,
        user,
        token: generateToken(user._id)
    })

   } catch (error) {
      res.status(500).json({message:"Error registering user", error: error.message})
   }

}

exports.loginUser = async(req, res) => {
   const {email, password} = req.body;

   if(!email || !password){
    return res.status(400).json({message:"All fields are required"})
}
   try {
     const user = await User.findOne({email})
     if(!user || !(await user.comparePassword(password))){
        return res.status(400).json({message:"Invalid credentials"})
     }

     res.status(200).json({
        id: user._id,
        user,
        token: generateToken(user._id)
     })
   } catch (error) {
      res.status(500).json({message:"Error registering user", error: error.message})
   }
}
