import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

function Home() {
return ( <div className="min-h-screen flex flex-col bg-black text-white font-sans overflow-hidden mt-4">


  {/* Hero Section */}
  <section className="flex flex-col lg:flex-row items-center justify-center px-6 sm:px-12 lg:px-14 py-12 gap-12 lg:gap-16 relative">

    {/* Left Image */}
    <motion.div
      className="flex-1 flex justify-center lg:justify-start items-center relative"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <div className="relative flex items-center justify-center w-60 h-72 sm:w-80 sm:h-96 lg:w-[24rem] lg:h-[26rem]   rounded-full  overflow-hidden">
        <motion.img
          src="/me.jpg"
          alt="Developer"
          className="w-71  h-auto object-contain"
          style={{ filter: "" }}
        />
      </div>
    </motion.div>

    {/* Right Content */}
    <motion.div
      className="flex-1 flex flex-col mt-16 mr-4 items-center lg:items-start text-center lg:text-left relative z-10 px-4 sm:px-0 max-w-full lg:max-w-3xl"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Subtle Gradient Behind Text */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-radial from-white/5 to-transparent rounded-full blur-3xl -z-10"></div>

      <h1 className="text-lg sm:text-xl italic text-gray-400 tracking-wide">
        Hi, I'm <span className="text-white italic">Vaishnavi</span>
      </h1>

      <motion.h2
        className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-white mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Full Stack Web Developer
      </motion.h2>

      <p className="text-gray-400 mt-6 text-base sm:text-lg mb-2 leading-relaxed">
        I specialize in building{" "}
        <span className="text-white font-semibold">
          modern, scalable, and efficient web applications
        </span>
        . With strong expertise in the MERN stack, I focus on writing clean,
        optimized code and creating seamless digital experiences.
      </p>

      <div className="flex flex-col sm:flex-row gap-5 mt-8 justify-center lg:justify-start">
        <Link
          to="/portfolio"
          className="px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl font-semibold bg-white text-black hover:bg-gray-200 transition-transform transform hover:scale-105"
        >
          View Work
        </Link>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl border border-gray-600 text-gray-300 hover:bg-gray-500 hover:border-gray-600 transition-transform transform hover:scale-105"
        >
          Resume
        </a>
      </div>
    </motion.div>

  </section>

  {/* Other Sections */}
  <Portfolio />
  <About />
  <Services />
  <Contact />

</div>


);
}

export default Home;
