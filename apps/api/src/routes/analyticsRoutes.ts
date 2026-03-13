import { Router } from "express";
import { getSummary, postPageView } from "../controllers/analyticsController";
import { asyncHandler } from "../middleware/asyncHandler";
import { requireAuth } from "../middleware/auth";
import { simpleRateLimit } from "../middleware/rateLimit";
import { validatePageViewInput } from "../middleware/validate";

export const analyticsRouter = Router();

analyticsRouter.post(
  "/page-view",
  simpleRateLimit,
  validatePageViewInput,
  asyncHandler(postPageView)
);
analyticsRouter.get("/summary", requireAuth, asyncHandler(getSummary));
