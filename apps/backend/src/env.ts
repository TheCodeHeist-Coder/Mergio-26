export const env = {
  port: Number(process.env.PORT ?? 4000),
  corsOrigin: (process.env.CORS_ORIGIN ?? "http://localhost:3001")
    .split(",")
    .map((origin) => origin.trim()),
  isProduction: process.env.NODE_ENV === "production",
};
