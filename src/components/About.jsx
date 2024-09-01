import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="border-b border-gray-500 pb-4 lg:mb-36">

        <h1 className="my-2 mt-7 text-center font-lora text-cyan-300 text-4xl">About 
            <span className="text-blue-300"> Me</span>
            </h1>

            <div className="w-full ">
            <div className="flex justify-center lg:justify-center">
                <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                 transition={{duration: 1}}
                className="my-2 max-w-xl text-2xl text-gray-400 font-roboto text-center py-6">With a Higher National Diploma in Computing and ongoing studies for a Bachelor’s in Computing, I offer a solid foundation in front-end development and advanced computing. Proficient in JavaScript, React.js, and Next.js, I deliver modern, efficient web solutions. My self-taught graphic design skills enhance my ability to create visually appealing and user-friendly interfaces. Combining technical expertise with design proficiency ensures a high-quality, responsive, and engaging digital experience for your project.</motion.p>
            </div>
            </div>
    </div>
  )
}

export default About;