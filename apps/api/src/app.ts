import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { config } from "./config";
import { errorHandler, notFoundHandler } from "./middleware/errorHandler";
import { authRouter } from "./routes/authRoutes";
import { projectRouter } from "./routes/projectRoutes";

export const app = express();

app.use(helmet());
app.use(
  cors({
    origin: config.corsOrigin
  })
);
app.use(express.json());
app.use(morgan("dev"));

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use("/api/auth", authRouter);
app.use("/api/projects", projectRouter);

app.use(notFoundHandler);
app.use(errorHandler);
