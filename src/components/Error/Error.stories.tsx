import { Meta,StoryObj } from '@storybook/react'

import Error from './Error.tsx'

const meta: Meta<typeof Error> = {
  component: Error
}

export default meta

type Story = StoryObj<typeof Error>

export const Overview: Story = {
  args: {
    message: 'No!'
  }
}
