import { Meta, StoryObj } from '@storybook/react'
import Button from './Button'
import { PlaceholderIcon } from '../Icons'

const meta: Meta<typeof Button> = {
	component: Button,
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
	args: {
		children: 'Button',
	},
}

export const Secondary: Story = {
	args: {
		children: 'Button',
		variant: 'secondary',
	},
}

export const Tertiary: Story = {
	args: {
		children: 'Button',
		variant: 'tertiary',
	},
}

export const Success: Story = {
	args: {
		children: 'Button',
		variant: 'success',
	},
}

export const Error: Story = {
	args: {
		children: 'Button',
		variant: 'error',
	},
}

export const Subtle: Story = {
	args: {
		children: 'Button',
		variant: 'subtle',
	},
}

export const IconLeftButton: Story = {
	args: {
		children: (
			<>
				<PlaceholderIcon />
				Button
			</>
		),
	},
}

export const IconRightButton: Story = {
	args: {
		children: (
			<>
				Button
				<PlaceholderIcon />
			</>
		),
	},
}

export const ShadowButton: Story = {
	args: {
		children: 'Button',
		shadow: true,
	},
}

export const PrimaryArrowButton: Story = {
	args: {
		children: 'Button',
		arrow: true,
	},
}

export const MediumButton: Story = {
	args: {
		children: 'Button',
		size: 'md',
	},
}

export const LargeButton: Story = {
	args: {
		children: 'Button',
		size: 'lg',
	},
}

export const DisabledOutlinedButton: Story = {
	args: {
		children: 'Button',
		disabled: true,
	},
}

export const DisabledSubtleButton: Story = {
	args: {
		children: 'Button',
		disabled: true,
		variant: 'subtle',
	},
}

export const LoadingOutlinedButton: Story = {
	args: {
		children: 'Button',
		loading: true,
	},
}

export const LoadingSubtleButton: Story = {
	args: {
		children: 'Button',
		loading: true,
		variant: 'subtle',
	},
}

export const Playground: Story = {
	parameters: {
		layout: 'centered',
	},
	args: {
		children: 'Button',
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
