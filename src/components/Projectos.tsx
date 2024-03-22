//Vista de proyectos creados
import { useState, useEffect } from "react";
import { ProjectCard } from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  githubLink: string;
  image: string;
  tags: string[];
}

const Projectos = () => {



  //Obtener los proyectos (Por ahora del archivo proyectos.json)
  const [proyectos, setProyectos] = useState<Project[]>([]);

  //Obtener proyectos con fetch
  useEffect(() => {
    fetch("proyectos.json")
      .then((response) => response.json())
      .then((data) => setProyectos(data));
  }, []);

  return (
    <section
      id="proyectos"
      className="w-full bg-slate-950 flex flex-col justify-start items-center pb-20"
    >
      <h1 className="text-red-600 text-4xl font-bold text-center pt-10">
        Proyectos
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10 mb-2">
        {proyectos.map((proyecto, index) => {
          return (
            <ProjectCard
              key={index}
              title={proyecto.title}
              description={proyecto.description}
              githubLink={proyecto.githubLink}
              image={proyecto.image}
              tags={proyecto.tags}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projectos;
