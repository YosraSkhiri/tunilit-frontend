import { Meta, StoryObj } from '@storybook/react'

import Label from './Label'

const meta: Meta<typeof Label> = {
	component: Label,
}

export default meta

type Story = StoryObj<typeof Label>

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

export const RequiredLabel: Story = {
	args: {
		children: 'Label',
		required: true,
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
