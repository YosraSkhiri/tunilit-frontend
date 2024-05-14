import { relations, sql } from 'drizzle-orm'
import {
	boolean,
	pgTableCreator,
	primaryKey,
	real,
	text,
	timestamp,
	uuid,
	varchar,
} from 'drizzle-orm/pg-core'

export const createTable = pgTableCreator((name) => `tl_${name}`)

export const schools = createTable('schools', {
	id: uuid('id').defaultRandom().primaryKey(),
	name: varchar('name', { length: 256 }).notNull(),
	logo_key: varchar('logo_key', { length: 1024 }).notNull(),
	code: varchar('code', { length: 256 }),
	is_verified: boolean('is_verified'),
	description: text('description'),
	website: varchar('website', { length: 256 }),
	phone: varchar('phone', { length: 256 }),
	mobile: varchar('mobile', { length: 256 }),
	mail: varchar('mail', { length: 256 }),
	slug: varchar('slug', { length: 256 }).unique(),
	sm_youtube_link: varchar('sm_youtube_link', { length: 256 }),
	sm_messenger_link: varchar('sm_messenger_link', { length: 256 }),
	sm_instagram_link: varchar('sm_instagram_link', { length: 256 }),
	sm_linkedin_link: varchar('sm_linkedin_link', { length: 256 }),
	sm_facebook_link: varchar('sm_facebook_link', { length: 256 }),
	sm_whatsup_link: varchar('sm_whatsup_link', { length: 256 }),
	createdAt: timestamp('created_at')
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),
	updatedAt: timestamp('updatedAt'),
})

export const states = createTable('states', {
	id: uuid('id').defaultRandom().primaryKey(),
	name: varchar('name', { length: 256 }).notNull(),
	createdAt: timestamp('created_at')
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),
	updatedAt: timestamp('updatedAt'),
})

export const schoolCategories = createTable('school_categories', {
	id: uuid('id').defaultRandom().primaryKey(),
	name: varchar('name', { length: 256 }).notNull(),
	createdAt: timestamp('created_at')
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),
	updatedAt: timestamp('updatedAt'),
})

export const locations = createTable('locations', {
	id: uuid('id').defaultRandom().primaryKey(),
	google_map_link: varchar('google_map_link', { length: 1024 }),
	address: varchar('address', { length: 1024 }).notNull(),
	stateId: uuid('state_id').notNull(),
	schoolId: uuid('school_id').notNull(),
	latitude: real('latitude').notNull(),
	longitude: real('longitude').notNull(),
	createdAt: timestamp('created_at')
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),
	updatedAt: timestamp('updatedAt'),
})

export const statesRelations = relations(states, ({ many }) => ({
	locations: many(locations),
}))

export const locationsRelations = relations(locations, ({ one }) => ({
	state: one(states, {
		fields: [locations.stateId],
		references: [states.id],
	}),
	school: one(schools, {
		fields: [locations.schoolId],
		references: [schools.id],
	}),
}))

export const schoolsRelations = relations(schools, ({ many }) => ({
	schoolsToCategories: many(schoolsToCategories),
	locations: many(locations),
}))

export const schoolCategoriesRelations = relations(
	schoolCategories,
	({ many }) => ({
		schoolsToCategories: many(schoolsToCategories),
	})
)

export const schoolsToCategories = createTable(
	'schools_to_categories',
	{
		schoolId: uuid('school_id')
			.notNull()
			.references(() => schools.id),
		categoryId: uuid('category_id')
			.notNull()
			.references(() => schoolCategories.id),
	},
	(t) => ({
		pk: primaryKey({ columns: [t.schoolId, t.categoryId] }),
	})
)

export const schoolsToCategoriesRelations = relations(
	schoolsToCategories,
	({ one }) => ({
		school: one(schools, {
			fields: [schoolsToCategories.schoolId],
			references: [schools.id],
		}),
		category: one(schoolCategories, {
			fields: [schoolsToCategories.categoryId],
			references: [schoolCategories.id],
		}),
	})
)
