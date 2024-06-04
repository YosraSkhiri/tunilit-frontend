import 'server-only'

import { cache } from 'react'

import { getAllCategories, getAllStates, getByText, getCategoriesBySchool, getSchoolInfoBySlug, getSchoolsByStatesAndCategories,School } from './db'

export const getSchoolCategories = cache(async () => getAllCategories)

export const getStates = cache(async () => getAllStates)

export const search = async ({ categories, query, states }: {
  categories?: Array<string>, 
  query?: string, 
  states?: Array<string>
}) => {
	if (query) {
		const result = await getByText(query)
		return result
	}

	const result = await getSchoolsByStatesAndCategories({
    states: states,
    categories: categories,
  })

  return result
}

export const getSchoolProfileData = async (slug: string) => {
  const school = await getSchoolInfoBySlug(slug)
  let categories;

  if (school && school[0]) {
    categories = await getCategoriesBySchool(school[0].id)
    return {
      school: school[0],
      categories,
    }
  }
}
