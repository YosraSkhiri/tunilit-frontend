import { Meta,StoryObj } from '@storybook/react'

import TextField from './TextField'

const meta: Meta<typeof TextField> = {
	component: TextField,
}

export default meta

type Story = StoryObj<typeof TextField>

export const DefaultTextField: Story = {
	args: {
		label: 'Label',
		placeholder: 'Placeholder',
		helperText: 'This is a default helper text',
		id: 'textField-1',
	},
}

export const InfoTextField: Story = {
	args: {
		label: 'Label',
		placeholder: 'Placeholder',
		helperText: 'This is an info helper text',
		id: 'textField-2',
		variant: 'info',
	},
}

export const SuccessTextField: Story = {
	args: {
		label: 'Label',
		placeholder: 'Placeholder',
		helperText: 'This is a success helper text',
		id: 'textField-3',
		variant: 'success',
	},
}

export const ErrorTextField: Story = {
	args: {
		label: 'Label',
		placeholder: 'Placeholder',
		helperText: 'This is an error helper text',
		id: 'textField-4',
		variant: 'error',
	},
}

export const DisabledTextField: Story = {
	args: {
		label: 'Label',
		placeholder: 'Placeholder',
		helperText: 'This is a disabled helper text',
		id: 'textField-5',
		variant: 'error',
		disabled: true,
	},
}

export const FullWidthTextField: Story = {
	args: {
		label: 'Label',
		placeholder: 'Placeholder',
		helperText: 'This is a default helper text',
		id: 'textField-6',
		fullWidth: true,
	},
}
