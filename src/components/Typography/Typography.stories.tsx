import type { Meta, StoryObj } from '@storybook/react'
import Typography from './Typography'

const meta: Meta<typeof Typography> = {
	component: Typography,
}

export default meta

type Story = StoryObj<typeof Typography>

export const Title: Story = {
	render: () => (
		<Typography variant="title">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit
		</Typography>
	),
}

export const Heading1: Story = {
	render: () => (
		<Typography variant="h1">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit
		</Typography>
	),
}

export const Heading2: Story = {
	render: () => (
		<Typography variant="h2">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit
		</Typography>
	),
}

export const Heading3: Story = {
	render: () => (
		<Typography variant="h3">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit
		</Typography>
	),
}

export const Heading4: Story = {
	render: () => (
		<Typography variant="h4">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit
		</Typography>
	),
}

export const Heading5: Story = {
	render: () => (
		<Typography variant="h5">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit
		</Typography>
	),
}

export const Heading6: Story = {
	render: () => (
		<Typography variant="h6">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit
		</Typography>
	),
}

export const Subtitle1: Story = {
	render: () => (
		<Typography variant="subtitle1">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit
		</Typography>
	),
}

export const Subtitle2: Story = {
	render: () => (
		<Typography variant="subtitle2">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit
		</Typography>
	),
}

export const Body1: Story = {
	render: () => (
		<Typography variant="body1">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit
		</Typography>
	),
}

export const Body2: Story = {
	render: () => (
		<Typography variant="body2">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit
		</Typography>
	),
}

export const Body3: Story = {
	render: () => (
		<Typography variant="body3">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit
		</Typography>
	),
}

export const Playground: Story = {
	args: {
		children: 'Typography',
	},
	render: (args) => <Typography {...args} />,
}
