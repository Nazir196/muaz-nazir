

import { EXPERTISE } from "../constants";
import { motion } from "framer-motion";

const Expertise = () => {
  return <div className="border-b border-gray-500 pb-4 lg:mb-36">
    <motion.h1 
    whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100}} transition={{duration: 0.5}}
    className="my-20 text-center text-4xl font-lora text-cyan-300">Expertise & Skills</motion.h1>

    <div>
        {EXPERTISE.map((expertise, index) =>(
            <div key={index} className="mb-8 flex flex-wrap text-center lg:justify-center">

                <motion.div 
                whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100}} transition={{duration: 1}}
                className="w-full lg:w-1/4">
                <h2 className="mb-2 text-2xl text-center md:text-start font-montserrat text-blue-300">{expertise.field}</h2>
                </motion.div>

                <motion.div 
                whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100}} transition={{duration: 1}}
                className="w-full max-w-xl lg:w-3/4">
                <h5 className="mb-2 text-gray-400 text-2xl font-montserrat text-center md:text-start">
                    {expertise.skill} 
                </h5>
                </motion.div>
            </div>

        ))}
    </div>
  </div>
};

export default Expertise;