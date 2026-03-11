import { Request, Response } from "express";
import {
  createProject,
  getProjectById,
  listProjects,
  removeProject,
  updateProject
} from "../services/projectService";

function parseProjectId(param: string): number | null {
  const id = Number(param);
  if (!Number.isInteger(id) || id <= 0) {
    return null;
  }
  return id;
}

export async function getProjects(_req: Request, res: Response) {
  const projects = await listProjects();
  return res.status(200).json(projects);
}

export async function getProject(req: Request, res: Response) {
  const id = parseProjectId(req.params.id);
  if (!id) {
    return res.status(400).json({ message: "Invalid project id" });
  }

  const project = await getProjectById(id);
  if (!project) {
    return res.status(404).json({ message: "Project not found" });
  }

  return res.status(200).json(project);
}

export async function postProject(req: Request, res: Response) {
  const project = await createProject(req.body);
  return res.status(201).json(project);
}

export async function putProject(req: Request, res: Response) {
  const id = parseProjectId(req.params.id);
  if (!id) {
    return res.status(400).json({ message: "Invalid project id" });
  }

  const existing = await getProjectById(id);
  if (!existing) {
    return res.status(404).json({ message: "Project not found" });
  }

  const project = await updateProject(id, req.body);
  return res.status(200).json(project);
}

export async function deleteProject(req: Request, res: Response) {
  const id = parseProjectId(req.params.id);
  if (!id) {
    return res.status(400).json({ message: "Invalid project id" });
  }

  const existing = await getProjectById(id);
  if (!existing) {
    return res.status(404).json({ message: "Project not found" });
  }

  await removeProject(id);
  return res.status(204).send();
}
