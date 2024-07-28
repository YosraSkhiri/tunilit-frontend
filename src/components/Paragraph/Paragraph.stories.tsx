import { Meta,StoryObj } from '@storybook/react'

import Paragraph from './Paragraph.tsx'

const meta: Meta<typeof Paragraph> = {
  component: Paragraph
}

export default meta

type Story = StoryObj<typeof Paragraph>

export const Overview: Story = {
  args: {
    maxLines: 5,
    style: {
      maxWidth: '300px'
    },
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium magnam cupiditate commodi rem atque ipsum corrupti quos harum, nobis vel ex libero itaque, suscipit non numquam sunt temporibus repudiandae. Quia!'
  }
}
