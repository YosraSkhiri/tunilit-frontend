import { Meta,StoryObj } from '@storybook/react'

import VerificationBadge from './VerificationBadge.tsx'

const meta: Meta<typeof VerificationBadge> = {
  component: VerificationBadge
}

export default meta

type Story = StoryObj<typeof VerificationBadge>

export const SmallVerificationBadge: Story = {
  args: {
    size: 'sm',
  }
}

export const MediumVerificationBadge: Story = {
  args: {
    size: 'md',
  }
}

export const LargeVerificationBadge: Story = {
  args: {
    size: 'lg',
  }
}
