# FULLSTACK-PROJECT1-NINJA

# Backend Architecture – Social Media + Chat Application

This backend is built using **Express + TypeScript** with a **hybrid API architecture** (REST + GraphQL),
real-time communication via **Socket.IO**, reliable message delivery using **Redis queues**, and
push notifications via **Firebase Cloud Messaging (FCM)**.

The architecture is designed to be **scalable, fault-tolerant, and interview-ready**.

---

## 🏗️ Tech Stack

- Node.js + Express
- TypeScript
- MongoDB (Mongoose)
- Redis + BullMQ
- Socket.IO
- REST APIs
- GraphQL (Apollo)
- Firebase Admin SDK (Push Notifications)

---

## 📁 Folder Structure Overview

```
src/
├── app.ts # Express app setup
├── server.ts # HTTP + Socket server
├── index.ts # Application entry point
│
├── config/ # Infrastructure & environment configs
│ ├── env.ts
│ ├── db.ts
│ ├── redis.ts
│ └── firebase.ts
│
├── rest/ # REST API modules (write-heavy operations)
│ ├── auth/
│ ├── users/
│ ├── posts/
│ └── chat/
│
├── graphql/ # GraphQL APIs (complex read operations)
│ ├── schema.ts
│ ├── context.ts
│ └── resolvers/
│ ├── friend.resolver.ts
│ └── feed.resolver.ts
│
├── services/ # Business logic (shared by REST & GraphQL)
│ ├── auth.service.ts
│ ├── user.service.ts
│ ├── chat.service.ts
│ └── friend.service.ts
│
├── socket/ # Socket.IO logic
│ ├── index.ts
│ └── chat.socket.ts
│
├── queues/ # Queue definitions (BullMQ)
│ └── message.queue.ts
│
├── workers/ # Background workers
│ └── message.worker.ts
│
├── middlewares/ # Express & Socket middlewares
│ ├── auth.middleware.ts
│ ├── socket.middleware.ts
│ └── error.middleware.ts
│
├── models/ # Database models (Mongoose)
│
├── utils/ # Helper utilities
│ ├── logger.ts
│ └── sendPush.ts
│
├── types/ # Global TypeScript type extensions
│ └── express.d.ts
```
