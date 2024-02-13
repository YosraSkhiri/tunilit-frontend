import { render } from '@testing-library/react'
import { describe, expect } from 'vitest'
import Badge from './Badge'
import styles from './Badge.module.scss'

describe('<Badge />', () => {
	it('should render a dot badge', () => {
		const { container } = render(<Badge></Badge>)
		expect(container.firstChild?.firstChild).toHaveClass(styles['badge--dot'])
	})

	it('should render a primary dot badge', () => {
		const { container } = render(<Badge type="primary"></Badge>)
		expect(container.firstChild?.firstChild).toHaveClass(
			styles['badge--dot'],
			styles['badge--primary']
		)
	})

	it('should render a secondary dot badge', () => {
		const { container } = render(<Badge type="secondary"></Badge>)
		expect(container.firstChild?.firstChild).toHaveClass(
			styles['badge--dot'],
			styles['badge--secondary']
		)
	})

	it('should render a primary standard badge', () => {
		const { container } = render(
			<Badge
				variant="standard"
				type="primary"
				content="1"></Badge>
		)
		expect(container.firstChild?.lastChild).toHaveClass(
			styles['badge--standard'],
			styles['badge--primary']
		)
	})

	it('should render a secondary standard badge', () => {
		const { container } = render(
			<Badge
				variant="standard"
				type="secondary"
				content="1"></Badge>
		)
		expect(container.firstChild?.lastChild).toHaveClass(
			styles['badge--standard'],
			styles['badge--secondary']
		)
	})

	it('should not render a dot badge when invisible is set to true', () => {
		const { container } = render(
			<Badge
				variant="dot"
				invisible></Badge>
		)

		expect(container.firstChild?.lastChild).toBeFalsy()
	})

	it('should not render a standard badge when content is empty', () => {
		const { container } = render(<Badge variant="standard"></Badge>)

		expect(container.firstChild?.lastChild).toBeFalsy()
	})
})
