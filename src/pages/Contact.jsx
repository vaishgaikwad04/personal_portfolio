import React from "react";
import useScrollAnimation from "../hooks/ScrollAnimation";

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`py-24 px-4 sm:px-8 lg:px-16 text-center transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="flex flex-col items-end gap-1 w-full">
        <hr className="h-[1px] bg-gray-600 border-0 w-1/2" />
        <hr className="h-[1px] bg-gray-600 border-0 w-1/2" />
        <hr className="h-[1px] bg-gray-600 border-0 w-1/2" />
        <hr className="h-[1px] bg-gray-600 border-0 w-1/2" />
        <hr className="h-[1px] bg-gray-600 border-0 w-1/2" />
        <hr className="h-[1px] bg-gray-600 border-0 w-1/2" />
        <hr className="h-[1px] bg-gray-600 border-0 w-1/2" />
        <hr className="h-[1px] bg-gray-600 border-0 w-1/2" />
        <hr className="h-[1px] bg-gray-600 border-0 w-1/2" />
        <hr className="h-[1px] bg-gray-600 border-0 w-1/2" />
        <hr className="h-[1px] bg-gray-600 border-0 w-1/2" />
        <hr className="h-[1px] bg-gray-600 border-0 w-1/2" />
        <hr className="h-[1px] bg-gray-600 border-0 w-1/2" />
        <hr className="h-[1px] bg-gray-600 border-0 w-1/2" />
        <hr className="h-[1px] bg-gray-600 border-0 w-1/2" />
      </div>

      <div className="max-w-3xl mt-24">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-400 leading-snug text-left">
          Looking for a developer to build your next idea?
        </h2>

        {/* Subheading */}
        <p className="text-gray-400 mt-4 text-lg text-left">
          Let’s connect and create something meaningful together.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-left gap-4">
          <a
            href="mailto:vaishgaikwad472@gmail.com"
            className="px-6 py-3 text-white hover:bg-white hover:text-black transition duration-300"
          >
            Email Me
          </a>

          <a
            href="linkedin.com/in/vaishnavi-gaikwad-0508a6350"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border border-gray-600 text-gray-300 hover:border-white hover:text-white transition duration-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
