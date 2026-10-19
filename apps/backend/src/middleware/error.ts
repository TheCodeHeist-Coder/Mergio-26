import type { ErrorRequestHandler, RequestHandler } from "express";
import { env } from "../env";

export const notFound: RequestHandler = (req, res) => {
  res.status(404).json({ error: `Not found: ${req.method} ${req.path}` });
};

export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({
    error: env.isProduction ? "Internal server error" : String(err?.message ?? err),
  });
};
