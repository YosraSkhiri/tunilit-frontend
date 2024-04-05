import { Meta,StoryObj } from '@storybook/react'

import LanguageMenu from './LanguageMenu.tsx'

const meta: Meta<typeof LanguageMenu> = {
  component: LanguageMenu
}

export default meta

type Story = StoryObj<typeof LanguageMenu>

export const Overview: Story = {}
