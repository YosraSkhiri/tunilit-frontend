import { type Config } from "drizzle-kit";

import { env } from "./src/env";

export default {
  schema: "./src/server/db/schema.ts",
  driver: "pg",
  dbCredentials: {
    connectionString: env.POSTGRES_URL,
  },
  tablesFilter: ["tl_*"],
} satisfies Config;
