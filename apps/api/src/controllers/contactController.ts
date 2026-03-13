import { Request, Response } from "express";
import {
  createContactMessage,
  deleteContactMessage,
  listContactMessages
} from "../services/contactService";
import { sendContactNotification } from "../services/emailService";

function parseId(param: string): number | null {
  const id = Number(param);
  if (!Number.isInteger(id) || id <= 0) return null;
  return id;
}

export async function postContactMessage(req: Request, res: Response) {
  const saved = await createContactMessage(req.body);
  const emailResult = await sendContactNotification(req.body);
  return res.status(201).json({
    id: saved.id,
    createdAt: saved.createdAt,
    notificationSent: emailResult.sent
  });
}

export async function getContactMessages(_req: Request, res: Response) {
  const messages = await listContactMessages();
  return res.status(200).json(messages);
}

export async function removeContactMessage(req: Request, res: Response) {
  const id = parseId(req.params.id);
  if (!id) {
    return res.status(400).json({ message: "Invalid contact message id" });
  }
  await deleteContactMessage(id);
  return res.status(204).send();
}
