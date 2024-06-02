export { data }
export type Data = Awaited<ReturnType<typeof data>>
import type { PageContextServer } from 'vike/types'

import {
	getAllCategories,
	getAllStates,
  getByText,
	getSchoolsByStatesAndCategories,
} from '~/server/db'

const data = async (pageContext: PageContextServer) => {
	const queryParams = pageContext?.urlParsed.search

	const searchStates = queryParams?.state?.split(',')
	const searchCategories = queryParams?.category?.split(',')
	const searchQuery = queryParams?.q

	const schoolCategories = getAllCategories
	const states = getAllStates

	if (searchQuery) {
		const result = await getByText(searchQuery)

		return {
			schoolCategories,
			states,
			result,
			selectedCategories: searchCategories,
			selectedStates: searchStates,
		}
	} else {
		if (
			(!searchStates && !searchCategories) ||
			(searchStates?.length === 0 && searchCategories?.length === 0)
		) {
			return {
				schoolCategories,
				states,
			}
		} else {
			const result = await getSchoolsByStatesAndCategories({
				states: searchStates,
				categories: searchCategories,
			})

			return {
				schoolCategories,
				states,
				result,
				selectedCategories: searchCategories,
				selectedStates: searchStates,
			}
		}
	}
}
