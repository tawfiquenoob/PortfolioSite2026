import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { config } from "../config";

export function login(req: Request, res: Response) {
  const { email, password } = req.body as { email?: string; password?: string };

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  if (email !== config.adminEmail || password !== config.adminPassword) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ sub: "admin", email }, config.jwtSecret, {
    expiresIn: "12h"
  });

  return res.status(200).json({ token });
}
