import { render } from '@testing-library/react'
import { describe, expect } from 'vitest'
import InputButton from './InputButton'
import { PlaceholderIcon } from '../Icons'
import styles from './InputButton.module.scss'

describe('<InputButton />', () => {
	it('should render an input button', () => {
		const { container } = render(
			<InputButton>
				<PlaceholderIcon />
			</InputButton>
		)

		expect(container.firstChild?.nodeName).toEqual('BUTTON')
	})

	it('should render a default input button', () => {
		const { container } = render(
			<InputButton>
				<PlaceholderIcon />
			</InputButton>
		)

		expect(container.firstChild).toHaveClass(styles['btn--default'])
	})

	it('should render an info input button', () => {
		const { container } = render(
			<InputButton variant="info">
				<PlaceholderIcon />
			</InputButton>
		)

		expect(container.firstChild).toHaveClass(styles['btn--info'])
	})

	it('should render a success input button', () => {
		const { container } = render(
			<InputButton variant="success">
				<PlaceholderIcon />
			</InputButton>
		)

		expect(container.firstChild).toHaveClass(styles['btn--success'])
	})

	it('should render an error input button', () => {
		const { container } = render(
			<InputButton variant="error">
				<PlaceholderIcon />
			</InputButton>
		)

		expect(container.firstChild).toHaveClass(styles['btn--error'])
	})

	it('should render a disabled input button', () => {
		const { container } = render(
			<InputButton disabled>
				<PlaceholderIcon />
			</InputButton>
		)

		expect(container.firstChild).toHaveClass(styles['btn--disabled'])
		expect(container.firstChild).toHaveAttribute('disabled')
	})

	it('should render a medium input button', () => {
    const { container } = render(
			<InputButton size='md'>
				<PlaceholderIcon />
			</InputButton>
		)

		expect(container.firstChild).toHaveClass(styles['btn--md'])
  })

	it('should render a large input button', () => {
    const { container } = render(
			<InputButton size='lg'>
				<PlaceholderIcon />
			</InputButton>
		)

		expect(container.firstChild).toHaveClass(styles['btn--lg'])
  })

	it('should render an input button with a tooltip', () => {
    const { getAllByTestId } = render(
			<InputButton tooltip='tooltip'>
				<PlaceholderIcon />
			</InputButton>
		)

		expect(getAllByTestId('tooltip-trigger')).toBeTruthy()
  })
})
