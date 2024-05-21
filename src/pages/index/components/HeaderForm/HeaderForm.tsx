import { useState } from 'react'
import { Controller, SubmitHandler,useForm } from "react-hook-form"

import {
  Autocomplete,
  Button,
} from '~/components'

import styles from './HeaderForm.module.scss'
import HeaderFormProps from './HeaderForm.types.ts'

interface IFormInput {
  category: Array<string>,
  state: Array<string>
}

const HeaderForm = ({categoryOptions, handleSearch, stateOptions}: HeaderFormProps) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      state: [],
      category: [],
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
      <div className={styles['form-fields']}>
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
      </div>
      <Button arrow shadow type='submit'>Explore</Button>
    </form>
  )
}

export default HeaderForm
