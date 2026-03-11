import { prisma } from "../prisma";
import { ProjectInput } from "../types";

export async function listProjects() {
  return prisma.project.findMany({
    orderBy: {
      createdAt: "desc"
    }
  });
}

export async function getProjectById(id: number) {
  return prisma.project.findUnique({
    where: { id }
  });
}

export async function createProject(data: ProjectInput) {
  return prisma.project.create({
    data: {
      ...data,
      featured: data.featured ?? false
    }
  });
}

export async function updateProject(id: number, data: ProjectInput) {
  return prisma.project.update({
    where: { id },
    data
  });
}

export async function removeProject(id: number) {
  return prisma.project.delete({
    where: { id }
  });
}
