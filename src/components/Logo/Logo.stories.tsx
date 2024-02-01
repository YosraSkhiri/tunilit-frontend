import { Meta, StoryObj } from '@storybook/react'
import Logo from './Logo'
import Layout from '../Layout'

const meta: Meta<typeof Logo> = {
  component: Logo,
}

export default meta

type Story = StoryObj<typeof Logo>

export const Overview: Story = {
  render: () => (
    <Layout direction='column' style={{ gap: 100 }}>
      <Layout direction='column' style={{ gap: 60 }}>
        <Logo animate iconWidth={316.96} iconHeight={275.01} textWidth={544.03} />
        <div style={{ backgroundColor: '#046862'}}>
          <Logo lightText iconWidth={316.96} iconHeight={275.01} textWidth={544.03} />
        </div>
      </Layout>
      <Layout flexWrap='wrap' style={{ gap: 60 }}>
        <Logo onlyIcon eyes='open' iconWidth={260} iconHeight={260} />
        <Logo onlyIcon eyes='closed' iconWidth={260} iconHeight={260} />
        <Logo onlyIcon eyes='wink' iconWidth={260} iconHeight={260} />
      </Layout>
    </Layout>
  )
}

export const Example: Story = {
  render: (args) => (
    <Logo {...args} />
  )
}
