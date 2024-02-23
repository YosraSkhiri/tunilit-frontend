import { Meta, StoryObj } from '@storybook/react'
import Menu from './Menu'
import Button from '../Button'
import MenuItemWrapper from '../MenuItem'

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
			<MenuItemWrapper label="option1">Menu item</MenuItemWrapper>
			<MenuItemWrapper label="option2">Menu item</MenuItemWrapper>
			<MenuItemWrapper label="option3">Menu item</MenuItemWrapper>
			<MenuItemWrapper label="option4">Menu item</MenuItemWrapper>
			<MenuItemWrapper label="option5">Menu item</MenuItemWrapper>
			<MenuItemWrapper label="option6">Menu item</MenuItemWrapper>
			<MenuItemWrapper label="option7">Menu item</MenuItemWrapper>
		</Menu>
	),
}
