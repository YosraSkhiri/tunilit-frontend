import { Meta, StoryObj } from '@storybook/react'

import SchoolLogo from './SchoolLogo'

const meta: Meta<typeof SchoolLogo> = {
	component: SchoolLogo,
}

export default meta

type Story = StoryObj<typeof SchoolLogo>

export const XXLarge: Story = {
	args: {
		alt: 'Placeholder',
		size: 'xxlarge',
	},
}

export const XLarge: Story = {
	args: {
		alt: 'Placeholder',
		size: 'xlarge',
	},
}

export const Large: Story = {
	args: {
		alt: 'Placeholder',
		size: 'large',
	},
}

export const Medium: Story = {
	args: {
		alt: 'Placeholder',
		size: 'medium',
	},
}

export const Small: Story = {
	args: {
		alt: 'Placeholder',
		size: 'small',
	},
}

export const Active: Story = {
	args: {
		alt: 'Placeholder',
		size: 'xlarge',
    active: true,
	},
}

export const Playground: Story = {
	args: {
		alt: 'Placeholder',
	},
}
