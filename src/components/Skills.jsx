import { RiReactjsLine } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { animate, motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});



const Skills = () => {
  return <div className="border-b border-gray-500 pb-4 lg:mb-36">
    <motion.h1
    whileInView={{opacity: 1, y: 0}} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5 }}
    className="my-16 text-center font-lora text-cyan-300 text-4xl">Technologies & Tools</motion.h1>
    
    <motion.div
     whileInView={{ opacity: 1, x: 0 }}
     initial={{ opacity: 0, x: -100}}
     transition={{ duration: 1.5 }}
    className="flex flex-wrap items-center justify-center pb-5 gap-6">

        {/* Icons */}

        <motion.div
        variants={iconVariants(1.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-blue-300 p-4">
        <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
         variants={iconVariants(3)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-4 border-blue-300 p-4">
        <FaHtml5 className="text-7xl text-red-500" />
        </motion.div>

        <motion.div
         variants={iconVariants(2)}
         initial="initial"
         animate="animate" 
        className="rounded-2xl border-4 border-blue-300 p-4">
        <IoLogoCss3 className="text-7xl text-blue-500" />
        </motion.div>

        <motion.div
         variants={iconVariants(4)}
         initial="initial"
         animate="animate" 
        className="rounded-2xl border-4 border-blue-300 p-4">
        <RiTailwindCssFill className="text-7xl text-blue-400" />
        </motion.div>

        <motion.div
         variants={iconVariants(1.5)}
         initial="initial"
         animate="animate" 
        className="rounded-2xl border-4 border-blue-300 p-4">
        <SiNextdotjs className="text-7xl text-blue-500" />
        </motion.div>

        <motion.div
         variants={iconVariants(4)}
         initial="initial"
         animate="animate" 
        className="rounded-2xl border-4 border-blue-300 p-4">
        <SiAdobeillustrator className="text-7xl text-orange-600" />
        </motion.div>

        <motion.div
         variants={iconVariants(6)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-4 border-blue-300 p-4">
        <SiAdobephotoshop className="text-7xl text-blue-600" />
        </motion.div>

    </motion.div>
  </div>

};

export default Skills;