import profilePic from "../assets/MuazNazir5.jpeg";
import { motion } from "framer-motion";


const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay },},
});

const Hero = () => {
  return <div className="border-b border-gray-500 pb-6 lg:mb-36">

    <div className="flex items-center flex-wrap">
        <div className="w-full lg:w-1/2">
        <div className="flex flex-col ml-4 items-center lg:items-start">

            <motion.h1 
            variants={container(0)} initial="hidden" animate="visible"
            className="pb-4 text-6xl text-cyan-300 font-thin font-playfair tracking-tight text-center md:text-left lg:mt-16 lg:text-8xl">Muaz Nazir</motion.h1>

            <motion.span 
            variants={container(0.5)} initial="hidden" animate="visible"
            className="bg-gradient-to-r from-cyan-300 via-pink-300 to-gray-400 bg-clip-text md:text-4xl text-3xl tracking-tight font-lora text-transparent">Front-End Developer</motion.span>

            <motion.p 
            variants={container(1)} initial="hidden" animate="visible"
            className="my-2 max-w-xl text-2xl py-6 text-gray-400 text-center lg:text-left font-roboto">A front-end developer with a comprehensive background in computing and graphic design. My education includes a Higher National Diploma from Pearson College London and current studies towards a Bachelor’s degree at Arden University.</motion.p>
        
        </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8 flex justify-center">

            <motion.img
            initial={{ x: 100, opacity: 0}}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2}}
            className="lg:w-2/4 rounded-full" src={profilePic} alt="Muaz" />
            </div>
    </div>
  </div>
};

export default Hero;