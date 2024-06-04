import { getSchoolProfileData } from '~/server/data'

const data = async (slug: string) => {
	const school = await getSchoolProfileData(slug)
  return school
}

export default data