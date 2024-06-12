import 'server-only'

import { and, asc, countDistinct, eq, inArray, like, sql } from 'drizzle-orm'

import { db, tables } from './db'

const getAllStates = await db
	.select({
		id: tables.states.id,
		name: tables.states.name,
	})
	.from(tables.states)
	.orderBy(tables.states.name)

const getAllCategories = await db
	.select({
		id: tables.schoolCategories.id,
		name: tables.schoolCategories.name,
	})
	.from(tables.schoolCategories)
	.orderBy(tables.schoolCategories.name)

const getCategoriesBySchool = async (id: string) => {
	return await db
		.select({
			category: sql`COALESCE(${tables.schoolCategories.name}, '')`,
			backgroundColor: sql`COALESCE(${tables.categoryButtonColors.backgroundColor}, '')`,
			textBorderColor: sql`COALESCE(${tables.categoryButtonColors.textBorderColor}, '')`,
		})
		.from(tables.schoolsToCategories)
		.leftJoin(
			tables.schools,
			eq(tables.schoolsToCategories.schoolId, tables.schools.id)
		)
		.leftJoin(
			tables.schoolCategories,
			eq(tables.schoolsToCategories.categoryId, tables.schoolCategories.id)
		)
		.leftJoin(
			tables.categoryButtonColors,
			eq(
				tables.categoryButtonColors.id,
				tables.schoolCategories.categoryButtonColorsId
			)
		)
		.where(eq(tables.schools.id, id))
}

const getSchoolsByStatesAndCategories = async ({
	categories,
	limit,
	offset,
  states,
}: {
	categories?: Array<string>
	limit?: number
	offset?: number,
  states?: Array<string>
}) => {
	const query = db
		.selectDistinctOn([tables.schools.id], {
			name: tables.schools.name,
			logoKey: tables.schools.logo_key,
			slug: tables.schools.slug,
			categories: tables.schoolCategories.name,
		})
		.from(tables.schools)
		.leftJoin(
			tables.locations,
			eq(tables.locations.schoolId, tables.schools.id)
		)
		.leftJoin(tables.states, eq(tables.locations.stateId, tables.states.id))
		.leftJoin(
			tables.schoolsToCategories,
			eq(tables.schoolsToCategories.schoolId, tables.schools.id)
		)
		.leftJoin(
			tables.schoolCategories,
			eq(tables.schoolCategories.id, tables.schoolsToCategories.categoryId)
		)
		.where(
			and(
				states && states?.length > 0
					? inArray(tables.states.name, states)
					: undefined,
				categories && categories?.length > 0
					? inArray(tables.schoolCategories.name, categories)
					: undefined
			)
		)

	if (limit) query.limit(limit)
  if (offset) query.offset(offset).orderBy(asc(tables.schools.id))

	return await query
}

const getNumberOfSchoolsByState = async () => {
	return await db
		.select({
			name: tables.states.name,
			count: countDistinct(tables.locations.schoolId),
		})
		.from(tables.states)
		.innerJoin(tables.locations, eq(tables.locations.stateId, tables.states.id))
		.groupBy(tables.states.name)
}

const getByText = async (q: string) => {
	return await db
		.selectDistinctOn([tables.schools.id], {
			name: tables.schools.name,
			logoKey: tables.schools.logo_key,
			slug: tables.schools.slug,
			categories: tables.schoolCategories.name,
		})
		.from(tables.schools)
		.leftJoin(
			tables.schoolsToCategories,
			eq(tables.schoolsToCategories.schoolId, tables.schools.id)
		)
		.leftJoin(
			tables.schoolCategories,
			eq(tables.schoolCategories.id, tables.schoolsToCategories.categoryId)
		)
		.where(like(tables.schools.name, `%${q}%`))
}

const getSchoolByIds = async (ids: Array<string>) => {
	return await db
		.select()
		.from(tables.schools)
		.where(inArray(tables.schools.id, ids))
}

const getSchoolInfoBySlug = async (slug: string)  => {
	return await db
		.select({
			id: tables.schools.id,
			name: tables.schools.name,
			slug: tables.schools.slug,
			logoKey: sql`COALESCE(${tables.schools.logo_key}, '')`,
			description: sql`COALESCE(${tables.schools.description}::text, '')`,
			website: sql`COALESCE(${tables.schools.website}, '')`,
			phone: sql`COALESCE(${tables.schools.phone}, '')`,
			mobile: sql`COALESCE(${tables.schools.mobile}, '')`,
			email: sql`COALESCE(${tables.schools.mail}, '')`,
			youtube: sql`COALESCE(${tables.schools.sm_youtube_link}, '')`,
			facebook: sql`COALESCE(${tables.schools.sm_facebook_link}, '')`,
			instagram: sql`COALESCE(${tables.schools.sm_instagram_link}, '')`,
			messenger: sql`COALESCE(${tables.schools.sm_messenger_link}, '')`,
			linkedin: sql`COALESCE(${tables.schools.sm_linkedin_link}, '')`,
			whatsup: sql`COALESCE(${tables.schools.sm_whatsup_link}, '')`,
			locations: sql`
      COALESCE(
        JSON_AGG(JSON_BUILD_OBJECT(
            'googleMapLink',
            ${tables.locations.google_map_link},
            'address',
            ${tables.locations.address},
            'latitude',
            ${tables.locations.latitude},
            'longitude',
            ${tables.locations.longitude}
          )),
        '[]'
      )
      `,
		})
		.from(tables.schools)
		.leftJoin(
			tables.locations,
			eq(tables.locations.schoolId, tables.schools.id)
		)
		.where(eq(tables.schools.slug, slug))
		.groupBy(tables.schools.id)
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
