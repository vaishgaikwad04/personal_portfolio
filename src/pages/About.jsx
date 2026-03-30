import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import useScrollAnimation from "../hooks/ScrollAnimation";

const About = () => {
  // hooks for each section
  const [introRef, introVisible] = useScrollAnimation();
  const [nameRef, nameVisible] = useScrollAnimation();
  const [descRef, descVisible] = useScrollAnimation();
  const [philoRef, philoVisible] = useScrollAnimation();
  const [skillsRef, skillsVisible] = useScrollAnimation();
  const [servicesRef, servicesVisible] = useScrollAnimation();

  return (
    <div id="about">
      {/* Social Icons */}
      <div className="flex justify-center gap-12">
        <a href="https://github.com/vaishgaikwad04" target="_blank" rel="noreferrer">
          <FaGithub className="text-white text-lg hover:opacity-70 transition" />
        </a>

        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedinIn className="text-[#0A66C2] text-lg hover:opacity-70 transition" />
        </a>

        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram className="text-[#E4405F] text-lg hover:opacity-70 transition" />
        </a>
      </div>

      <section className="bg-black text-white w-full py-20 px-4 sm:px-8 lg:px-16">
        <div className="max-w-6xl ml-20 md:ml-64">

          {/* Intro */}
          <div
            ref={introRef}
            className={`mb-16 transition-all duration-700 ease-out will-change-transform ${
              introVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-gray-400 text-xl max-w-2xl leading-relaxed">
              I didn’t start with a clear plan to become a developer — I started
              by trying to understand how things work. That curiosity turned
              into building projects, breaking them, fixing them, and slowly
              getting better at it.
            </p>
          </div>

          {/* Name */}
          <div
            ref={nameRef}
            className={`mb-20 transition-all duration-700 delay-100 ${
              nameVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-gray-200 text-xl italic">Hello I'm</h3>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-wide">
              Vaishnavi Gaikwad
            </h1>
            <p className="text-gray-500 mt-2">( web developer )</p>
          </div>

          {/* Description */}
          <div
            ref={descRef}
            className={`grid md:grid-cols-2 gap-12 mb-24 text-lg transition-all duration-700 delay-200 ${
              descVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-gray-400 leading-relaxed">
              I work mainly with the MERN stack, building full-stack
              applications that focus on real functionality. I’ve built features
              like authentication systems, CRUD operations, and basic eCommerce flows.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Not everything works perfectly the first time, but understanding
              why something broke is something I enjoy. I prefer building
              practical projects over flashy ones.
            </p>
          </div>

          {/* Philosophy */}
          <div
            ref={philoRef}
            className={`mb-24 transition-all duration-700 delay-300 ${
              philoVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="text-gray-400 text-sm uppercase tracking-widest mb-4">
              Philosophy
            </h2>
            <p className="text-gray-300 max-w-2xl leading-relaxed text-lg">
              For me, development is about writing code that makes sense — not
              just for now, but later too. Clean, readable, and maintainable
              code always matters more than clever shortcuts.
            </p>
          </div>

          {/* Skills */}
          <div
            ref={skillsRef}
            className={`mb-24 text-lg transition-all duration-700 delay-400 ${
              skillsVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <h2 className="text-gray-400 text-sm uppercase tracking-widest mb-8">
              Skills
            </h2>

            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-gray-500 mb-2">Frontend</h3>
                <p className="text-gray-300">
                  React · JavaScript · Bootstrap · Tailwind CSS · Responsive UI
                </p>
              </div>

              <div>
                <h3 className="text-gray-500 mb-2">Backend</h3>
                <p className="text-gray-300">
                  Node.js · Express · REST APIs · Authentication · Socket.IO
                </p>
              </div>

              <div>
                <h3 className="text-gray-500 mb-2">Database</h3>
                <p className="text-gray-300">
                  MongoDB · Mongoose · Data Handling
                </p>
              </div>

              <div>
                <h3 className="text-gray-500 mb-2">Focus Areas</h3>
                <p className="text-gray-300">
                  CRUD · Debugging · Project Structure · API Integration
                </p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div
            ref={servicesRef}
            className={`transition-all duration-700 delay-500 ${
              servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-gray-400 text-sm uppercase tracking-widest mb-8">
              Services
            </h2>

            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <p className="text-gray-500">( WD )</p>
                <h3 className="text-white text-lg">Web Applications</h3>
                <p className="text-gray-400 text-sm">
                  Building complete apps with real functionality.
                </p>
              </div>

              <div>
                <p className="text-gray-500">( FD )</p>
                <h3 className="text-white text-lg">Frontend</h3>
                <p className="text-gray-400 text-sm">
                  Clean and responsive interfaces.
                </p>
              </div>

              <div>
                <p className="text-gray-500">( BD )</p>
                <h3 className="text-white text-lg">Backend</h3>
                <p className="text-gray-400 text-sm">
                  APIs and server-side logic.
                </p>
              </div>

              <div>
                <p className="text-gray-500">( FS )</p>
                <h3 className="text-white text-lg">Full Stack</h3>
                <p className="text-gray-400 text-sm">
                  Connecting frontend and backend.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default About;