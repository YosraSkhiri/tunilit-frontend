import { SchoolCard } from '../../components'
import { useData } from '../../renderer/useData'
import { Data } from './+data'
const Page = () => {
  const {schools} = useData<Data>()

  return (
    <div>
      {
        schools.map(s => <SchoolCard 
          isVerified
          category="lkqfn"
          link={`/school/${s.id}`}
          logo={s.logo_link}
          name={s.name}
        />)
      }
    </div>
  )
}

export default Page
