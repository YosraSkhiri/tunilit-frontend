import { Meta, StoryObj } from '@storybook/react'
import IconButton from './IconButton'
import { PlaceholderIcon } from '../Icons'

const meta: Meta<typeof IconButton> = {
	component: IconButton,
}

export default meta

type Story = StoryObj<typeof IconButton>

export const Primary: Story = {
	render: () => (
		<IconButton>
			<PlaceholderIcon />
		</IconButton>
	),
}

export const Secondary: Story = {
	render: () => (
		<IconButton variant="secondary">
			<PlaceholderIcon />
		</IconButton>
	),
}

export const Tertiary: Story = {
	render: () => (
		<IconButton variant="tertiary">
			<PlaceholderIcon />
		</IconButton>
	),
}

export const Success: Story = {
	render: () => (
		<IconButton variant="success">
			<PlaceholderIcon />
		</IconButton>
	),
}

export const Error: Story = {
	render: () => (
		<IconButton variant="error">
			<PlaceholderIcon />
		</IconButton>
	),
}

export const Subtle: Story = {
	render: () => (
		<IconButton variant="subtle">
			<PlaceholderIcon />
		</IconButton>
	),
}

export const MediumButton: Story = {
	render: () => (
		<IconButton>
			<PlaceholderIcon />
		</IconButton>
	),
}

export const LargeButton: Story = {
	render: () => (
		<IconButton size="lg">
			<PlaceholderIcon size="lg" />
		</IconButton>
	),
}

export const DisabledOutlinedButton: Story = {
	render: () => (
		<IconButton disabled>
			<PlaceholderIcon />
		</IconButton>
	),
}

export const DisabledSubtleButton: Story = {
	render: () => (
		<IconButton
			variant="subtle"
			disabled>
			<PlaceholderIcon />
		</IconButton>
	),
}

export const LoadingOutlinedButton: Story = {
	render: () => (
		<IconButton loading>
			<PlaceholderIcon />
		</IconButton>
	),
}

export const LoadingSubtleButton: Story = {
	render: () => (
		<IconButton
			variant="subtle"
			loading>
			<PlaceholderIcon />
		</IconButton>
	),
}

export const Playground: Story = {
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
	render: (args) => (
		<IconButton {...args}>
			<PlaceholderIcon />
		</IconButton>
	),
}
