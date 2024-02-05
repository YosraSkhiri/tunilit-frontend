import { Meta, StoryObj } from '@storybook/react'
import Button from './Button'
import { buttonVariantType } from './Button.types'
import { PlaceholderIcon } from '../Icons'
import Layout from '../Layout'

const meta: Meta<typeof Button> = {
	component: Button,
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
		<Layout style={{ gap: 80, padding: 40 }} direction='column'>
      <Layout style={{ gap: 60 }}>
        <Layout
          direction="column"
          style={{ gap: 40 }}>
          {variants.map((variant: buttonVariantType) => (
            <Button variant={variant}>
              <PlaceholderIcon />
              Button
            </Button>
          ))}
        </Layout>
        <Layout
          direction="column"
          style={{ gap: 40 }}>
            {variants.map((variant: buttonVariantType) => (
            <Button variant={variant}>
              Button
              <PlaceholderIcon />
            </Button>
          ))}
        </Layout>
        <Layout
          direction="column"
          style={{ gap: 40 }}>
          {variants.map((variant: buttonVariantType) => (
            <Button variant={variant} shadow>
              <PlaceholderIcon />
              Button
            </Button>
          ))}
        </Layout>
        <Layout
          direction="column"
          style={{ gap: 40 }}>
            {variants.map((variant: buttonVariantType) => (
            <Button variant={variant} shadow>
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
				{variants.map((variant: buttonVariantType) => (
					<Button variant={variant} size='lg'>
						<PlaceholderIcon size='lg' />
						Button
					</Button>
				))}
			</Layout>
			<Layout
				direction="column"
				style={{ gap: 40 }}>
          {variants.map((variant: buttonVariantType) => (
					<Button variant={variant} size='lg'>
						Button
            <PlaceholderIcon size='lg' />
					</Button>
				))}
			</Layout>
      <Layout
				direction="column"
				style={{ gap: 40 }}>
				{variants.map((variant: buttonVariantType) => (
					<Button variant={variant} shadow size='lg'>
						<PlaceholderIcon size='lg' />
						Button
					</Button>
				))}
			</Layout>
			<Layout
				direction="column"
				style={{ gap: 40 }}>
          {variants.map((variant: buttonVariantType) => (
					<Button variant={variant} shadow size='lg'>
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
