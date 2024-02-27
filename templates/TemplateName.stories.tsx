import { StoryObj, Meta } from '@storybook/react'
import TemplateName from './TemplateName.tsx'

const meta: Meta<typeof TemplateName> = {
  component: TemplateName
}

export default meta

type Story = StoryObj<typeof TemplateName>

export const Overview: Story = {}
