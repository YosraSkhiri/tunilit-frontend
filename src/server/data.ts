import 'server-only'

import { cache } from 'react'

import { category,SchoolProfile, searchResult } from '~/types'

import { 
  getAllCategories, 
  getAllStates, 
  getByText, 
  getCategoriesBySchool, 
  getSchoolInfoBySlug, 
  getSchoolsByStatesAndCategories 
} from './queries'

export const getSchoolCategories = cache(async () => getAllCategories)

export const getStates = cache(async () => getAllStates)

export const search = async ({ categories, page, query, states }: {
  categories?: Array<string>, 
  page: string, 
  query?: string,
  states?: Array<string>
}) => {
  let data;

	if (query) {
		data = await getByText(query)
	} else {
    data = await getSchoolsByStatesAndCategories({
      states: states,
      categories: categories,
      offset: page === '1' ? 0 : (+page - 1) * 9 ,
      limit: 9,
    })
  }

  const result: searchResult = {
    schools: data[0],
    count: data[1][0].count,
  }

  return result
}

export const getSchoolProfileData = async (slug: string) => {
  const schoolData = await getSchoolInfoBySlug(slug) as SchoolProfile[] | undefined

  if (schoolData && schoolData[0]) {
    const school: SchoolProfile = {
      description: schoolData[0].description,
      email: schoolData[0].email,
      facebook: schoolData[0].facebook,
      id: schoolData[0].id,
      instagram: schoolData[0].instagram,
      linkedin: schoolData[0].linkedin,
      locations: schoolData[0]?.locations,
      logoKey: schoolData[0].logoKey,
      messenger: schoolData[0].messenger,
      mobile: schoolData[0].mobile,
      name: schoolData[0].name,
      phone: schoolData[0].phone,
      slug: schoolData[0].slug,
      website: schoolData[0].website,
      whatsup: schoolData[0].whatsup,
      youtube: schoolData[0].youtube,
    }

    const schoolCategories = await getCategoriesBySchool(school.id) as category[]
    
    return {
      school,
      categories: schoolCategories,
    }
  }
}
