
import { projects } from "../../data/projects";

function ProjectsGrid({ limit }) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="bg-black text-white ml-12">
      <div className="grid md:grid-cols-2 gap-1 py-4">
        {displayedProjects.map((project) => (
         <div>
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[620px] object-cover transition duration-500 opacity-70 group-hover:opacity-50"
              />
            </a>
            <h2 className="text-xl md:text-2xl  tracking-wide text-gray-300 mt-2">
              {project.title}
            </h2>

            <p className="text-xl mb-24 text-gray-500">{project.summary}</p>
        </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsGrid;
