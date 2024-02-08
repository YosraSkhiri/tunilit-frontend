import { Meta, StoryObj } from '@storybook/react'
import InputLabel from './InputLabel'
import Layout from '../Layout'

const meta: Meta<typeof InputLabel> = {
	component: InputLabel,
}

export default meta

type Story = StoryObj<typeof InputLabel>

export const Overview: Story = {
	render: () => (
		<Layout direction='column' style={{ gap: 40 }}>
			<InputLabel>label</InputLabel>
			<InputLabel variant="info">label</InputLabel>
			<InputLabel variant='success'>label</InputLabel>
			<InputLabel variant='error'>label</InputLabel>
			<InputLabel disabled>label</InputLabel>
		</Layout>
	),
}

export const Example: Story = {
  args: {
    children: 'Label',
  },
  render: (args) => (
    <InputLabel {...args} />
  )
}
