import { Meta, StoryObj } from '@storybook/react'
import SchoolLogo from './SchoolLogo'
import placeholderImg from '/placeholder.png'

const meta: Meta<typeof SchoolLogo> = {
	component: SchoolLogo,
}

export default meta

type Story = StoryObj<typeof SchoolLogo>

export const XXLarge: Story = {
	render: () => (
		<SchoolLogo
			size="xxlarge"
			src={placeholderImg}
		/>
	),
}

export const XLarge: Story = {
	render: () => (
		<SchoolLogo
			size="xlarge"
			src={placeholderImg}
		/>
	),
}

export const Large: Story = {
	render: () => (
		<SchoolLogo
			size="large"
			src={placeholderImg}
		/>
	),
}

export const Medium: Story = {
	render: () => (
		<SchoolLogo
			size="medium"
			src={placeholderImg}
		/>
	),
}

export const Small: Story = {
	render: () => (
		<SchoolLogo
			size="small"
			src={placeholderImg}
		/>
	),
}

export const Playground: Story = {
	args: {
		src: placeholderImg,
	},
	render: (args) => <SchoolLogo {...args} />,
}
