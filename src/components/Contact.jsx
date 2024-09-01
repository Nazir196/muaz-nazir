import {CONTACT} from "../constants";
import myResume from "../assets/Muaz Resume.pdf";
import { motion } from "framer-motion";

const Contact = () => {
  return <div className="border-b border-gray-500 pb-4 lg:mb-36">

    <motion.h1 
    whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100}} transition={{duration: 0.5}}
    className="my-10 text-center text-4xl text-cyan-300 font-lora">Get in Touch</motion.h1>

    <motion.div 
    whileInView={{opacity: 1, y: 0}} initial={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }}
    className="text-center mb-14 tracking-tighter">

    <a href="mailto:muaznazir123@gmail.com" className="border-b border-b-gray-400  my-4 hover:text-blue-300 text-2xl font-montserrat text-gray-400">{CONTACT.email}</a>
        <p className="my-4 text-2xl font-montserrat text-gray-400">{CONTACT.address}</p>
        <p className="my-4 mb-9 text-2xl font-montserrat text-gray-400">{CONTACT.phoneNo}</p>
        <a href={myResume} download={myResume} preview className="bg-blue-300 text-gray-600 hover:bg-gray-500 hover:text-white p-3 text-2xl rounded-lg">Download Resume</a>
    </motion.div>

    <p className="text-gray-400 text-center font-montserrat">Created this portfolio using React JS and Tailwind CSS.</p>
  </div>
}

export default Contact;