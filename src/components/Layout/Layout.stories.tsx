import type { Meta, StoryObj } from '@storybook/react'

import Layout from './Layout'

const meta: Meta<typeof Layout> = {
  component: Layout,
}

export default meta

type Story = StoryObj<typeof Layout>

export const Overview: Story = {
  render: (args) => <Layout style={{
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: 40,
  }} type='grid' {...args}>
    {Array.from({length: 6}).map((_, i) => (
      <div key={i} style={{width: 200, height: 200, backgroundColor: 'pink'}}></div>
    ))}
  </Layout>
}
