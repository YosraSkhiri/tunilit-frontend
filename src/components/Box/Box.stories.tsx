import { Meta,StoryObj } from '@storybook/react'

import Box from './Box.tsx'

const meta: Meta<typeof Box> = {
  component: Box
}

export default meta

type Story = StoryObj<typeof Box>

export const Overview: Story = {}
