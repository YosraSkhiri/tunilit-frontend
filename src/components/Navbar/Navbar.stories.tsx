import { Meta,StoryObj } from '@storybook/react'

import Navbar from './Navbar.tsx'

const meta: Meta<typeof Navbar> = {
  component: Navbar
}

export default meta

type Story = StoryObj<typeof Navbar>

export const Overview: Story = {
  args: {
    schoolCategories: [
      {
        name: 'category 1',
      },
      {
        name: 'category 2',
      },
      {
        name: 'category 3',
      },
      {
        name: 'category 4',
      },
      {
        name: 'category 5',
      },
      {
        name: 'category 6',
      },
    ]
  }
}
