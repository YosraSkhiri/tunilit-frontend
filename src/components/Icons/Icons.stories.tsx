import type { Meta, StoryObj } from '@storybook/react'
import * as Icons from './index'
import Typography from '../Typography'
import {
  SparkleIcon
} from './index'
import Layout from '../Layout'

const meta: Meta<typeof SparkleIcon> = {
  component: SparkleIcon,
}

export default meta

type Story = StoryObj<typeof SparkleIcon>

export const Overview: Story =  { 
  render: () => 
    <Layout type='grid' style={{
      gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
      gap: 40,
    }}>
      {
        Object.values(Icons).map((Icon, i) => (
          <Layout 
          key={`icon-${i}`} 
          type='flex' 
          direction='column' 
          style={{ 
            width: 180,
            alignItems: 'center',
            gap: 20,
          }}>
            <Typography variant='subtitle2'>{Icon.name.slice(0, -4)}</Typography>
            <Icon size='lg' />
            <Icon size='md' />
            <Icon size='sm' />
          </Layout>
        ))
      }
    </Layout>
}

export const Example: Story = {
  render: (args) => <SparkleIcon {...args} />
}
