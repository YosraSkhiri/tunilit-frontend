import { Meta, StoryObj } from '@storybook/react'
import IconButton from './IconButton'
import { PlaceholderIcon } from '../Icons'

const meta: Meta<typeof IconButton> = {
	component: IconButton,
}

export default meta

type Story = StoryObj<typeof IconButton>

export const Primary: Story = {
	args: {
		ariaLabel: 'Test button',
		children: <PlaceholderIcon />,
	},
}

export const Secondary: Story = {
	args: {
		ariaLabel: 'Test button',
		children: <PlaceholderIcon />,
		variant: 'secondary',
	},
}

export const Tertiary: Story = {
	args: {
		ariaLabel: 'Test button',
		children: <PlaceholderIcon />,
		variant: 'tertiary',
	},
}

export const Success: Story = {
	args: {
		ariaLabel: 'Test button',
		children: <PlaceholderIcon />,
		variant: 'success',
	},
}

export const Error: Story = {
	args: {
		ariaLabel: 'Test button',
		children: <PlaceholderIcon />,
		variant: 'error',
	},
}

export const Subtle: Story = {
	args: {
		ariaLabel: 'Test button',
		children: <PlaceholderIcon />,
		variant: 'subtle',
	},
}

export const MediumButton: Story = {
	args: {
		ariaLabel: 'Test button',
		children: <PlaceholderIcon />,
		size: 'md',
	},
}

export const LargeButton: Story = {
	args: {
		ariaLabel: 'Test button',
		children: <PlaceholderIcon size="lg" />,
		size: 'lg',
	},
}

export const DisabledOutlinedButton: Story = {
	args: {
		ariaLabel: 'Test button',
		children: <PlaceholderIcon />,
		disabled: true,
	},
}

export const DisabledSubtleButton: Story = {
	args: {
		ariaLabel: 'Test button',
		children: <PlaceholderIcon />,
		disabled: true,
		variant: 'subtle',
	},
}

export const LoadingOutlinedButton: Story = {
	args: {
		ariaLabel: 'Test button',
		children: <PlaceholderIcon />,
		loading: true,
	},
}

export const LoadingSubtleButton: Story = {
	args: {
		ariaLabel: 'Test button',
		children: <PlaceholderIcon />,
		loading: true,
		variant: 'subtle',
	},
}

export const Playground: Story = {
	args: {
		ariaLabel: 'Test button',
		children: <PlaceholderIcon />,
	},
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		component: {
			table: {
				disable: true,
			},
		},
		onBlur: {
			table: {
				disable: true,
			},
		},
		onClick: {
			table: {
				disable: true,
			},
		},
		onFocus: {
			table: {
				disable: true,
			},
		},
		className: {
			table: {
				disable: true,
			},
		},
	},
}
