import React, { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects.js";
import { motion } from "framer-motion";

function Portfolio() {
const [selectedImage, setSelectedImage] = useState(null);

return ( <section id="projects" className="bg-black text-gray-200 py-24 px-6 md:px-16">


  {/* Heading */}
  <div className="text-center mb-16">
    <motion.h2
      className="text-4xl md:text-5xl font-semibold text-white mb-4 tracking-wide"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Recent Works
    </motion.h2>
    <div className="w-24 h-[2px] bg-gray-700 mx-auto rounded-full"></div>
    <motion.p
      className="text-gray-400 mt-4 text-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 1 }}
    >
      A glimpse of the projects I’ve built with passion and precision.
    </motion.p>
  </div>

  {/* Project Grid */}
  <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
    {projects.map((p) => (
      <div
        key={p.slug}
        className="group relative overflow-hidden border border-gray-800 bg-gradient-to-b from-gray-900 to-black hover:from-gray-800 hover:to-black shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-500 hover:-translate-y-2 cursor-pointer"
      >
        <Link to={`/project/${p.slug}`} className="block">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="relative"
          >
            <div
              className="relative h-64 sm:h-72 md:h-80 overflow-hidden"
              onClick={() => setSelectedImage(p.image)}
            >
              <img
                src={p.image}
                alt={p.title ? `${p.title} project screenshot` : "Project screenshot"}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-in-out scale-110 group-hover:scale-125 group-hover:brightness-75"
              />

              {/* Overlay Text */}
              <motion.div
                className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold text-white drop-shadow-md">
                  {p.title || "Project"}
                </h3>
                <p className="text-gray-300 text-sm mt-2 line-clamp-3">
                  {p.description || "Click to view project details"}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </Link>
      </div>
    ))}
  </div>

  {/* Lightbox Modal */}
  {selectedImage && (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
      onClick={() => setSelectedImage(null)}
    >
      <img
        src={selectedImage}
        alt="Enlarged project"
        className="max-h-full max-w-full rounded-2xl shadow-2xl"
      />
    </div>
  )}
</section>

);
}

export default Portfolio;
