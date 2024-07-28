/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta } from '@storybook/react'
import { useState } from 'react'

import Autocomplete from './Autocomplete.tsx'

const meta: Meta<typeof Autocomplete> = {
  component: Autocomplete
}

export default meta

const options = [
  { id: "tn-11", name: "Tunis" },
  { id: "tn-12", name: "Ariana" },
  { id: "tn-13", name: "Ben Arous" },
  { id: "tn-14", name: "Manouba" },
  { id: "tn-21", name: "Nabeul" },
  { id: "tn-22", name: "Zaghouan" },
  { id: "tn-23", name: "Bizerte" },
  { id: "tn-31", name: "Béja" },
  { id: "tn-32", name: "Jendouba" },
  { id: "tn-33", name: "Kef" },
  { id: "tn-34", name: "Siliana" },
  { id: "tn-41", name: "Sousse" },
  { id: "tn-42", name: "Monastir" },
  { id: "tn-43", name: "Mahdia" },
  { id: "tn-51", name: "Sfax" },
  { id: "tn-52", name: "Kairouan" },
  { id: "tn-53", name: "Kasserine" },
  { id: "tn-61", name: "Sidi Bouzid" },
  { id: "tn-71", name: "Gabès" },
  { id: "tn-72", name: "Médenine" },
  { id: "tn-81", name: "Tataouine" },
  { id: "tn-82", name: "Tozeur" },
  { id: "tn-83", name: "Kébili" }
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
