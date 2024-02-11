import { Meta, StoryObj } from '@storybook/react'
import Logo from './Logo'

const meta: Meta<typeof Logo> = {
	component: Logo,
}

export default meta

type Story = StoryObj<typeof Logo>

export const FullLogo: Story = {
	render: () => (
		<Logo
			animate
			iconWidth={316.96}
			iconHeight={275.01}
			textWidth={544.03}
		/>
	),
}

export const FullLogoOnDarkBackground: Story = {
	render: () => (
		<div style={{ backgroundColor: '#046862' }}>
			<Logo
				lightText
				iconWidth={316.96}
				iconHeight={275.01}
				textWidth={544.03}
			/>
		</div>
	),
}

export const OpenEyesIcon: Story = {
	render: () => (
		<Logo
			onlyIcon
			eyes="open"
			iconWidth={260}
			iconHeight={260}
		/>
	),
}

export const ClosedEyesIcon: Story = {
	render: () => (
		<Logo
			onlyIcon
			eyes="closed"
			iconWidth={260}
			iconHeight={260}
		/>
	),
}

export const WinkIcon: Story = {
	render: () => (
		<Logo
			onlyIcon
			eyes="wink"
			iconWidth={260}
			iconHeight={260}
		/>
	),
}

export const Playground: Story = {
	render: (args) => <Logo {...args} />,
}
