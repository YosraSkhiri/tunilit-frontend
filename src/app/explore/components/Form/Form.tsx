"use client"
import { useRouter } from 'next/navigation'
import queryString from 'query-string'
import { SubmitHandler, useForm } from "react-hook-form"

import { Button } from '~/components'
import { SearchIcon } from '~/components/Icons'
import Input from '~/components/Input'

import styles from './Form.module.scss'

type Inputs = {
  query: string
}

const Form = () => {
  const router = useRouter()

  const {
    handleSubmit,
    register,
  } = useForm<Inputs>()


  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const searchQueryString = queryString.stringify({ q: data.query }, {arrayFormat: 'comma'})
    console.log('explore')
    //window.location.href = `/search?${searchQueryString}`
    //window.history.pushState(null, '', `/search?${searchQueryString}`)
    router.push(`/search?${searchQueryString}`)

  }
  return (
    <form className={styles['search__form-1']} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input
          placeholder='Expolre Schools...'
          size='lg'
          {...register("query")}
        />
      </div>
      <div>
        <Button size='lg' type='submit'>
          Search
          <SearchIcon />
        </Button>
      </div>
    </form>
  )
}

export default Form
