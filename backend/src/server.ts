import http from "http";
import app from "./app.js";
import { env } from "./config/env.js";
// import { initSocket } from "./socket";

const server = http.createServer(app);

/* -------------------- SOCKET INIT -------------------- */
// initSocket(server);

/* -------------------- SERVER START -------------------- */
server.listen(env.PORT, () => {
  console.log(`🚀 Server running on port ${env.PORT}`);
});

/* -------------------- GRACEFUL SHUTDOWN -------------------- */
const shutdown = (signal: string) => {
  console.log(`\n⚠️  Received ${signal}. Shutting down gracefully...`);

  server.close(() => {
    console.log("🛑 HTTP server closed");
    process.exit(0);
  });

  setTimeout(() => {
    console.error("❌ Force shutdown");
    process.exit(1);
  }, 10000);
};

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);
