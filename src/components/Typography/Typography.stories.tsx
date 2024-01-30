import type { Meta, StoryObj } from '@storybook/react'
import Typography from './Typography'
import Layout from '../Layout'

const meta: Meta<typeof Typography> = {
  component: Typography,
}

export default meta

type Story = StoryObj<typeof Typography>

export const Overview: Story = {
  render: () => <Layout direction='column' style={{ gap: 40, padding: 40 }}>
    <Typography variant='title'>Title</Typography>
    <Typography variant='h1'>Heading 1</Typography>
    <Typography variant='h2'>Heading 2</Typography>
    <Typography variant='h3'>Heading 3</Typography>
    <Typography variant='h4'>Heading 4</Typography>
    <Typography variant='h5'>Heading 5</Typography>
    <Typography variant='h6'>Heading 6</Typography>
    <Typography variant='subtitle1'>Subtitle 1</Typography>
    <Typography variant='subtitle2'>Subtitle 2</Typography>
    <Typography variant='body1'>Body 1</Typography>
    <Typography variant='body2'>Body 2</Typography>
    <Typography variant='body3'>Body 3</Typography>
  </Layout>
}

export const Example: Story = {
  args: {
    children: 'Typography',
  },
  render: (args) => <Typography {...args} />
}
