import { sql } from '@vercel/postgres'
import { and, count, eq, inArray, like } from 'drizzle-orm'
import { drizzle } from 'drizzle-orm/vercel-postgres'

import * as schema from './schema'

// Use this object to send drizzle queries to your DB
export const db = drizzle(sql, { schema })

export type State = typeof schema.states.$inferSelect
export type Category = typeof schema.schoolCategories.$inferSelect
export type School = typeof schema.schools.$inferInsert

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
			backgroundColor: schema.categoryButtonColors.backgroundColor,
			textBorderColor: schema.categoryButtonColors.textBorderColor,
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
		.leftJoin(
			schema.categoryButtonColors,
			eq(
				schema.categoryButtonColors.id,
				schema.schoolCategories.categoryButtonColorsId
			)
		)
		.where(eq(schema.schools.id, id))
}

const getLocationsBySchool = async (id: string) => {
	return await db
		.select()
		.from(schema.locations)
		.where(eq(schema.locations.schoolId, id))
}

const getSchoolsByStatesAndCategories = async ({
	categories,
	limit,
	states,
}: {
	categories?: Array<string>
	limit?: number
	states?: Array<string>
}) => {
	const query = db
		.selectDistinctOn([schema.schools.id], {
			name: schema.schools.name,
			logoKey: schema.schools.logo_key,
			slug: schema.schools.slug,
			categories: schema.schoolCategories.name,
		})
		.from(schema.schools)
		.leftJoin(
			schema.locations,
			eq(schema.locations.schoolId, schema.schools.id)
		)
		.leftJoin(schema.states, eq(schema.locations.stateId, schema.states.id))
		.leftJoin(
			schema.schoolsToCategories,
			eq(schema.schoolsToCategories.schoolId, schema.schools.id)
		)
		.leftJoin(
			schema.schoolCategories,
			eq(schema.schoolCategories.id, schema.schoolsToCategories.categoryId)
		)
		.where(
			and(
				states && states?.length > 0
					? inArray(schema.states.name, states)
					: undefined,
				categories && categories?.length > 0
					? inArray(schema.schoolCategories.name, categories)
					: undefined
			)
		)

	if (limit) query.limit(limit)

	return await query
}

const getNumberOfSchoolsByState = async () => {
	return await db
		.select({
      name: schema.states.name,
      count: count(schema.schools.id),
    })
		.from(schema.schools)
		.leftJoin(
			schema.locations,
			eq(schema.locations.schoolId, schema.schools.id)
		)
		.leftJoin(schema.states, eq(schema.locations.stateId, schema.states.id))
    .groupBy(schema.states.name)
}

const getByText = async (q: string) => {
  return await db
    .selectDistinctOn([schema.schools.id],{
      name: schema.schools.name,
			logoKey: schema.schools.logo_key,
			slug: schema.schools.slug,
			categories: schema.schoolCategories.name,
    }).from(schema.schools).leftJoin(
			schema.schoolsToCategories,
			eq(schema.schoolsToCategories.schoolId, schema.schools.id)
		)
		.leftJoin(
			schema.schoolCategories,
			eq(schema.schoolCategories.id, schema.schoolsToCategories.categoryId)
		).where(like(schema.schools.name, `%${q}%`))
}

const getSchoolByIds = async (ids: Array<string>) => {
  return await db
    .select()
    .from(schema.schools)
    .where(inArray(schema.schools.id, ids))
} 

export {
	getAllCategories,
	getAllStates,
  getByText,
	getCategoriesBySchool,
	getLocationsBySchool,
	getNumberOfSchoolsByState,
  getSchoolByIds,
	getSchoolBySlug,
	getSchoolsByStatesAndCategories
}
