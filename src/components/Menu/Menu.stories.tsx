import { Meta, StoryObj } from '@storybook/react'

import Button from '../Button'
import { ChevronSmallRightIcon } from '../Icons'
import MenuItem from '../MenuItem'
import Menu from './Menu'

const meta: Meta<typeof Menu> = {
	component: Menu,
}

export default meta

type Story = StoryObj<typeof Menu>

export const Overview: Story = {
	args: {},
	render: () => (
		<Menu
			renderMenuTrigger={(props: object) => (
				<Button {...props}>Show menu</Button>
			)}>
			<MenuItem label="option1" rightAdorn={ChevronSmallRightIcon}>Menu item</MenuItem>
			<MenuItem label="option2" rightAdorn={ChevronSmallRightIcon}>Menu item</MenuItem>
			<MenuItem label="option3" rightAdorn={ChevronSmallRightIcon}>Menu item</MenuItem>
			<MenuItem label="option4" rightAdorn={ChevronSmallRightIcon}>Menu item</MenuItem>
			<MenuItem label="option5" rightAdorn={ChevronSmallRightIcon}>Menu item</MenuItem>
			<MenuItem label="option6" rightAdorn={ChevronSmallRightIcon}>Menu item</MenuItem>
			<MenuItem label="option7" rightAdorn={ChevronSmallRightIcon}>Menu item</MenuItem>
		</Menu>
	),
}
