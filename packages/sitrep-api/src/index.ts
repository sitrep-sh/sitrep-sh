import { Elysia } from "elysia";

const app = new Elysia()
  .get("/", () => "Hello from Sitrep API!")
  .get("/health", () => ({ status: "ok", timestamp: new Date().toISOString() }))
  .listen(3000);

console.log(
  `🦊 Sitrep API is running at ${app.server?.hostname}:${app.server?.port}`
);

export type App = typeof app;
