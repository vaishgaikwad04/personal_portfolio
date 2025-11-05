import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projects.js";

function Project() {
const { slug } = useParams();
const project = projects.find((p) => p.slug === slug);

if (!project) {
return ( <section className="max-w-6xl mx-auto px-4 py-24 text-white text-center"> <h1 className="text-3xl font-semibold">Project not found</h1> <Link
       to="/"
       className="inline-block mt-4 text-indigo-400 underline hover:text-indigo-300 transition"
     >
Go back </Link> </section>
);
}

const index = projects.findIndex((p) => p.slug === slug);
const prev = index > 0 ? projects[index - 1] : null;
const next = index < projects.length - 1 ? projects[index + 1] : null;

const [activeIndex, setActiveIndex] = useState(0);
const galleryImages = project.images?.length ? project.images : [project.image];

const goPrev = () =>
setActiveIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
const goNext = () =>
setActiveIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);

return (
   <section className="max-w-8xl bg-black mt-12 mx-auto px-4 sm:px-6 lg:px-14  text-white animate-fadeIn"> <div className="grid gap-12 md:grid-cols-2 items-start">
{/* Info Section */}
<motion.div
className="space-y-8"
initial={{ opacity: 0, x: -20 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 1 }}
> <h1 className="text-2xl sm:text-3xl md:text-4xl mt-12 font-semibold leading-tight">
{project.title} </h1>


      <div>
        <h2 className="text-xl sm:text-2xl font-semibold">Overview</h2>
        <p className="mt-4 text-gray-300 leading-relaxed text-sm sm:text-base">
          {project.description}
        </p>
      </div>

      <div>
        <h3 className="text-lg sm:text-xl font-semibold">Technologies</h3>
        <ul className="flex flex-wrap gap-2 mt-4 text-sm sm:text-base">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 transition border border-white/20"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-md border border-white/30 text-white hover:border-white hover:scale-105 transition transform text-center shadow-md"
          >
            GitHub
          </a>
        )}
      </div>
    </motion.div>

    {/* Gallery Section */}
    <div className="relative w-full">
      <motion.div
        className="relative rounded-xl overflow-hidden group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={galleryImages[activeIndex]}
          alt={`${project.title} screenshot ${activeIndex + 1}`}
          className="w-full max-h-[450px] sm:max-h-[500px] object-contain bg-white/10 rounded-xl shadow-lg transition-transform duration-500 group-hover:scale-105"
        />

        {/* Navigation Buttons */}
        <motion.button
          aria-label="Previous image"
          onClick={goPrev}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 border border-white/30 text-white backdrop-blur px-3 py-2 rounded-full transition opacity-80 hover:opacity-100"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ←
        </motion.button>
        <motion.button
          aria-label="Next image"
          onClick={goNext}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 border border-white/30 text-white backdrop-blur px-3 py-2 rounded-full transition opacity-80 hover:opacity-100"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          →
        </motion.button>
      </motion.div>

      {/* Thumbnails */}
      <div className="mt-4 sm:mt-6 grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
        {galleryImages.map((img, i) => (
          <motion.button
            key={img}
            onClick={() => setActiveIndex(i)}
            className={`relative rounded-lg overflow-hidden border transition ${
              i === activeIndex
                ? "border-indigo-400 shadow-md"
                : "border-white/20 hover:border-indigo-300/60"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={img}
              alt={`${project.title} thumbnail ${i + 1}`}
              className="w-full h-16 sm:h-20 object-cover rounded-lg bg-white/5 hover:bg-white/10 transition shadow-md hover:shadow-lg"
            />
          </motion.button>
        ))}
      </div>
    </div>
  </div>

  {/* Prev / Next Links */}
  <div className="flex flex-col sm:flex-row justify-between mt-12 gap-2 sm:gap-0">
    {prev && (
      <Link
        to={`/project/${prev.slug}`}
        className="bg-white/10 hover:bg-white/20 border border-white/30 text-white backdrop-blur px-4 py-2 rounded-full transition hover:scale-105 shadow-sm"
      >
        ← {prev.title}
      </Link>
    )}
    <span className="flex-1" />
    {next && (
      <Link
        to={`/project/${next.slug}`}
        className="bg-white/10 hover:bg-white/20 border border-white/30 text-white backdrop-blur px-4 py-2 rounded-full transition hover:scale-105 shadow-sm"
      >
        {next.title} →
      </Link>
    )}
  </div>
</section>


);
}

export default Project;
