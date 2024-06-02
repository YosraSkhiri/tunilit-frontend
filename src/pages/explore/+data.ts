export { data }
export type Data = Awaited<ReturnType<typeof data>>

import {
	getAllCategories,
	getAllStates,
} from '~/server/db'

const data = async () => {
	const schoolCategories = getAllCategories
	const states = getAllStates

  return {
    schoolCategories,
    states,
  }
}
