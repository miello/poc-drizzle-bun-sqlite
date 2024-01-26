import { sqliteTable, text } from "drizzle-orm/sqlite-core"

export const users = sqliteTable(
  "users",
  {
    userId: text("user_id").primaryKey(),
    data: text("data"),
    testing: text("testing")
  },
)

export const projects = sqliteTable(
  "projects",
  {
    userId: text("user_id").primaryKey(),
    projectId: text("project_id"),
  }
)
