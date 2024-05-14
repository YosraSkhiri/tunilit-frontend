// https://vike.dev/data
export { data }
export type Data = Awaited<ReturnType<typeof data>>
import type { PageContextServer } from 'vike/types'

import { db } from '../../server/db'

const data = async (pageContext: PageContextServer) => {
  console.log(pageContext.urlParsed.searchAll)
	const categories = await db.query.schoolCategories.findMany({})
	const states = await db.query.states.findMany({})
  
  const formattedState = states?.map(s => ({
    id: s.id,
    label: s.name,
  }))
  
  const formattedCategories = categories?.map((cat) => ({
    id: cat.id,
    label: cat.name,
    name: cat.name,
  }))

  const schools = await db.query.schools.findMany({})

	return {
    schoolCategories: formattedCategories,
    states: formattedState,
    schools: schools,
  }
}
