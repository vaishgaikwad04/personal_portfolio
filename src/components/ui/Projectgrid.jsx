import { projects } from "../../data/projects";
import useScrollAnimation from "../../hooks/ScrollAnimation";

function ProjectsGrid({ limit }) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="bg-black text-white">
      <div ref={ref} className="grid md:grid-cols-2 gap-2 py-12 ml-12">
        {displayedProjects.map((project, index) => (
          <div
            key={project.id || index}
            className={`group transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{
              transitionDelay: `${index * 150}ms`,
            }}
          >
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-110 object-cover  transition-all duration-700 ease-in-out opacity-70 group-hover:opacity-50"
              />
            </a>

            <h2 className="text-lg md:text-xl tracking-wide text-gray-300 mt-2 transition-all duration-500 group-hover:translate-x-1">
              {project.title}
            </h2>

            <p className="text-lg mb-32 text-gray-500 transition-all duration-500 group-hover:text-gray-300">
              {project.summary}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsGrid;
