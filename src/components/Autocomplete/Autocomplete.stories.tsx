/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta } from '@storybook/react'
import { useState } from 'react'

import Autocomplete from './Autocomplete.tsx'

const meta: Meta<typeof Autocomplete> = {
  component: Autocomplete
}

export default meta

const options = [
  { id: "tn-11", label: "Tunis" },
  { id: "tn-12", label: "Ariana" },
  { id: "tn-13", label: "Ben Arous" },
  { id: "tn-14", label: "Manouba" },
  { id: "tn-21", label: "Nabeul" },
  { id: "tn-22", label: "Zaghouan" },
  { id: "tn-23", label: "Bizerte" },
  { id: "tn-31", label: "Béja" },
  { id: "tn-32", label: "Jendouba" },
  { id: "tn-33", label: "Kef" },
  { id: "tn-34", label: "Siliana" },
  { id: "tn-41", label: "Sousse" },
  { id: "tn-42", label: "Monastir" },
  { id: "tn-43", label: "Mahdia" },
  { id: "tn-51", label: "Sfax" },
  { id: "tn-52", label: "Kairouan" },
  { id: "tn-53", label: "Kasserine" },
  { id: "tn-61", label: "Sidi Bouzid" },
  { id: "tn-71", label: "Gabès" },
  { id: "tn-72", label: "Médenine" },
  { id: "tn-81", label: "Tataouine" },
  { id: "tn-82", label: "Tozeur" },
  { id: "tn-83", label: "Kébili" }
]

const Template1 = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [value, setValue] = useState<Array<string> | string>('')

  return (
		<Autocomplete
      clearable
      id='ac-1'
      inputValue={inputValue}
      label='Location'
      options={options}
      placeholder='placeholder'
      selectedValue={value}
      setInputValue={setInputValue}
      setSelectedValue={setValue}
    />
  )
}

export const OneValueAutocomplete = Template1.bind({})

const Template2 = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [value, setValue] = useState<Array<string> | string>([])

  return (
		<Autocomplete
      clearable
      multiple
      id='ac-2'
      inputValue={inputValue}
      label='Location'
      options={options}
      placeholder='placeholder'
      selectedValue={value}
      setInputValue={setInputValue}
      setSelectedValue={setValue}
    />
  )
}

export const MultipleValuesAutocomplete = Template2.bind({})
