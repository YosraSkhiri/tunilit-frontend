import { Meta,StoryObj } from '@storybook/react'

import SchoolCard from './SchoolCard.tsx'

const meta: Meta<typeof SchoolCard> = {
  component: SchoolCard
}

export default meta

type Story = StoryObj<typeof SchoolCard>

export const Overview: Story = {
  args: {
    category: 'Display school category here',
    isVerified: true,
    link: '/',
    logo: '',
    name: 'School Name'
  }
}
