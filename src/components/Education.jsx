import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

const Education = () => {
  return <div className="border-b border-gray-500 pb-4 lg:mb-36">
    <motion.h1 
    whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100}} transition={{duration: 0.5}}
    className="my-20 text-center text-4xl font-lora text-cyan-300">Education</motion.h1>

    <div>
        {EDUCATION.map((education, index) =>(
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">

                <motion.div 
                whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100}} transition={{duration: 1}}
                className="w-full lg:w-1/4">
                <p className="mb-2 text-md font-lora text-blue-300">{education.year}</p>
                </motion.div>

                <motion.div 
                whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100}} transition={{duration: 1}}
                className="w-full max-w-xl lg:w-3/4">
                <h5 className="mb-2 text-blue-300 text-2xl font-lora">
                    {education.degree} 
                </h5>
                <h6 className="mb-2 text-gray-400 text-xl font-montserrat">{education.school}</h6>
                <p className="mb-4 font-roboto text-lg text-gray-500">{education.description}</p>
                </motion.div>
            </div>

        ))}
    </div>
  </div>
};

export default Education;