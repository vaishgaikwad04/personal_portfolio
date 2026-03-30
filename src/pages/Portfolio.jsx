import React, { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects.js";
import useScrollAnimation from "../hooks/ScrollAnimation.jsx";

function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const [ref, isVisible] = useScrollAnimation();

  return (
    <div>
      <section
        id="projects"
        ref={ref}
        className={`bg-black text-gray-200 py-24 px-6 md:px-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        {/* Heading */}
        <div className="text-left mb-16">
          <div className="flex justify-between text-gray-300 text-lg ">
            <h2 className="hover:text-gray-500 cursor-pointer transition duration-300">
              SELECTED WORK
            </h2>
            <Link to="/project">
              <h2 className="hover:text-gray-500 cursor-pointer transition duration-300">
                See all available works
              </h2>
            </Link>
          </div>
        </div>

        {/* Project Grid */}
        <div className="max-w-6xl flex flex-col gap-26">
          {projects.slice(0, 3).map((p, index) => {
            const [itemRef, itemVisible] = useScrollAnimation();

            return (
              <div
                key={p.slug}
                ref={itemRef}
                className={`group relative overflow-hidden bg-gradient-to-b from-gray-900 to-black hover:from-gray-800 hover:to-black shadow-[0_0_20px_rgba(255,255,255,0.05)] cursor-pointer transition-all duration-700 ${
                  itemVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-16"
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div
                  className="relative overflow-hidden"
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
                      className="h-auto w-320 object-cover brightness-75 group-hover:brightness-65 transition-all duration-500 group-hover:scale-105"
                    />
                  </a>

                  <h2 className="text-gray-400 mt-2 text-2xl transition-all duration-300 group-hover:translate-x-2">
                    {p.title}
                  </h2>

                  <h2 className="text-gray-500 text-xl mb-12 transition-all duration-300 group-hover:translate-x-2">
                    {p.summary}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 animate-fade-in"
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
    </div>
  );
}

export default Portfolio;