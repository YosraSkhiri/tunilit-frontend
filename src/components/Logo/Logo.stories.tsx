import { Meta, StoryObj } from '@storybook/react'
import Logo from './Logo'

const meta: Meta<typeof Logo> = {
	component: Logo,
}

export default meta

type Story = StoryObj<typeof Logo>

export const FullLogo: Story = {
	args: {
		animate: true,
		iconWidth: 316.96,
		iconHeight: 275.01,
		textWidth: 544.03,
	},
}

export const FullLogoOnDarkBackground: Story = {
	args: {
		lightText: true,
		iconWidth: 316.96,
		iconHeight: 275.01,
		textWidth: 544.03,
	},
}

export const OpenEyesIcon: Story = {
	args: {
		onlyIcon: true,
		iconWidth: 260,
		iconHeight: 260,
		eyes: 'open',
	},
}

export const ClosedEyesIcon: Story = {
	args: {
		onlyIcon: true,
		iconWidth: 260,
		iconHeight: 260,
		eyes: 'closed',
	},
}

export const WinkIcon: Story = {
	args: {
		onlyIcon: true,
		iconWidth: 260,
		iconHeight: 260,
		eyes: 'wink',
	},
}

export const Playground: Story = {
	render: (args) => <Logo {...args} />,
}
