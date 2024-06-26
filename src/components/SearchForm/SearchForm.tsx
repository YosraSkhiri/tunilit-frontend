"use client"
import { useRouter } from 'next/navigation'
import queryString from 'query-string'
import { useState } from 'react'
import { Controller, SubmitHandler,useForm } from "react-hook-form"

import Autocomplete from '../Autocomplete'
import Button from '../Button'
import SearchFormProps from './SearchForm.types.ts'

interface IFormInput {
  category: Array<string>,
  state: Array<string>
}

const SearchForm = ({
  buttonProps, 
  categoryOptions, 
  className,
  selectedCategories=[],
  selectedStates=[], 
  stateOptions,
}: SearchFormProps) => {
  const router = useRouter()

  const handleSearch = async ({ categories, states}: {categories: Array<string>, states: Array<string>}) => {
    const statesString = queryString.stringify({ state: states }, {arrayFormat: 'comma'})
    const categoriesString = queryString.stringify({ category: categories }, {arrayFormat: 'comma'})
    router.push(`/search?${statesString}&${categoriesString}`, { scroll: true })
  }

  const { control, handleSubmit } = useForm({
    defaultValues: {
      state: [...selectedStates],
      category: [...selectedCategories],
    },
  })
  
  const [stateInputValue, setStateInputValue] = useState<string>('')
  const [categoryInputValue, setCategoryInputValue] = useState<string>('')

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    if(data.category.length > 0 || data.state.length > 0) {
      handleSearch({categories: data.category, states: data.state})
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={className}>
        <Controller
          render={({ field }) => {
            const { onChange, value } = field;
            return (
              <Autocomplete
                clearable
                fullWidth
                multiple
                setSelectedValue={(selectedOption) => {
                  onChange(selectedOption);
                  }}
                  id="categoories-tn"
                  inputValue={categoryInputValue}
                  label='Select School Category'
                  options={categoryOptions}
                  placeholder='UI/ UX design'
                  selectedValue={value}
                  setInputValue={setCategoryInputValue}
                />
              )
            }}
            control={control}
            name="category"
        />
        <Controller
          render={({ field }) => {
            const { onChange, value } = field;
            return (
              <Autocomplete
                clearable
                fullWidth
                multiple
                setSelectedValue={(selectedOption) => {
                  onChange(selectedOption);
                }}
                id="states-tn"
                inputValue={stateInputValue}
                label='Select State'
                options={stateOptions}
                placeholder='Tunis, Ariana...'
                selectedValue={value}
                setInputValue={setStateInputValue}
              />
            )
          }}
          control={control}
          name="state"
        />
        <Button type='submit' {...buttonProps} />
      </div>
    </form>
  )
}

export default SearchForm
