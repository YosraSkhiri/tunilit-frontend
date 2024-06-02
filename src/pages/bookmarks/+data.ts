export { data }
export type Data = Awaited<ReturnType<typeof data>>
import type { PageContextServer } from 'vike/types'

import type { School } from '~/server/db'
import { getAllCategories, getAllStates, getSchoolByIds } from '~/server/db'

const data = async (pageContext: PageContextServer) => {
  const queryParams = pageContext?.urlParsed.search

	const list = queryParams?.list?.split(',')
  let schools: Array<School> = []

  if (!list || list.length < 0 || (list.length === 1 && !list[0])) {
    schools = []
  } else {
    schools = await getSchoolByIds(list)
  }

	const schoolCategories = getAllCategories
	const states = getAllStates

	return {
    bookmarks: schools,
		schoolCategories,
		states,
	}
}
