import type { Meta, StoryObj } from '@storybook/react'
import * as Icons from './index'
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
    <Layout type='grid'>
      {
        Object.values(Icons).map((Icon, i) => (
          <Layout key={`icon-${i}`} type='flex' dir='column'>
            <div>{Icon.name.slice(0, -4)}</div>
            <Icon size='lg' />
            <Icon size='md' />
            <Icon size='sm' />
          </Layout>
        ))
      }
    </Layout>
}
