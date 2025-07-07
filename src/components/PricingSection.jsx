import React from "react";
import { pricingOptions } from "../constants";
import { motion } from "motion/react";
import { CheckCircle2, Divide } from "lucide-react";

const PricingSection = () => {
  return (
    <motion.div
        initial={{ opacity: 0, x: 200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
    
    
    id="pricing"
    className="mt- min-h-[800px] flex flex-col justify-center items-center mt-10 border-b border-neutral-800 mb-10">
      <h2 className="text-5xl sm:text-5xl lg:text-6xl text-center mb-10 bg-gradient-to-r from-orange-500 to-orange-900 text-transparent bg-clip-text">
        PRICING
      </h2>
      <div className="flex justify-center items-center gap-10 px-20 mt-2 flex-wrap">
        {pricingOptions.map((item, index) => (
          <div
            key={index}
            className="border border-neutral-800 p-10 rounded-md"
          >
            <h2 className="text-3xl mb:text-2xl  mb-6">
                {item.title}
               {item.title === "Pro" && (
                 <span className="bg-gradient-to-r from-orange-500 to-orange-900 text-transparent bg-clip-text text-xl ml-2 mb-4">
                    (Most Popular)
                 </span>
               )}
            </h2>
            <h2 className="text-5xl mb:text-4xl">
              {item.price}
              <span className="text-sm text-neutral-500 ">/Month</span>
            </h2>

            <ul className="mt-7 space-y-2 ">
              {item.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 mb-5 text-neutral-300"
                >
                  <CheckCircle2 className="text-green-500 w-4 h-4" />
                  {feature}
                
                </li>
              
              ))}
               <div className="flex justify-center items-center mt-5">
                   <button className="px-15 py-2 rounded-md border border-orange-900 mt-5 hover:bg-orange-900 cursor-pointer">subscribe</button>
               </div>
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default PricingSection;
