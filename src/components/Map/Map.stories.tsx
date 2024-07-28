import { Meta,StoryObj } from '@storybook/react'

import Map from './Map.tsx'

const meta: Meta<typeof Map> = {
  component: Map
}

export default meta

type Story = StoryObj<typeof Map>

export const Overview: Story = {
  args: {
    locations: [
      {
        latitude: 33.8869,
        longitude: 9.5375,
        address: 'Tunisia'
      }
    ]
  }
}
