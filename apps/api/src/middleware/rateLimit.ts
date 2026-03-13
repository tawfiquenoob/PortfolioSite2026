import { NextFunction, Request, Response } from "express";

const WINDOW_MS = 60 * 1000;
const LIMIT = 10;
const bucket = new Map<string, { count: number; windowStart: number }>();

export function simpleRateLimit(req: Request, res: Response, next: NextFunction) {
  const ip = req.ip || req.socket.remoteAddress || "unknown";
  const now = Date.now();
  const current = bucket.get(ip);

  if (!current || now - current.windowStart > WINDOW_MS) {
    bucket.set(ip, { count: 1, windowStart: now });
    return next();
  }

  if (current.count >= LIMIT) {
    return res.status(429).json({ message: "Too many requests" });
  }

  current.count += 1;
  bucket.set(ip, current);
  return next();
}
