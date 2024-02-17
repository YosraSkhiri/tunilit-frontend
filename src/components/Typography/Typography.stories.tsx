import type { Meta, StoryObj } from '@storybook/react'
import Typography from './Typography'

const meta: Meta<typeof Typography> = {
	component: Typography,
}

export default meta

type Story = StoryObj<typeof Typography>

export const Title: Story = {
	args: {
		children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		variant: 'title',
	},
}

export const Heading1: Story = {
	args: {
		children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		variant: 'h1',
	},
}

export const Heading2: Story = {
	args: {
		children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		variant: 'h2',
	},
}

export const Heading3: Story = {
	args: {
		children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		variant: 'h3',
	},
}

export const Heading4: Story = {
	args: {
		children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		variant: 'h4',
	},
}

export const Heading5: Story = {
	args: {
		children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		variant: 'h5',
	},
}

export const Heading6: Story = {
	args: {
		children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		variant: 'h6',
	},
}

export const Subtitle1: Story = {
	args: {
		children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		variant: 'subtitle1',
	},
}

export const Subtitle2: Story = {
	args: {
		children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		variant: 'subtitle2',
	},
}

export const Body1: Story = {
	args: {
		children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		variant: 'body1',
	},
}

export const Body2: Story = {
	args: {
		children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		variant: 'body2',
	},
}

export const Body3: Story = {
	args: {
		children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		variant: 'body3',
	},
}

export const Playground: Story = {
	args: {
		children: 'Typography',
	},
}
