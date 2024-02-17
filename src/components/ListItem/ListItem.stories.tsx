import { Meta, StoryObj } from '@storybook/react'
import ListItem from './ListItem'
import { PlaceholderIcon } from '../Icons'

const meta: Meta<typeof ListItem> = {
	component: ListItem,
}

export default meta

type Story = StoryObj<typeof ListItem>

export const Playground: Story = {
	render: (args) => (
		<ul>
			<ListItem
				adorn={<PlaceholderIcon size="sm" />}
				{...args}>
				List item
			</ListItem>
		</ul>
	),
}
