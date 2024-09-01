import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return  <div className="border-b border-gray-500 pb-4 lg:mb-36">

    <motion.h1 
    whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100}} transition={{duration: 0.5}}
    className="my-20 text-center font-lora text-4xl text-cyan-300">Projects</motion.h1>
    <div>

                     {/* Project 1 */}

        <div className="mb-8 flex flex-wrap lg:justify-center">

          <motion.div 
          whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100}} transition={{duration: 1}}
          className="w-full lg:w-1/4">
          <iframe src="https://www.youtube.com/embed/D_DXx3A8qYQ?si=Pg6uvraIjyncUkRh" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </motion.div>

          <motion.div 
                whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100}} transition={{duration: 1}}
                className="w-full mt-5 md:m-0 max-w-xl lg:w-3/4">
                <h5 className="mb-2 text-blue-300 text-2xl font-montserrat">TIC, TAC, TOE GAME </h5>
                <h6 className="mb-2 text-gray-500 text-xl font-roboto">A web-based Tic Tac Toe game developed with HTML, CSS, and JavaScript, faithfully recreating the classic gameplay experience with a clean and responsive design.</h6>
                <p className="mb-4 text-gray-400 text-md font-roboto gap-3">HTML, CSS, JavaScript</p>
                </motion.div>

        </div>

                     {/* Project 2 */}

        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div 
          whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100}} transition={{duration: 1}}
          className="w-full lg:w-1/4">
          <iframe src="https://www.youtube.com/embed/EYIxs_jphmg?si=Lxd7QLyNS14LsKaa" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </motion.div>

          <motion.div 
                whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100}} transition={{duration: 1}}
                className="w-full mt-5 md:m-0 max-w-xl lg:w-3/4">
                <h5 className="mb-2 text-blue-300 text-2xl font-montserrat">Rock, Paper, Scissor GAME </h5>
                <h6 className="mb-2 text-gray-500 text-xl font-roboto">A classic game built with HTML, CSS, and JS. This interactive project features real-time gameplay and demonstrates my skills in front-end development and responsive design.</h6>
                <p className="mb-4 text-gray-400 text-md font-roboto gap-3">HTML, CSS, JavaScript</p>
                </motion.div>
               </div>

                            {/* Project 3 */}
          <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div 
          whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100}} transition={{duration: 1}}
          className="w-full lg:w-1/4">
          <iframe src="https://www.youtube.com/embed/DCXyYXP1EXM?si=kBCZLTTLL90r5QFT" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </motion.div>

          <motion.div 
                whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100}} transition={{duration: 1}}
                className="w-full mt-5 md:m-0 max-w-xl lg:w-3/4">
                <h5 className="mb-2 text-blue-300 text-2xl font-montserrat">Amazon UI Clone</h5>
                <h6 className="mb-2 text-gray-500 text-xl font-roboto">Created an Amazon clone website using HTML and CSS, replicating the design and layout of the e-commerce platform.</h6>
                <p className="mb-4 text-gray-400 text-md font-roboto gap-3">HTML, CSS</p>
                </motion.div>
               </div>

               {/* Project 4 */}
               
          <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div 
          whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100}} transition={{duration: 1}}
          className="w-full lg:w-1/4">
          <iframe src="https://www.youtube.com/embed/Vf85ApAPook?si=7I7QAV1GyfnbJpua" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </motion.div>

          <motion.div 
                whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100}} transition={{duration: 1}}
                className="w-full mt-5 md:m-0 max-w-xl lg:w-3/4">
                <h5 className="mb-2 text-blue-300 text-2xl font-montserrat">Drum Kit Player</h5>
                <h6 className="mb-2 text-gray-500 text-xl font-roboto">The project showcases my skills in DOM manipulation, event handling, and CSS animations, providing a seamless and engaging user experience. The responsive design ensures that the drum kit works flawlessly across different devices, making it accessible to everyone.</h6>
                <p className="mb-4 text-gray-400 text-md font-roboto gap-3">HTML, CSS, JavaScript</p>
                </motion.div>
               </div>

    </div>
  </div>
};

export default Projects;