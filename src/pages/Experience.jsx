import React from "react";
import useScrollAnimation from "../hooks/ScrollAnimation";

const  Experience = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [exp1Ref, exp1Visible] = useScrollAnimation();
  const [exp2Ref, exp2Visible] = useScrollAnimation();
  const [exp3Ref, exp3Visible] = useScrollAnimation();

  return (
    <div
      id="experience"
      className="mt-24 max-w-7xl mx-auto border-t border-gray-800 pt-12"
    >
      <div className="grid md:grid-cols-2 gap-12">

        {/* Left Column */}
        <div
          ref={titleRef}
          className={`text-gray-500 text-sm uppercase tracking-widest ml-6 md:ml-26 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          Experience
        </div>

        {/* Right Column */}
        <div className="space-y-10">

          {/* Ristel */}
          <div
            ref={exp1Ref}
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700 delay-100 ${
              exp1Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div>
              <h3 className="text-gray-300 text-lg font-medium">
                Ristel Technologies
              </h3>
              <p className="text-gray-400 text-sm">
                Frontend Developer Trainee
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Feb 2026 – Mar 2026
              </p>
            </div>

            <div>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>Built responsive UI components using React & Tailwind CSS</li>
                <li>Created reusable components and improved UX</li>
                <li>Debugged UI issues and collaborated with team</li>
              </ul>
            </div>
          </div>

          {/* Arkarz */}
          <div
            ref={exp2Ref}
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700 delay-200 ${
              exp2Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div>
              <h3 className="text-gray-300 text-lg font-medium">
                Arkarz Internet Pvt. Ltd.
              </h3>
              <p className="text-gray-400 text-sm">
                Backend Developer Intern
              </p>
              <p className="text-gray-500 text-sm mt-1">
                May 2023 – Aug 2023
              </p>
            </div>

            <div>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>Developed REST APIs using Node.js & Express</li>
                <li>Built authentication using JWT & RBAC</li>
                <li>Worked with MongoDB and schema design</li>
                <li>Integrated backend with frontend systems</li>
              </ul>
            </div>
          </div>

          {/* Freelancer */}
          <div
            ref={exp3Ref}
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700 delay-300 ${
              exp3Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div>
              <h3 className="text-gray-300 text-lg font-medium">
                Freelance Developer
              </h3>
              <p className="text-gray-400 text-sm">Freelancing</p>
              <p className="text-gray-500 text-sm mt-1">
                2024 – Present
              </p>
            </div>

            <div>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>Built full-stack MERN projects for clients</li>
                <li>Delivered responsive UI & scalable backend systems</li>
                <li>Worked on real-world problem-solving projects</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Experience;