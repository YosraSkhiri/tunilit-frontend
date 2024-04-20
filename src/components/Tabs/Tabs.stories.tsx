import { Meta,StoryObj } from '@storybook/react'

import Tabs from './Tabs.tsx'

const meta: Meta<typeof Tabs> = {
  component: Tabs
}

export default meta

type Story = StoryObj<typeof Tabs>

export const Overview: Story = {
  args: {
    tabs: [
      'Tab 1',
      'Tab 2',
      'Tab 3',
      'Tab 4',
      'Tab 5',
      'Tab 6',
      'Tab 7',
      'Tab 8',
      'Tab 9',
      'Tab 10',
      'Tab 11',
      'Tab 12',
      'Tab 13',
      'Tab 14',
      'Tab 15',
      'Tab 16',
      'Tab 17',
      'Tab 18',
      'Tab 19',
      'Tab 20',
      'Tab 21',
    ],
    showScrollButtons: true
  }
}
