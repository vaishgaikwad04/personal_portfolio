import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Experience from "./Experience";

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans overflow-hidden mt-4">
      
      

        <p className="text-gray-400 mt-6 text-3xl sm:text-4xl mb-2 ml-180">
          I build full-stack web applications from frontend to backend, focusing
          on performance, scalability, and smooth user experience.
        </p>
   
   
      <Portfolio />
      <About/>
      <Experience/>
      <Contact/>
    </div>
  );
}

export default Home;
