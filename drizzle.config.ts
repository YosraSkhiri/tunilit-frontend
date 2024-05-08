import { type Config } from "drizzle-kit";

//import { env } from "~/env";

export default {
  schema: "./src/server/db/schema.ts",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL,
  },
  tablesFilter: ["tl_*"],
} satisfies Config;
