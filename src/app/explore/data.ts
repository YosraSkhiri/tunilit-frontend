import {
	getAllCategories,
	getAllStates,
} from '~/server/queries'

const data = async () => {
	const schoolCategories = await getAllCategories()
	const states = await getAllStates()

  return {
    schoolCategories,
    states,
  }
}

export default data
