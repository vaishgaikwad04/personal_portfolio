import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Home from "./pages/Home.jsx";

import Portfolio from "./pages/Portfolio.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Project from "./pages/Project.jsx";
import Footer from "./components/layout/Footer.jsx";
import Services from "./pages/Services.jsx";
import Experience from "./pages/Experience.jsx";
import "./App.css";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { to: "/project", label: "Work" },
    { to: "#about", label: "About" },
    { to: "/experience", label: "Experience" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans pl-6">
      {/* Navbar */}
      <nav className="flex items-center relative justify-between px-6 sm:px-12 lg:px-12 py-5 bg-black shadow-md relative z-20">
        {/* LEFT → Logo */}
        <h1 className="text-sm  tracking-wide text-gray-200 font-light">
          <NavLink
            to="/"
            className="text-xl font-semibold italic tracking-wide hover:opacity-70 transition duration-300 text-gray-200"
          >
            Vaishnavi Gaikwad
          </NavLink>
        </h1>

        {/* RIGHT → Nav + Social */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            <li>
              <NavLink
                to="/project"
                className="text-gray-400 hover:text-gray-200"
              >
                Work
              </NavLink>
            </li>

            <li>
              <a href="/#about" className="text-gray-400 hover:text-gray-200">
                About
              </a>
            </li>

            <li>
              <a
                href="/#experience"
                className="text-gray-400 hover:text-gray-200"
              >
                Experience
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Icon */}
        <div
          className="md:hidden text-2xl cursor-pointer text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
      <hr className="text-gray-800 m-4"></hr>

      {/* Routes */}
      <main className="flex-grow px-2 sm:pl-6 lg:pl-14 pl-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/experience" element={<Experience />} />

          <Route path="/project/:slug" element={<Project />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
