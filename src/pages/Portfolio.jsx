import React, { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects.js";
import useScrollAnimation from "../hooks/ScrollAnimation.jsx";

function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  // ✅ Only ONE hook (correct way)
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
          <div className="flex justify-between text-gray-300 text-lg">
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

        {/* Project List */}
        <div className="max-w-6xl mx-auto flex flex-col gap-16">
          {projects.slice(0, 3).map((p, index) => {
            return (
              <div
                key={p.slug}
                className={`group relative overflow-hidden bg-gradient-to-b from-gray-900 to-black hover:from-gray-800 transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-16"
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div
                  className="relative overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(p.image)}
                >
                  {/* Image */}
                  <a href={p.live} target="_blank" rel="noopener noreferrer">
                    <img
                      src={p.image}
                      alt={
                        p.title
                          ? `${p.title} project screenshot`
                          : "Project screenshot"
                      }
                      loading="lazy"
                      className="w-full h-[400px] object-cover brightness-75 group-hover:brightness-50 transition-all duration-500 group-hover:scale-105"
                    />
                  </a>

                  {/* Title */}
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-gray-300 mt-4 text-2xl transition-all duration-500 group-hover:translate-x-1">
                        {p.title}
                      </h2>

                      <p className="text-gray-500 text-lg mb-10 transition-all duration-500 group-hover:text-gray-300">
                        {p.summary}
                      </p>
                    </div>

                    <div className="text-gray-400 text-lg font-semibold mt-4">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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
    </div>
  );
}

export default Portfolio;
