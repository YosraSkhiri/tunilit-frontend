import { Meta,StoryObj } from '@storybook/react'

import Pagination from './Pagination.tsx'

const meta: Meta<typeof Pagination> = {
  component: Pagination
}

export default meta

type Story = StoryObj<typeof Pagination>

export const Overview: Story = {
  args: {
    count: 10,
    page: 1
  }
}
