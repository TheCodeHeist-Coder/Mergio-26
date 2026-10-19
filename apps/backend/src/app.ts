import cors from "cors";
import express from "express";
import helmet from "helmet";
import { env } from "./env";
import { errorHandler, notFound } from "./middleware/error";
import { healthRouter } from "./routes/health";

export const app = express();

app.use(helmet());
app.use(cors({ origin: env.corsOrigin, credentials: true }));
app.use(express.json());

app.use("/health", healthRouter);

app.use(notFound);
app.use(errorHandler);
