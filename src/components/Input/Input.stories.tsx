import { Meta, StoryObj } from '@storybook/react'

import Input from './Input'

const meta: Meta<typeof Input> = {
  component: Input,
}

export default meta

type Story = StoryObj<typeof Input>

export const DefaultInput: Story = {
  args: {
    placeholder: 'Placeholder',
  }
}

export const InfoInput: Story = {
  args: {
    placeholder: 'Placeholder',
    variant: 'info'
  }
}

export const SuccessInput: Story = {
  args: {
    placeholder: 'Placeholder',
    variant: 'success'
  }
}

export const ErrorInput: Story = {
  args: {
    placeholder: 'Placeholder',
    variant: 'error'
  }
}

export const DisabledInput: Story = {
  args: {
    placeholder: 'Placeholder',
    disabled: true,
  }
}