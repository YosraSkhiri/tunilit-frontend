import { Meta, StoryObj } from '@storybook/react'
import Badge from './Badge'
import IconButton from '../IconButton'
import { MenuHamburgerIcon, LanguagesIcon } from '../Icons'

const meta: Meta<typeof Badge> = {
	component: Badge,
}

export default meta

type Story = StoryObj<typeof Badge>

export const BadgeDot: Story = {
	render: () => (
		<Badge
			type="primary"
			variant="dot">
			<IconButton
				ariaLabel="Menu"
				variant="tertiary">
				<MenuHamburgerIcon />
			</IconButton>
		</Badge>
	),
}

export const BadgeDotSecondary: Story = {
	render: () => (
		<Badge
			type="secondary"
			variant="dot">
			<IconButton
				ariaLabel="Menu"
				variant="tertiary">
				<MenuHamburgerIcon />
			</IconButton>
		</Badge>
	),
}

export const BadgeStandardPrimary: Story = {
	render: () => (
		<Badge
			type="primary"
			variant="standard"
			content="en">
			<IconButton
				ariaLabel="Translate"
				variant="tertiary">
				<LanguagesIcon />
			</IconButton>
		</Badge>
	),
}

export const BadgeStandardSecondary: Story = {
	render: () => (
		<Badge
			type="secondary"
			variant="standard"
			content="en">
			<IconButton
				ariaLabel="Translate"
				variant="tertiary">
				<LanguagesIcon />
			</IconButton>
		</Badge>
	),
}

export const Playground: Story = {
	args: {
		content: '10+',
		variant: 'dot',
		type: 'primary',
		invisible: false,
	},
	render: (args) => (
		<Badge {...args}>
			<IconButton
				ariaLabel="Menu"
				variant="tertiary">
				<MenuHamburgerIcon />
			</IconButton>
		</Badge>
	),
}
