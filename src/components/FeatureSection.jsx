import React from "react";
import { features } from "../constants";
import { motion } from "motion/react";

function FeatureSection() {
  return (
    <motion.div
         initial={{ opacity: 0, x: 200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
    
    
    
    id="Features"
    className=" mt-25 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="text-orange-500 bg-neutral-900 text-2xl">FEATURE</span>
        <h2 className="text-3xl sm:text-5xl md:text-5xl mt-10 lg:mt-20 tracking-wide">
          Easily build
          <span className="bg-gradient-to-r from-orange-500 to-orange-900 text-transparent bg-clip-text">
            {" "}
            your code
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {feature.icon}
                </div>
                <div>
                  <h5 className="mt-1 mb-4 text-xl">{feature.text}</h5>
                  <p className="text-neutral-500 text-md p-2 mb-10">{feature.description}</p>
                </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default FeatureSection;
