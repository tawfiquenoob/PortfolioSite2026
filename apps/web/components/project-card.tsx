"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/lib/types";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="glass-card overflow-hidden"
    >
      <div className="relative h-52 w-full">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold">{project.title}</h3>
        <p className="mt-3 text-muted">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-700 px-3 py-1 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="text-accent transition-opacity hover:opacity-80"
          >
            Live
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-accent transition-opacity hover:opacity-80"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
}
