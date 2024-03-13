import * as RadioGroupRadix from '@radix-ui/react-radio-group';
import { Meta,StoryObj } from '@storybook/react'

import Radio from './Radio.tsx'

const meta: Meta<typeof Radio> = {
  component: Radio
}

export default meta

type Story = StoryObj<typeof Radio>

export const UncheckedRadioButton: Story = {
  render: () => (
    <RadioGroupRadix.Root>
      <Radio id='id1' label='Unchecked option 1' value='value1' />
    </RadioGroupRadix.Root>
  )
}

export const CheckedRadioButton: Story = {
  render: () => (
    <RadioGroupRadix.Root value='value2'>
      <Radio id='id2' label='Checked option 2' value='value2' />
    </RadioGroupRadix.Root>
  )
}

export const UncheckedDisabledRadioButton: Story = {
  render: () => (
    <RadioGroupRadix.Root>
      <Radio disabled id='id3' label='Checked option 3' value='value3' />
    </RadioGroupRadix.Root>
  )
}

export const CheckedDisabledRadioButton: Story = {
  render: () => (
    <RadioGroupRadix.Root value='value4'>
      <Radio disabled id='id4' label='Checked option 4' value='value4' />
    </RadioGroupRadix.Root>
  )
}

const options = [
  {
    value: 'option1',
    id: 'id1',
    label: 'Selected option 1',
  },
  {
    value: 'option2',
    id: 'id2',
    label: 'Option 2',
  },
  {
    value: 'option3',
    id: 'id3',
    label: 'Disabled option 3',
    disabled: true,
  },
  {
    value: 'option4',
    id: 'id4',
    label: 'Option 4',
  },
  {
    value: 'option5',
    id: 'id5',
    label: 'Option 5',
  },
]

export const RadioGroup = {
  render: () => (
    <RadioGroupRadix.Root defaultValue='option1'>
      {
        options.map((op, i) => (
          <Radio key={`story-op-${i}`} {...op} />
        ))
      }  
    </RadioGroupRadix.Root>
  )
}
