import { type Config } from "drizzle-kit";

import { env } from "./src/env";

export default {
  schema: "./src/server/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.POSTGRES_URL,
  },
  out: "./drizzle",
  tablesFilter: ["tl_*"],
} satisfies Config;
