import { NextFunction, Request, Response } from "express";
import { z } from "zod";

const projectSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(10),
  techStack: z.array(z.string().min(1)).min(1),
  githubUrl: z.string().url(),
  liveUrl: z.string().url(),
  imageUrl: z.string().url(),
  featured: z.boolean().optional()
});

export function validateProjectInput(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const result = projectSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      message: "Invalid project payload",
      errors: result.error.flatten()
    });
  }

  req.body = result.data;
  return next();
}
