import { defineConfig } from "drizzle-kit"
export default defineConfig({
  schema: "./src/schema",
  out: "./src/drizzle",
  verbose: true,
  strict: true,
  driver: "better-sqlite",
  dbCredentials: {
    url: "./sqlite.db",
  },
})
