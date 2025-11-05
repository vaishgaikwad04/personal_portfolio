import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { FaGithub, FaLinkedinIn, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import Home from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Project from "./pages/Project.jsx";
import Footer from "./components/layout/Footer.jsx";
import Services from "./pages/Services.jsx";
import "./App.css";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { to: "/portfolio", label: "Portfolio" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 sm:px-12 lg:px-24 py-5 bg-black shadow-md relative z-20">
        {/* Logo */}
        <h1 className="text-3xl font-semibold tracking-wide text-gray-400">
          <NavLink to="/" className="hover:text-gray-400 transition-colors duration-300">
            MySpace
          </NavLink>
        </h1>

        {/* Centered Desktop Nav Links */}
        <ul className="hidden md:flex space-x-16 absolute left-1/2 transform -translate-x-1/2">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `relative text-white text-normal font-normal transition-colors duration-300 ${
                    isActive ? "text-gray-400 after:w-full" : "hover:text-gray-400"
                  } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-gray-400 after:transition-all after:duration-300 ${
                    isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex space-x-6 text-xl text-white ml-auto">
          <a
            href="https://github.com/vaishgaikwad04"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/vaishnavi-gaikwad-772205307"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://instagram.com/vaishgaikwad_4"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Hamburger Icon */}
        <div
          className="md:hidden text-2xl cursor-pointer text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-black bg-opacity-95 transform transition-transform duration-300 z-30 md:hidden ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col items-center justify-center h-full space-y-10 text-white">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-xl font-medium transition-colors duration-300 ${
                      isActive ? "text-gray-400" : "hover:text-gray-400"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            {/* Mobile Social Icons */}
            <div className="flex space-x-8 text-2xl mt-8">
              <a
                href="https://github.com/vaishgaikwad04"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/vaishnavi-gaikwad-772205307"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://instagram.com/vaishgaikwad_4"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                <FaInstagram />
              </a>
            </div>
          </ul>
        </div>
      </nav>

      {/* Routes */}
      <main className="flex-grow px-4 sm:px-10 lg:px-24 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/project/:slug" element={<Project />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
