import { Meta, StoryObj } from '@storybook/react'

import { PlaceholderIcon } from '../Icons'
import ListItem from './ListItem'

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
