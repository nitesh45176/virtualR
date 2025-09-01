const mongoose = require("mongoose")
const bcrypt = require("bcryptjs");


const userSchema = new mongoose.Schema({
    fullName: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
   
}, {timestamps:true})

//hashed password
userSchema.pre("save", async function (next){
    if (!this.isModified("password")) 
        return next()
    this.password = await bcrypt.hash(this.password , 10)
    next()
})

userSchema.methods.comparePassword = async function(candidatePassoword){
    return await bcrypt.compare(candidatePassoword, this.password)
}

module.exports = mongoose.model("User", userSchema)