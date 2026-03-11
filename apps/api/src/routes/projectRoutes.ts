import { Router } from "express";
import {
  deleteProject,
  getProject,
  getProjects,
  postProject,
  putProject
} from "../controllers/projectController";
import { asyncHandler } from "../middleware/asyncHandler";
import { requireAuth } from "../middleware/auth";
import { validateProjectInput } from "../middleware/validate";

export const projectRouter = Router();

projectRouter.get("/", asyncHandler(getProjects));
projectRouter.get("/:id", asyncHandler(getProject));
projectRouter.post(
  "/",
  requireAuth,
  validateProjectInput,
  asyncHandler(postProject)
);
projectRouter.put(
  "/:id",
  requireAuth,
  validateProjectInput,
  asyncHandler(putProject)
);
projectRouter.delete("/:id", requireAuth, asyncHandler(deleteProject));
