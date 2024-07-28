import { Meta,StoryObj } from '@storybook/react'

import Breadcrumbs from './Breadcrumbs.tsx'

const meta: Meta<typeof Breadcrumbs> = {
  component: Breadcrumbs
}

export default meta

type Story = StoryObj<typeof Breadcrumbs>

export const Overview: Story = {
  args: {
    links: [
      {
        children: 'link 1',
      },
      {
        children: 'link 2',
      },
      {
        children: 'link 3',
      },
      {
        children: 'link 4',
      },
      {
        children: 'link 5',
      },
      {
        children: 'link 6',
      },
    ]
  }
}
