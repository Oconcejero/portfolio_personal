import ProjectCard from "./ProjectCard";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function Portfolio() {
  return (
    <section className="px-6 sm:px-8 md:px-9 lg:px-20 py-20">
      {" "}
      <div className="max-w-6xl mx-auto px-4">
        {" "}
        <h2 className="text-3xl text-black font-bold mb-6">PORTFOLIO</h2>{" "}
        <p className="text-gray-600 mb-10">
          {" "}
          La mayoría de trabajos actuales son prácticas y diferentes ejercicios
          de programas de desarrollo.{" "}
        </p>{" "}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {" "}
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
