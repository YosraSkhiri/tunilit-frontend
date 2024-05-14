import type { Meta, StoryObj } from '@storybook/react'

import Layout from '../Layout'
import Typography from '../Typography'
import * as Icons from './index'
import { SparkleIcon } from './index'

const meta: Meta<typeof SparkleIcon> = {
	component: SparkleIcon,
}

export default meta

type Story = StoryObj<typeof SparkleIcon>

export const Overview: Story = {
	render: () => (
		<Layout
			style={{
				gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
				columnGap: 40,
				rowGap: 60,
			}}
			type="grid">
			{Object.values(Icons).map((Icon, i) => (
				<Layout
					style={{
						width: 180,
						alignItems: 'center',
						gap: 20,
					}}
					direction="column"
					key={`icon-${i}`}
					type="flex">
					<Typography variant="body3">
						{Icon?.displayName?.slice(0, -4)}
					</Typography>
					<Icon size="lg" />
					<Icon size="md" />
					<Icon size="sm" />
				</Layout>
			))}
		</Layout>
	),
}

export const Playground: Story = {}
