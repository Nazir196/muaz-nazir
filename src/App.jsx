import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Expertise from './components/Expertise';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

export const App = () => {
  return (
    <div className="overflow-x-hidden antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>      

      </div>
         <div className="container mx-auto px-8">
         <Navbar />
         <Hero />
         <About />
         <Skills />
         <Expertise />
         <Education />
         <Projects />
         <Contact />
         
         </div>
    </div>
  );
};

export default App;
