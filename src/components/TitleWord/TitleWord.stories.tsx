import { Meta,StoryObj } from '@storybook/react'

import TitleWord from './TitleWord.tsx'

const meta: Meta<typeof TitleWord> = {
  component: TitleWord
}

export default meta

type Story = StoryObj<typeof TitleWord>

export const Overview: Story = {
  args: {
    children: 'Word',
    adorn: true,
    //dir: 'rtl'
  }
}
