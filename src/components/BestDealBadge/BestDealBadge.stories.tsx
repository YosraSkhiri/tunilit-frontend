import { Meta,StoryObj } from '@storybook/react'

import BestDealBadge from './BestDealBadge.tsx'

const meta: Meta<typeof BestDealBadge> = {
  component: BestDealBadge
}

export default meta

type Story = StoryObj<typeof BestDealBadge>

export const DefaultBestDealBadge: Story = {
  args: {
    label: 'Best Deal',
  }
}

export const AnimatedBestDealBadge: Story = {
  args: {
    label: 'Best Deal',
    animate: true
  }
}
