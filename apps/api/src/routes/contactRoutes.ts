import { Router } from "express";
import {
  getContactMessages,
  postContactMessage,
  removeContactMessage
} from "../controllers/contactController";
import { asyncHandler } from "../middleware/asyncHandler";
import { requireAuth } from "../middleware/auth";
import { simpleRateLimit } from "../middleware/rateLimit";
import { validateContactInput } from "../middleware/validate";

export const contactRouter = Router();

contactRouter.post(
  "/",
  simpleRateLimit,
  validateContactInput,
  asyncHandler(postContactMessage)
);
contactRouter.get("/", requireAuth, asyncHandler(getContactMessages));
contactRouter.delete("/:id", requireAuth, asyncHandler(removeContactMessage));
