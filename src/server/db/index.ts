import { sql as s } from '@vercel/postgres'
import { and, countDistinct, eq, inArray, like, sql } from 'drizzle-orm'
import { drizzle } from 'drizzle-orm/vercel-postgres'

import * as schema from './schema'

// Use this object to send drizzle queries to your DB
export const db = drizzle(s, { schema })

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
			count: countDistinct(schema.locations.schoolId),
		})
		.from(schema.states)
		.innerJoin(schema.locations, eq(schema.locations.stateId, schema.states.id))
		.groupBy(schema.states.name)
}

const getByText = async (q: string) => {
	return await db
		.selectDistinctOn([schema.schools.id], {
			name: schema.schools.name,
			logoKey: schema.schools.logo_key,
			slug: schema.schools.slug,
			categories: schema.schoolCategories.name,
		})
		.from(schema.schools)
		.leftJoin(
			schema.schoolsToCategories,
			eq(schema.schoolsToCategories.schoolId, schema.schools.id)
		)
		.leftJoin(
			schema.schoolCategories,
			eq(schema.schoolCategories.id, schema.schoolsToCategories.categoryId)
		)
		.where(like(schema.schools.name, `%${q}%`))
}

const getSchoolByIds = async (ids: Array<string>) => {
	return await db
		.select()
		.from(schema.schools)
		.where(inArray(schema.schools.id, ids))
}

const getSchoolInfoBySlug = async (slug: string): Promise<SchoolProfile[]>  => {
	return await db
		.select({
			id: schema.schools.id,
			name: schema.schools.name,
			slug: schema.schools.slug,
			logoKey: sql`COALESCE(${schema.schools.logo_key}, '')`,
			description: sql`COALESCE(${schema.schools.description}, '')`,
			website: sql`COALESCE(${schema.schools.website}, '')`,
			phone: sql`COALESCE(${schema.schools.phone}, '')`,
			mobile: sql`COALESCE(${schema.schools.mobile}, '')`,
			email: sql`COALESCE(${schema.schools.mail}, '')`,
			youtube: sql`COALESCE(${schema.schools.sm_youtube_link}, '')`,
			facebook: schema.schools.sm_facebook_link,
			instagram: schema.schools.sm_instagram_link,
			messenger: schema.schools.sm_messenger_link,
			linkedin: schema.schools.sm_linkedin_link,
			whatsup: schema.schools.sm_whatsup_link,
			locations: sql`
      COALESCE(
        JSON_AGG(JSON_BUILD_OBJECT(
            'googleMapLink',
            ${schema.locations.google_map_link},
            'address',
            ${schema.locations.address},
            'latitude',
            ${schema.locations.latitude},
            'longitude',
            ${schema.locations.longitude}
          )),
        '[]'
      )
      `,
		})
		.from(schema.schools)
		.leftJoin(
			schema.locations,
			eq(schema.locations.schoolId, schema.schools.id)
		)
		.where(eq(schema.schools.slug, slug))
		.groupBy(schema.schools.id)
}


type loc = {
  address?: string,
  googleMapLink?: string,
  latitude?: string,
  longitude?: string
}

export interface SchoolProfile extends School {
  description?: string,
  email?: string,
  facebook?: string,
  id: string,
  instagram?: string,
  linkedin?: string,
  locations: Array<loc>,
  logoKey?: string,
  messenger?: string,
  mobile?: string,
  name: string,
  phone?: string,
  slug: string,
  website?: string,
  whatsup?: string,
  youtube?: string
}

export {
	getAllCategories,
	getAllStates,
	getByText,
	getCategoriesBySchool,
	getNumberOfSchoolsByState,
	getSchoolByIds,
	getSchoolInfoBySlug,
	getSchoolsByStatesAndCategories,
}
