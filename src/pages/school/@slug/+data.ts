export { data }
export type Data = Awaited<ReturnType<typeof data>>
import type { PageContextServer } from 'vike/types'

import {
	getAllCategories,
	getAllStates,
	getCategoriesBySchool,
  getLocationsBySchool,
	getSchoolBySlug,
} from '~/server/db'

const data = async (pageContext: PageContextServer) => {
	const slug = pageContext?.routeParams?.slug
  let categories
  let locations

	const school = await getSchoolBySlug(slug)
  if (school && school[0]) {
    categories = await getCategoriesBySchool(school[0].id)
    locations = await getLocationsBySchool(school[0].id)
  }
	
	const schoolCategories = getAllCategories
	const states = getAllStates

	return {
		schoolCategories,
		states,
		school: {
      data: school[0],
      categories,
      locations,
    },
	}
}
