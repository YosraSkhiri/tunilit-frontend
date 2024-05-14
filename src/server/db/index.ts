import { sql } from '@vercel/postgres'
import { eq } from 'drizzle-orm'
import { drizzle } from 'drizzle-orm/vercel-postgres'

import * as schema from './schema'

// Use this object to send drizzle queries to your DB
export const db = drizzle(sql, { schema })

export type State = typeof schema.states.$inferSelect
export type Category = typeof schema.schoolCategories.$inferSelect

const getAllStates = await db
	.select({
		id: schema.states.id,
		name: schema.states.name,
	})
	.from(schema.states)
	.orderBy(schema.states.name)

const getAllCategories = await db
	.select({
		id: schema.schoolCategories.id,
		name: schema.schoolCategories.name,
	})
	.from(schema.schoolCategories)
	.orderBy(schema.schoolCategories.name)

const getSchoolBySlug = async (slug: string) => {
	return await db
		.select()
		.from(schema.schools)
		.where(eq(schema.schools.slug, slug))
}

const getCategoriesBySchool = async (id: string) => {
	return await db
		.select({
      category: schema.schoolCategories.name,
    })
		.from(schema.schoolsToCategories)
		.leftJoin(
			schema.schools,
			eq(schema.schoolsToCategories.schoolId, schema.schools.id)
		)
		.leftJoin(
			schema.schoolCategories,
			eq(schema.schoolsToCategories.categoryId, schema.schoolCategories.id)
		)
		.where(eq(schema.schools.id, id))
}

const getLocationsBySchool = async (id: string) => {
  return await db
    .select()
    .from(schema.locations)
    .where(eq(schema.locations.schoolId, id))
}

export {
	getAllCategories,
	getAllStates,
	getCategoriesBySchool,
  getLocationsBySchool,
	getSchoolBySlug,
}
