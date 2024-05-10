import { relations, sql } from "drizzle-orm";
import {
  boolean,
  integer,
  pgTableCreator,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `tl_${name}`);

export const schools = createTable(
  "schools",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }).notNull(),
    logo_link: varchar("logo_link", { length: 1024 }).notNull(),
    code: varchar("code", { length: 256 }),
    is_verified: boolean("is_verified"),
    description: text("description"),
    website: varchar("website", { length: 256 }),
    phone: varchar("phone", { length: 256 }),
    mobile: varchar("mobile", { length: 256 }),
    mail: varchar("mail", { length: 256 }),
    sm_youtube_link: varchar("sm_youtube_link", { length: 256 }),
    sm_messenger_link: varchar("sm_messenger_link", { length: 256 }),
    sm_instagram_link: varchar("sm_instagram_link", { length: 256 }),
    sm_linkedin_link: varchar("sm_linkedin_link", { length: 256 }),
    sm_facebook_link: varchar("sm_facebook_link", { length: 256 }),
    sm_whatsup_link: varchar("sm_whatsup_link", { length: 256 }),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt"),
  },
);

export const states = createTable(
  "states",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }).notNull(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt"),
  },
);

export const schoolCategories = createTable(
  "school_categories",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }).notNull(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt"),
  },
);

export const locations = createTable(
  "locations",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }).notNull(),
    google_map_link: varchar("google_map_link", { length: 1024 }),
    address: varchar("address", { length: 1024 }).notNull(),
    state_id: integer("state_id").notNull(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt"),
  },
);

export const schoolsRelations = relations(schools, ({ many }) => ({
  categories: many(schoolCategories),
}));

export const schoolCategoriesRelations = relations(schoolCategories, ({ many }) => ({
  schools: many(schools),
}));

export const statesRelations = relations(states, ({ many }) => ({
  locations: many(locations),
}));

export const locationsRelations = relations(locations, ({ one }) => ({
  state: one(states, {
    fields: [locations.state_id],
    references: [states.id],
  }),
}));