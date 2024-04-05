import { Meta,StoryObj } from '@storybook/react'

import CategoriesDropdown from './CategoriesDropdown.tsx'

const meta: Meta<typeof CategoriesDropdown> = {
  component: CategoriesDropdown
}

export default meta

type Story = StoryObj<typeof CategoriesDropdown>

export const Overview: Story = {}
