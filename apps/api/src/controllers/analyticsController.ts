import { Request, Response } from "express";
import { getAnalyticsSummary, trackPageView } from "../services/analyticsService";

export async function postPageView(req: Request, res: Response) {
  const path = typeof req.body?.path === "string" ? req.body.path : "/";
  await trackPageView(path);
  return res.status(201).json({ ok: true });
}

export async function getSummary(_req: Request, res: Response) {
  const summary = await getAnalyticsSummary();
  return res.status(200).json(summary);
}
