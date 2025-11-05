import React from "react";
import { motion } from "framer-motion";

function About() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Git",
    "Tailwind CSS",
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="min-h-screen bg-black text-gray-300 px-4 sm:px-6 lg:px-12 py-24 font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4 tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Some Glimpses <span className="text-white">About Me</span>
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-24 h-[2px] bg-gray-400 mx-auto rounded-full"
        ></motion.div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative w-full max-w-lg h-[450px]">
            {/* Base Image */}
            <img
              src="https://i.pinimg.com/736x/da/0d/53/da0d53ece606ef022e34df2ae35c0b8b.jpg"
              alt="Profile Base"
              className="absolute top-0 left-0 w-3/4 h-[350px] object-cover rounded-lg shadow-lg hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all duration-500"
            />

            {/* Overlay Image */}
            <img
              src="https://i.pinimg.com/1200x/c7/58/ab/c758abdc213e6482b4570475421f1be2.jpg"
              alt="Vaishnavi"
              className="absolute top-32 left-24 w-3/4 h-[350px] object-cover rounded-lg shadow-xl hover:shadow-[0_0_25px_rgba(239,68,68,0.4)] transition-all duration-500"
            />
          </div>
        </motion.div>

        {/* Right: Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="w-full lg:w-1/2 space-y-4 text-[15px] leading-relaxed"
        >
          <h3 className="text-gray-400 font-semibold uppercase tracking-widest">
            About Me
          </h3>

          <p className="text-gray-400">
            I’m <span className="text-white font-medium italic">Vaishnavi</span>, a Full-Stack Developer specializing in building scalable web applications using the{" "}
            <span className="text-white">MERN Stack.</span> I’m passionate about creating efficient digital solutions that balance performance, design, and usability.
          </p>

          <p className="text-gray-400">
            I focus on writing clean, maintainable code and building intuitive interfaces that improve user experience.
          </p>

          <p className="text-gray-400">
            I believe in <span className="text-white">continuous learning, collaboration, and attention to detail</span>.
            Every project I take is an opportunity to refine my craft, explore emerging tools, and create something impactful that blends performance and aesthetics.
          </p>

          {/* Skill Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap gap-3 pt-6"
          >
            {skills.map((s, i) => (
              <span
                key={i}
                className="bg-[#111] border border-gray-700 text-gray-200 px-4 py-2 rounded-md text-sm hover:bg-gray-500 hover:border-gray-500 transition-all"
              >
                {s}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;
