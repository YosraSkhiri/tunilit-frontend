import { Meta } from '@storybook/react'
import { useState } from 'react'

import Checkbox from './Checkbox.tsx'

const meta: Meta<typeof Checkbox> = {
  component: Checkbox
}

export default meta

const Template1 = () => {
  const [checked, setChecked] = useState(true)

  return (
    <Checkbox 
      checked={checked} 
      id='checkbox-1' 
      label='label' 
      onCheckedChange={() => setChecked(s => !s)}
    />
  )
} 

export const CheckedCheckbox = Template1.bind({})

const Template2 = () => {
  const [checked, setChecked] = useState(false)

  return (
    <Checkbox 
      checked={checked} 
      id='checkbox-2' 
      label='label' 
      onCheckedChange={() => setChecked(s => !s)}
    />
  )
} 

export const DefaultCheckbox = Template2.bind({})

const Template3 = () => {
  const [checked, setChecked] = useState(false)

  return (
    <Checkbox 
      disabled 
      checked={checked} 
      id='checkbox-3' 
      label='label'
      onCheckedChange={() => setChecked(s => !s)}
    />
  )
} 

export const DisabledCheckbox = Template3.bind({})

const Template4 = () => {
  const [checked, setChecked] = useState(true)

  return (
    <Checkbox 
      disabled 
      checked={checked} 
      id='checkbox-4' 
      label='label'
      onCheckedChange={() => setChecked(s => !s)}
    />
  )
} 

export const DisabledCheckedCheckbox = Template4.bind({})

const Template5 = () => {
  const [checked, setChecked] = useState(false)

  return (
    <Checkbox 
      required 
      checked={checked} 
      id='checkbox-5' 
      label='label'
      onCheckedChange={() => setChecked(s => !s)}
    />
  )
} 

export const RequiredCheckbox = Template5.bind({})
