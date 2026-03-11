import { Project } from "@/lib/types";
import { ProjectCard } from "./project-card";

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="section-container">
      <h2 className="text-3xl font-bold md:text-4xl">Selected Projects</h2>
      <p className="mt-4 max-w-2xl text-muted">
        Projects are served from PostgreSQL through an Express + Prisma API.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
