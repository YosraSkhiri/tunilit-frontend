import type { School } from '~/server/db'
import { getAllCategories, getAllStates, getSchoolByIds } from '~/server/db'

const data = async (searchParams) => {

	const list = searchParams?.list?.split(',')
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

export default data
