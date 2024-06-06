import type { School } from '~/server/db'
import { getAllCategories, getAllStates, getSchoolByIds } from '~/server/queries'

const data = async (list?: string) => {
	const listArr = list?.split(',')
  let schools: Array<School> = []

  if (!listArr || listArr.length < 0 || (listArr.length === 1 && !listArr[0])) {
    schools = []
  } else {
    schools = await getSchoolByIds(listArr)
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
