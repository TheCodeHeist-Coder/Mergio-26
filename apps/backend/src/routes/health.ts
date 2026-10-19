import { prisma } from "@repo/db";
import { Router } from "express";

export const healthRouter = Router();

healthRouter.get("/", async (_req, res) => {
  await prisma.$queryRaw`SELECT 1`;
  res.json({ status: "ok", database: "connected" });
});
