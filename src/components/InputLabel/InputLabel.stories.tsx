import { Meta, StoryObj } from '@storybook/react'

import InputLabel from './InputLabel'

const meta: Meta<typeof InputLabel> = {
	component: InputLabel,
}

export default meta

type Story = StoryObj<typeof InputLabel>

export const DefaultLabel: Story = {
	args: {
		children: 'Label',
	},
}

export const InfoLabel: Story = {
	args: {
		children: 'Label',
		variant: 'info',
	},
}

export const SuccessLabel: Story = {
	args: {
		children: 'Label',
		variant: 'success',
	},
}

export const ErrorLabel: Story = {
	args: {
		children: 'Label',
		variant: 'error',
	},
}

export const DisabledLabel: Story = {
	args: {
		children: 'Label',
		disabled: true,
	},
}

export const Playground: Story = {
	args: {
		children: 'Label',
	},
}
