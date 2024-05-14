// https://vike.dev/data
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

	const school = await getSchoolBySlug(slug)
	const categories = await getCategoriesBySchool(school[0].id)
  const locations = await getLocationsBySchool(school[0].id)

	const schoolCategories = getAllCategories
	const states = getAllStates

  console.log({
    school: {
      data: school[0],
      categories,
      locations,
    },
  })
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
