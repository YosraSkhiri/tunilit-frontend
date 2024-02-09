import { Meta, StoryObj } from '@storybook/react'
import Button from './Button'
import { PlaceholderIcon } from '../Icons'

const meta: Meta<typeof Button> = {
	component: Button,
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
	render: () => <Button>Button</Button>,
}

export const Secondary: Story = {
	render: () => <Button variant="secondary">Button</Button>,
}

export const Tertiary: Story = {
	render: () => <Button variant="tertiary">Button</Button>,
}

export const Success: Story = {
	render: () => <Button variant="success">Button</Button>,
}

export const Error: Story = {
	render: () => <Button variant="error">Button</Button>,
}

export const Subtle: Story = {
	render: () => <Button variant="subtle">Button</Button>,
}

export const IconLeftButton: Story = {
	render: () => (
		<Button>
			<PlaceholderIcon />
			Button
		</Button>
	),
}

export const IconRightButton: Story = {
	render: () => (
		<Button>
			Button
			<PlaceholderIcon />
		</Button>
	),
}

export const ShadowButton: Story = {
	render: () => <Button shadow>Button</Button>,
}

export const PrimaryArrowButton: Story = {
	render: () => <Button arrow>Button</Button>,
}

export const MediumButton: Story = {
	render: () => <Button>Button</Button>,
}

export const LargeButton: Story = {
	render: () => <Button size="lg">Button</Button>,
}

export const DisabledOutlinedButton: Story = {
	render: () => <Button disabled>Button</Button>,
}

export const DisabledSubtleButton: Story = {
	render: () => (
		<Button
			variant="subtle"
			disabled>
			Button
		</Button>
	),
}

export const LoadingOutlinedButton: Story = {
	render: () => <Button loading>Button</Button>,
}

export const LoadingSubtleButton: Story = {
	render: () => (
		<Button
			variant="subtle"
			loading>
			Button
		</Button>
	),
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
	render: (args) => <Button {...args} />,
}
