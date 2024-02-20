import { Meta, StoryObj } from '@storybook/react'
import Link from './Link'
import { PlaceholderIcon } from '../Icons'

const meta: Meta<typeof Link> = {
	component: Link,
}

export default meta

type Story = StoryObj<typeof Link>

export const DefaultLink: Story = {
	args: {
		children: 'Link',
		href: '/',
	},
}

export const DefaultUnderlineLink: Story = {
	args: {
		children: 'Link',
		underline: true,
		href: '/',
	},
}

export const DefaultLinkWithLeftIcon: Story = {
	args: {
		children: 'Link',
		leftAdorn: <PlaceholderIcon />,
		href: '/',
	},
}

export const DefaultLinkWithRightIcon: Story = {
	args: {
		children: 'Link',
		rightAdorn: <PlaceholderIcon />,
		variant: 'subtle',
		href: '/',
	},
}

export const SubtleLink: Story = {
	args: {
		children: 'Link',
		variant: 'subtle',
		href: '/',
	},
}

export const SubtleUnderlineLink: Story = {
	args: {
		children: 'Link',
		underline: true,
		variant: 'subtle',
		href: '/',
	},
}

export const SubtleLinkWithLeftIcon: Story = {
	args: {
		children: 'Link',
		leftAdorn: <PlaceholderIcon />,
		variant: 'subtle',
		href: '/',
	},
}

export const SubtleLinkWithRightIcon: Story = {
	args: {
		children: 'Link',
		rightAdorn: <PlaceholderIcon />,
		variant: 'subtle',
		href: '/',
	},
}

const lightLinkContainerStyle = {
  background: '#062D2B',
  height: '100%',
  width: '100%',
  padding: 40,
}

export const LightLink: Story = {
	args: {
		children: 'Link',
		variant: 'light',
		href: '/',
	},
	render: (args) => (
		<div
			style={lightLinkContainerStyle}>
			<Link {...args}></Link>
		</div>
	),
}

export const LightUnderlineLink: Story = {
	args: {
		children: 'Link',
		underline: true,
		variant: 'light',
		href: '/',
	},
  render: (args) => (
		<div
			style={lightLinkContainerStyle}>
			<Link {...args}></Link>
		</div>
	),
}

export const LightLinkWithLeftIcon: Story = {
	args: {
		children: 'Link',
		leftAdorn: <PlaceholderIcon />,
		variant: 'light',
		href: '/',
	},
  render: (args) => (
		<div
			style={lightLinkContainerStyle}>
			<Link {...args}></Link>
		</div>
	),
}

export const LightLinkWithRightIcon: Story = {
	args: {
		children: 'Link',
		rightAdorn: <PlaceholderIcon />,
		variant: 'light',
		href: '/',
	},
  render: (args) => (
		<div
			style={lightLinkContainerStyle}>
			<Link {...args}></Link>
		</div>
	),
}

export const Playground: Story = {
	args: {
		children: 'Link',
		leftAdorn: <PlaceholderIcon />,
		rightAdorn: <PlaceholderIcon />,
		underline: true,
		href: '/',
	},
}
