import { Meta,StoryObj } from '@storybook/react'

import ShareDialog from './ShareDialog.tsx'

const meta: Meta<typeof ShareDialog> = {
  component: ShareDialog
}

export default meta

type Story = StoryObj<typeof ShareDialog>

export const Overview: Story = {}
