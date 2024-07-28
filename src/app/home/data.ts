import { 
  getAllCategories, 
  getAllStates, 
  getNumberOfSchoolsByState,
  getSchoolsByStatesAndCategories 
} from '~/server/queries'

const data = async () => {
	const schoolCategories = await getAllCategories()
	const states: Array<{
    count?: string | number,
    id: string,
    name: string
  }> = await getAllStates()

  const webDevSchools = await getSchoolsByStatesAndCategories({
    categories: ['Web development'],
    limit: 6,
  })

  const designSchools = await getSchoolsByStatesAndCategories({
    categories: ['UI Design', 'UX Design'],
    limit: 6,
  })

  const languagesSchools = await getSchoolsByStatesAndCategories({
    categories: ['Languages'],
    limit: 6,
  })

  const numberOfSchoolsByState = await getNumberOfSchoolsByState()
  
  states.map((state) => {
    state['count'] = numberOfSchoolsByState.filter(v => v.name === state.name)?.[0]?.count
  })

	return {
		schoolCategories,
		states,
    schoolsTabs: {
      ['Web development']: webDevSchools[0],
      ['Design']: designSchools[0],
      ['Languages']: languagesSchools[0]
    }
	}
}

export default data
