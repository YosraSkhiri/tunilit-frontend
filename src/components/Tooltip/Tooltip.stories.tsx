import { Meta, StoryObj } from '@storybook/react'
import Tooltip from './Tooltip'
import { TooltipContent } from './TooltipContent'
import { TooltipTrigger } from './TooltipTrigger'
import Layout from '../Layout'

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
}

export default meta

type Story = StoryObj<typeof Tooltip>

export const Overview: Story = {
  render: () => (
    <Layout style={{ width: '100vw', height: '100vh' }}>
      <div style={{margin: 'auto'}}>
        <Tooltip open={true}>
          <TooltipTrigger>
            Tooltip Trigger
          </TooltipTrigger>
          <TooltipContent>
            Tooltip Content
          </TooltipContent>
        </Tooltip>
      </div>
    </Layout>
  )
}
