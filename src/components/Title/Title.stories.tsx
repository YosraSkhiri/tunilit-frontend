import { Meta,StoryObj } from '@storybook/react'

import Title from './Title.tsx'

const meta: Meta<typeof Title> = {
  component: Title
}

export default meta

type Story = StoryObj<typeof Title>

export const Overview: Story = {}
