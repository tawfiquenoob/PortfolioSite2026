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

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  projectType: z.string().min(2),
  message: z.string().min(10)
});

const pageViewSchema = z.object({
  path: z.string().min(1).max(120).optional()
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

export function validateContactInput(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const result = contactSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      message: "Invalid contact payload",
      errors: result.error.flatten()
    });
  }
  req.body = result.data;
  return next();
}

export function validatePageViewInput(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const result = pageViewSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      message: "Invalid page view payload",
      errors: result.error.flatten()
    });
  }
  req.body = result.data;
  return next();
}
