import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
  <div className="border-b border-gray-500 pb-4 lg:mb-36">
    <motion.h1 
    whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100}} transition={{duration: 0.5}}
    className="my-20 text-center text-4xl font-lora text-cyan-300">Projects</motion.h1>

    <div>
        {PROJECTS.map((project, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">

                <motion.div 
                whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100}} transition={{duration: 1}}
                className="w-full lg:w-1/4">
                  <img 
                  src={project.image} 
                  width={320}
                  height={320}
                  alt={project.title}
                  className="mb-6 rounded" />
                </motion.div>

                <motion.div 
                whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100}} transition={{duration: 1}}
                className="w-full max-w-xl lg:w-3/4">
                <h5 className="mb-2 text-blue-300 text-2xl font-montserrat">{project.title}</h5>
                <h6 className="mb-2 text-gray-500 text-xl font-roboto">{project.description}</h6>
                <p className="mb-2 text-gray-400 text-md font-roboto gap-3">{project.technologies}</p>
                <a className="mb-4 text-blue-300 text-xl font-montserrat" href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                </motion.div>
            </div>

        ))}
    </div>
  </div>
)};

export default Projects;