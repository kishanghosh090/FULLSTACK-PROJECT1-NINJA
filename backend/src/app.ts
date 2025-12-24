import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

import { connectDB } from "./config/db.js";
import { env } from "./config/env.js";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

/* -------------------- GLOBAL MIDDLEWARES -------------------- */
app.use(helmet());
app.use(cors({ origin: env.CLIENT_URL, credentials: true }));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

/* -------------------- HEALTH CHECK -------------------- */
app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

/* -------------------- API ROUTES -------------------- */
// app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/posts", postRoutes);

/* -------------------- ERROR HANDLER -------------------- */
app.use(errorHandler);

/* -------------------- DB INIT -------------------- */
connectDB();

export default app;
