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
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="min-h-screen bg-black text-gray-300 px-6 sm:px-10 lg:px-20 py-24 font-sans overflow-hidden"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4 tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          A Few Glimpses <span className="text-gray-400">About Me</span>
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-24 h-[2px] bg-gray-500 mx-auto rounded-full"
        ></motion.div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left: Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex justify-center relative"
        >
          {/* Soft Gradient Glow */}
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-gradient-to-r from-red-700/20 via-pink-600/20 to-purple-700/20 rounded-full blur-3xl animate-pulse"></div>

          <div className="relative w-full max-w-md h-[420px]">
            <img
              src="https://i.pinimg.com/736x/da/0d/53/da0d53ece606ef022e34df2ae35c0b8b.jpg"
              alt="Profile Base"
              className="absolute top-0 left-0 w-3/4 h-[320px] object-cover rounded-xl shadow-[0_0_30px_rgba(239,68,68,0.25)] hover:scale-[1.02] transition-transform duration-500"
            />
            <img
              src="https://i.pinimg.com/1200x/c7/58/ab/c758abdc213e6482b4570475421f1be2.jpg"
              alt="Vaishnavi"
              className="absolute top-28 left-28 w-3/4 h-[320px] object-cover rounded-xl shadow-[0_0_35px_rgba(239,68,68,0.3)] hover:scale-[1.03] transition-transform duration-500"
            />
          </div>
        </motion.div>

        {/* Right: Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="w-full lg:w-1/2 space-y-5 text-base sm:text-lg leading-relaxed"
        >
          <h3 className="text-gray-400 font-semibold uppercase tracking-widest">
            About Me
          </h3>

          <p>
            I’m{" "}
            <span className="text-white italic">Vaishnavi</span>, a{" "}
            <span className="text-white">Full-Stack Web Developer</span>{" "}
            passionate about building scalable and intuitive web applications
            using the{" "}
            <span className="text-white">MERN Stack.</span> I love
            crafting digital solutions that balance{" "}
            <span className="text-white">performance, design, and usability.</span>
          </p>

          <p>
            My approach focuses on writing{" "}
            <span className="text-white">clean, maintainable code</span>{" "}
            and developing interfaces that offer seamless user experiences.
          </p>

          <p>
            I believe in{" "}
            <span className="text-white">
              continuous learning, collaboration, and attention to detail.
            </span>{" "}
            Each project I take is a chance to explore new tools, refine my craft,
            and create meaningful digital experiences that merge aesthetics and
            performance.
          </p>

          {/* Skill Badges */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delayChildren: 0.3, staggerChildren: 0.1 },
              },
            }}
            className="flex flex-wrap gap-3 pt-8"
          >
            {skills.map((skill, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="bg-[#111] border border-gray-700 text-gray-200 px-4 py-2 rounded-md text-sm hover:bg-gray-600 hover:border-gray-500 hover:text-white transition-all"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;
