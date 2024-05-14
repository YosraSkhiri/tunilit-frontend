import { Meta,StoryObj } from '@storybook/react'

import SchoolsTabs from './SchoolsTabs.tsx'

const meta: Meta<typeof SchoolsTabs> = {
  component: SchoolsTabs
}

export default meta

type Story = StoryObj<typeof SchoolsTabs>

export const Overview: Story = {}
