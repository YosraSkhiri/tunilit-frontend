import { 
  getAllCategories, 
  getAllStates, 
  getNumberOfSchoolsByState,
  getSchoolsByStatesAndCategories 
} from '~/server/db'


const data = async () => {
	const schoolCategories = getAllCategories
	const states: Array<{
    count?: string | number,
    id: string,
    name: string
  }> = getAllStates

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
      ['Web development']: webDevSchools,
      ['Design']: designSchools,
      ['Languages']: languagesSchools
    }
	}
}

export default data
