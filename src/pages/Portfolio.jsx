import React, { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects.js";

function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section
      id="projects"
      className="bg-black text-gray-200 py-24 px-6 md:px-16"
    >
      {/* Heading */}
      <div className="text-left mb-16">
        <div className="flex justify-between text-gray-300 text-lg ">
          <h2 className="hover:text-gray-500 cursor-pointer">SELECTED WORK</h2>
          <Link to="/project">
            <h2 className="hover:text-gray-500 cursor-pointer">
              See all available works
            </h2>
          </Link>
        </div>
      </div>

      {/* Project Grid */}
      <div className="max-w-6xl  flex flex-col gap-26">
        {projects.map((p) => (
          <div
            key={p.slug}
            className=" group relative overflow-hidden bg-gradient-to-b from-gray-900 to-black hover:from-gray-800 hover:to-black shadow-[0_0_20px_rgba(255,255,255,0.05)]  cursor-pointer"
          >
            <div
              className="relative  overflow-hidden"
              onClick={() => setSelectedImage(p.image)}
            >
              <a href={p.live} target="_blank" rel="noopener noreferrer">
                <img
                  src={p.image}
                  alt={
                    p.title
                      ? `${p.title} project screenshot`
                      : "Project screenshot"
                  }
                  loading="lazy"
                  className="h-auto w-320 object-cover brightness-75 group-hover:brightness-65"
                />
              </a>
              <h1></h1>
              <h2 className="text-gray-400 mt-2 text-2xl">{p.title}</h2>
              <h2 className="text-gray-500 text-xl">{p.summary}</h2>
            </div>
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
