import { Meta, StoryObj } from '@storybook/react'
import IconButton from './IconButton'
import { PlaceholderIcon } from '../Icons'
import Layout from '../Layout'
import { buttonVariantType } from './IconButton.type'

const meta: Meta<typeof IconButton> = {
  component: IconButton,
}

export default meta

type Story = StoryObj<typeof IconButton>

const variants: buttonVariantType[] = [
	'primary',
	'secondary',
	'tertiary',
	'success',
	'error',
  'subtle',
]

export const Overview: Story = {
  render: () => (
    <Layout direction='column' style={{gap: 60}}>
      <Layout style={{gap: 40}}>
        {
          variants.map((variant : buttonVariantType) => (
            <IconButton variant={variant}>
              <PlaceholderIcon />
            </IconButton>
          ))
        }
        <IconButton disabled>
          <PlaceholderIcon />
        </IconButton>
        <IconButton variant='subtle' disabled>
          <PlaceholderIcon />
        </IconButton>
        <IconButton loading>
          <PlaceholderIcon />
        </IconButton>
        <IconButton variant='subtle' loading>
          <PlaceholderIcon />
        </IconButton>
      </Layout>
      <Layout style={{gap: 40}}>
        {
          variants.map((variant : buttonVariantType) => (
            <IconButton size='lg' variant={variant}>
              <PlaceholderIcon size='lg' />
            </IconButton>
          ))
        }
        <IconButton disabled size='lg'>
          <PlaceholderIcon size='lg' />
        </IconButton>
        <IconButton variant='subtle' disabled size='lg'>
          <PlaceholderIcon size='lg' />
        </IconButton>
        <IconButton loading size='lg'>
          <PlaceholderIcon size='lg' />
        </IconButton>
        <IconButton variant='subtle' loading size='lg'>
          <PlaceholderIcon size='lg' />
        </IconButton>
      </Layout>
    </Layout>
  )
}

export const Example: Story = {
  render: (args) => (
    <IconButton {...args}>
      <PlaceholderIcon />
    </IconButton>
  )
}
