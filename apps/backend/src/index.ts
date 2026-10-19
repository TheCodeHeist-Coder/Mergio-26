import { prisma } from "@repo/db";
import { app } from "./app";
import { env } from "./env";

const server = app.listen(env.port, () => {
  console.log(`Backend running on http://localhost:${env.port}`);
});

async function shutdown() {
  server.close();
  await prisma.$disconnect();
  process.exit(0);
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
