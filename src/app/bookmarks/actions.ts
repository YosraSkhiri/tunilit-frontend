'use server'

import type { School } from '~/server/db'
import { getSchoolByIds } from '~/server/queries'

export async function data(list?: string[])  {  
  try {
    const listArr = list
    let schools: Array<School> = []

    if (!listArr || listArr.length < 0 || (listArr.length === 1 && !listArr[0])) {
      schools = []
    } else {
      schools = await getSchoolByIds(listArr)
    }

    return {
      bookmarkedSchools: schools,
    }
  } catch (e) {
    console.log(e)
    throw new Error('Something went wrong!')
  }
}
