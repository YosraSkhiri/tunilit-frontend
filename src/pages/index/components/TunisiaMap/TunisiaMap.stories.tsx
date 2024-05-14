import { Meta,StoryObj } from '@storybook/react'

import TunisiaMap from './TunisiaMap.tsx'

const meta: Meta<typeof TunisiaMap> = {
  component: TunisiaMap
}

export default meta

type Story = StoryObj<typeof TunisiaMap>

export const Overview: Story = {}
