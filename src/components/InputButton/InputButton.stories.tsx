import { Meta, StoryObj } from '@storybook/react'
import InputButton from './InputButton'
import { CrossSmallIcon } from '../Icons'

const meta: Meta<typeof InputButton> = {
	component: InputButton,
}

export default meta

type Story = StoryObj<typeof InputButton>

export const DefaultInputButton: Story = {
	args: {
		ariaLabel: 'close',
		children: <CrossSmallIcon />,
	},
}

export const InfoInputButton: Story = {
	args: {
		ariaLabel: 'close',
		children: <CrossSmallIcon />,
		variant: 'info',
	},
}

export const SuccessInputButton: Story = {
	args: {
		ariaLabel: 'close',
		children: <CrossSmallIcon />,
		variant: 'success',
	},
}

export const ErrorInputButton: Story = {
	args: {
		ariaLabel: 'close',
		children: <CrossSmallIcon />,
		variant: 'error',
	},
}

export const DisabledInputButton: Story = {
	args: {
		ariaLabel: 'close',
		children: <CrossSmallIcon />,
		disabled: true,
	},
}

export const MediumInputButton: Story = {
	args: {
		ariaLabel: 'close',
		children: <CrossSmallIcon />,
		size: 'md',
	},
}

export const LargeInputButton: Story = {
	args: {
		ariaLabel: 'close',
		children: <CrossSmallIcon size="lg" />,
		size: 'lg',
	},
}

export const Playground: Story = {
	args: {
		ariaLabel: 'close',
		children: <CrossSmallIcon />,
		size: 'md',
	},
}
