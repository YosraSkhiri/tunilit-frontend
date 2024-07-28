import { Meta, StoryObj } from '@storybook/react'

import HelperText from './HelperText'

const meta: Meta<typeof HelperText> = {
	component: HelperText,
}

export default meta

type Story = StoryObj<typeof HelperText>

export const DefaultHelperText: Story = {
	args: {
		children: 'This is a helper message',
	},
}

export const InfoHelperText: Story = {
	args: {
		children: 'This is a helper message',
		variant: 'info',
	},
}

export const SuccessHelperText: Story = {
	args: {
		children: 'This is a helper message',
		variant: 'success',
	},
}

export const ErrorHelperText: Story = {
	args: {
		children: 'This is a helper message',
		variant: 'error',
	},
}

export const DisabledHelperText: Story = {
	args: {
		children: 'This is a helper message',
		disabled: true,
	},
}

export const Playground: Story = {
	args: {
		children: 'This is a helper message',
	},
}
