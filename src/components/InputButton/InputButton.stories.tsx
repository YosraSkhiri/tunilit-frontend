import { Meta, StoryObj } from '@storybook/react'
import InputButton from './InputButton'
import { CrossSmallIcon } from '../Icons'

const meta: Meta<typeof InputButton> = {
	component: InputButton,
}

export default meta

type Story = StoryObj<typeof InputButton>

export const DefaultInputButton: Story = {
  render: () => (
		<InputButton>
			<CrossSmallIcon />
		</InputButton>
	),
}

export const InfoInputButton: Story = {
  render: () => (
		<InputButton variant='info'>
			<CrossSmallIcon />
		</InputButton>
	),
}

export const SuccessInputButton: Story = {
  render: () => (
		<InputButton variant='success'>
			<CrossSmallIcon />
		</InputButton>
	),
}

export const ErrorInputButton: Story = {
  render: () => (
		<InputButton variant='error'>
			<CrossSmallIcon />
		</InputButton>
	),
}

export const DisabledInputButton: Story = {
  render: () => (
		<InputButton disabled>
			<CrossSmallIcon />
		</InputButton>
	),
}

export const MediumInputButton: Story = {
  render: () => (
		<InputButton size='md'>
			<CrossSmallIcon />
		</InputButton>
	),
}

export const LargeInputButton: Story = {
  render: () => (
		<InputButton size='lg'>
			<CrossSmallIcon size='lg' />
		</InputButton>
	),
}

export const Playground: Story = {
	render: (args) => (
		<InputButton {...args}>
			<CrossSmallIcon />
		</InputButton>
	),
}
