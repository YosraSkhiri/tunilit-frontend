import { Meta, StoryObj } from '@storybook/react'
import Button from './Button'
import { buttonVariantType } from './Button.types'
import { PlaceholderIcon } from '../Icons'
import Layout from '../Layout'

const meta: Meta<typeof Button> = {
	component: Button,
  argTypes: {
    component: {
      table: {
        disable: true,
      },
    },
    onBlur: {
      table: {
        disable: true,
      },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
    onFocus: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      }
    }
  }
}

export default meta

type Story = StoryObj<typeof Button>

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
		<Layout style={{ gap: 80, padding: 40, minWidth: 1300 }} direction='column'>
      <Layout style={{ gap: 60 }}>
        <Layout
          direction="column"
          style={{ gap: 40 }}>
          {variants.map((variant: buttonVariantType, i: number) => (
            <Button variant={variant} key={`a-${i}`}>
              <PlaceholderIcon />
              Button
            </Button>
          ))}
        </Layout>
        <Layout
          direction="column"
          style={{ gap: 40 }}>
            {variants.map((variant: buttonVariantType, i: number) => (
            <Button variant={variant} key={`b-${i}`}>
              Button
              <PlaceholderIcon />
            </Button>
          ))}
        </Layout>
        <Layout
          direction="column"
          style={{ gap: 40 }}>
          {variants.map((variant: buttonVariantType, i: number) => (
            <Button variant={variant} shadow key={`c-${i}`}>
              <PlaceholderIcon />
              Button
            </Button>
          ))}
        </Layout>
        <Layout
          direction="column"
          style={{ gap: 40 }}>
            {variants.map((variant: buttonVariantType, i: number) => (
            <Button variant={variant} shadow key={`d-${i}`}>
              Button
              <PlaceholderIcon />
            </Button>
          ))}
        </Layout>
		</Layout>
    <Layout style={{ gap: 60 }}>
			<Layout
				direction="column"
				style={{ gap: 40 }}>
				{variants.map((variant: buttonVariantType, i: number) => (
					<Button variant={variant} size='lg' key={`e-${i}`}>
						<PlaceholderIcon size='lg' />
						Button
					</Button>
				))}
			</Layout>
			<Layout
				direction="column"
				style={{ gap: 40 }}>
          {variants.map((variant: buttonVariantType, i: number) => (
					<Button variant={variant} size='lg' key={`f-${i}`}>
						Button
            <PlaceholderIcon size='lg' />
					</Button>
				))}
			</Layout>
      <Layout
				direction="column"
				style={{ gap: 40 }}>
				{variants.map((variant: buttonVariantType, i: number) => (
					<Button variant={variant} shadow size='lg' key={`g-${i}`}>
						<PlaceholderIcon size='lg' />
						Button
					</Button>
				))}
			</Layout>
			<Layout
				direction="column"
				style={{ gap: 40 }}>
          {variants.map((variant: buttonVariantType, i: number) => (
					<Button variant={variant} shadow size='lg' key={`h-${i}`}>
						Button
            <PlaceholderIcon size='lg' />
					</Button>
				))}
			</Layout>
		</Layout>
    <Button fullWidth>Full width button</Button>
    <Layout style={{ gap: 80 }}>
      <Button arrow>Button</Button>
      <Button disabled variant='primary'>Button</Button>
      <Button loading variant='primary'>Button</Button>
      <Button disabled variant='subtle'>Button</Button>
      <Button loading variant='subtle'>Button</Button>
    </Layout>
    <Layout style={{ gap: 80 }}>
      <Button arrow shadow>Button</Button>
      <Button disabled variant='primary' shadow>Button</Button>
      <Button loading variant='primary' shadow>Button</Button>
      <Button disabled variant='subtle' shadow>Button</Button>
      <Button loading variant='subtle' shadow>Button</Button>
    </Layout>
    </Layout>
	),
}

export const Example: Story = {
  args: {
    children: 'Button',
  },
  render: (args) => (
    <Button {...args} />
  )
}
