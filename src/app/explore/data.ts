import {
	getAllCategories,
	getAllStates,
} from '~/server/queries'

const data = async () => {
	const schoolCategories = getAllCategories
	const states = getAllStates

  return {
    schoolCategories,
    states,
  }
}

export default data
