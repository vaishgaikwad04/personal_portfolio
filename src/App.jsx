import React, { useState } from "react";
import {
  Routes,
  Route,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";

import Home from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Project from "./pages/Project.jsx";
import Footer from "./components/layout/Footer.jsx";
import Services from "./pages/Services.jsx";
import Experience from "./pages/Experience.jsx";
import "./App.css";
import Cursor from "./components/ui/Cursor.jsx";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (section) => {
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 200); // delay ensures Home is rendered
    } else {
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans">
      <Cursor />

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-5 bg-black relative z-30 animate-fade-in-down">
        
        <NavLink
          to="/"
          className="text-lg italic tracking-wide text-gray-400 hover:opacity-70 transition ml-8"
        >
          Vaishnavi Gaikwad | Web Developer
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          
          <NavLink
            to="/project"
            className="text-gray-400 hover:text-white transition-all duration-300 hover:tracking-wider"
          >
            Work
          </NavLink>

          <button
            onClick={() => handleScroll("about")}
            className="text-gray-400 hover:text-white transition-all duration-300 hover:tracking-wider"
          >
            About
          </button>

          <button
            onClick={() => handleScroll("experience")}
            className="text-gray-400 hover:text-white transition-all duration-300 hover:tracking-wider"
          >
            Experience
          </button>

        </div>

        {/* Hamburger */}
        <div
          className="md:hidden w-10 h-10 flex items-center justify-center cursor-pointer z-40 hover:opacity-70 transition"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="relative w-6 h-5">
            <span
              className={`absolute left-0 w-full h-[2px] bg-white transition-all duration-500 ${
                mobileMenuOpen ? "top-2.5 rotate-45" : "top-0"
              }`}
            ></span>

            <span
              className={`absolute left-0 w-full h-[2px] bg-white transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : "top-2.5"
              }`}
            ></span>

            <span
              className={`absolute left-0 w-full h-[2px] bg-white transition-all duration-500 ${
                mobileMenuOpen ? "top-2.5 -rotate-45" : "top-5"
              }`}
            ></span>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-black/95 backdrop-blur-xl flex flex-col justify-center px-10 transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] z-20 ${
            mobileMenuOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-110 pointer-events-none"
          }`}
        >
          <div className="flex flex-col space-y-10 text-3xl font-light tracking-wide">
            
            <NavLink
              to="/project"
              onClick={() => setMobileMenuOpen(false)}
            >
              Work
            </NavLink>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleScroll("about");
              }}
            >
              About
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleScroll("experience");
              }}
            >
              Experience
            </button>

          </div>
        </div>
      </nav>

      <hr className="border-gray-800 mx-6" />

      {/* ROUTES */}
      <main className="flex-grow relative">
        <div key={location.pathname} className="animate-fade-in-page">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/project" element={<Project />} />
            <Route path="/project/:slug" element={<Project />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;