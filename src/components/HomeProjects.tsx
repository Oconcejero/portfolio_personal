import ProjectCard from "./ProjectCard";
import Container from "./Container";
import { projects } from "@/data/projects";

export default function HomeProjects() {
  const latestProjects = [...projects]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);
  return (
    <section className="bg-white py-20 px-4">
      {" "}
      <Container>
        {" "}
        <h2 className="text-3xl text-black font-bold mb-10 text-center">
          {" "}
          ÚLTIMOS PROYECTOS{" "}
        </h2>{" "}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {" "}
          {latestProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}{" "}
        </div>{" "}
      </Container>{" "}
    </section>
  );
}
