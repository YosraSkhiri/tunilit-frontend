import { Meta, StoryObj } from '@storybook/react'
import HelperText from './HelperText'

const meta: Meta<typeof HelperText> = {
	component: HelperText,
}

export default meta

type Story = StoryObj<typeof HelperText>

export const DefaultHelperText: Story = {
	render: () => (
		<HelperText>This is a helper message</HelperText>
	),
}

export const InfoHelperText: Story = {
	render: () => (
		<HelperText variant="info">This is a helper message</HelperText>
	),
}

export const SuccessHelperText: Story = {
	render: () => (
		<HelperText variant="success">This is a helper message</HelperText>
	),
}

export const ErrorHelperText: Story = {
	render: () => (
		<HelperText variant="error">This is a helper message</HelperText>
	),
}

export const DisabledHelperText: Story = {
	render: () => (
		<HelperText variant="disabled">This is a helper message</HelperText>
	),
}

export const Playground: Story = {
	args: {
		children: 'This is a helper message',
	},
	render: (args) => <HelperText {...args} />,
}
