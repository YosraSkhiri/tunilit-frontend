import { Meta, StoryObj } from '@storybook/react'
import InputLabel from './InputLabel'

const meta: Meta<typeof InputLabel> = {
	component: InputLabel,
}

export default meta

type Story = StoryObj<typeof InputLabel>

export const DefaultLabel: Story = {
	render: () => <InputLabel>label</InputLabel>,
}

export const InfoLabel: Story = {
	render: () => <InputLabel variant="info">label</InputLabel>,
}

export const SuccessLabel: Story = {
	render: () => <InputLabel variant="success">label</InputLabel>,
}

export const ErrorLabel: Story = {
	render: () => <InputLabel variant="error">label</InputLabel>,
}

export const DisabledLabel: Story = {
	render: () => <InputLabel disabled>label</InputLabel>,
}

export const Playground: Story = {
	args: {
		children: 'Label',
	},
	render: (args) => <InputLabel {...args} />,
}
