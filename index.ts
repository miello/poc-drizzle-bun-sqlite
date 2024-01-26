import { Database } from "bun:sqlite";
import { drizzle } from "drizzle-orm/bun-sqlite";
import * as schema from "./src/schema";
import { eq } from "drizzle-orm";

const sqlite = new Database("sqlite.db");
const db = drizzle(sqlite, { schema });

const insertNewData = async () => {
  await db.transaction(async (tx) => {
    await tx.insert(schema.users).values({
      userId: "1234",
      data: "Hello world",
    });

    await tx.insert(schema.users).values({
      userId: "23456",
      data: "Hello world",
    });

    await tx.insert(schema.projects).values({
      userId: "1234",
      projectId: "Hello World",
    });
  });
};

const queryData = async () => {
  const projectEntry = await db
    .select()
    .from(schema.projects)
    .fullJoin(schema.users, eq(schema.users.userId, schema.projects.userId))
    .where(eq(schema.users.userId, "1234"));

  console.log(projectEntry);

  const projectEntry2 = await db
    .select({
      userId: schema.users.userId,
      projectId: schema.projects.projectId,
      data: schema.users.data,
    })
    .from(schema.projects)
    .fullJoin(schema.users, eq(schema.users.userId, schema.projects.userId))
    .where(eq(schema.users.userId, "1234"));

  console.log(projectEntry2);
};

try {
  await insertNewData();
} catch (err) {
} finally {
  await queryData();
}
