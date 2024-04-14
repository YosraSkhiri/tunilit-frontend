import { Meta, StoryObj } from '@storybook/react'

import placeholderImg from '/placeholder.png'

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
		src: placeholderImg,
	},
}

export const XLarge: Story = {
	args: {
		alt: 'Placeholder',
		size: 'xlarge',
		src: placeholderImg,
	},
}

export const Large: Story = {
	args: {
		alt: 'Placeholder',
		size: 'large',
		src: placeholderImg,
	},
}

export const Medium: Story = {
	args: {
		alt: 'Placeholder',
		size: 'medium',
		src: placeholderImg,
	},
}

export const Small: Story = {
	args: {
		alt: 'Placeholder',
		size: 'small',
		src: placeholderImg,
	},
}

export const Active: Story = {
	args: {
		alt: 'Placeholder',
		size: 'xlarge',
		src: placeholderImg,
    active: true,
	},
}

export const Playground: Story = {
	args: {
		alt: 'Placeholder',
		src: placeholderImg,
	},
}
