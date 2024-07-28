import { fireEvent, render } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, vi } from 'vitest'

import InputBase from './InputBase'

describe('<InputBase />', () => {
	it('should render a disabled input', () => {
		const { container } = render(<InputBase disabled={true} />)
		expect(container.firstChild).toHaveAttribute('disabled')
	})

	it('should render a required input', () => {
		const { container } = render(<InputBase required={true} />)
		expect(container.firstChild).toHaveAttribute('required')
	})

	describe('event callbacks', () => {
		it('should fire event callbacks', () => {
			const onClick = vi.fn()
			const onBlur = vi.fn()
			const onFocus = vi.fn()
			const onChange = vi.fn()
			const onMouseEnter = vi.fn()
			const onMouseLeave = vi.fn()

			const { container } = render(
				<InputBase
          onBlur={onBlur}
					onChange={onChange}
					onClick={onClick}
					onFocus={onFocus}
					onMouseEnter={onMouseEnter}
					onMouseLeave={onMouseLeave}
				/>
			)

			const inputBase = container.firstChild

			inputBase && fireEvent.click(inputBase)
			expect(onClick).toHaveBeenCalledTimes(1)

			inputBase && fireEvent.blur(inputBase)
			expect(onBlur).toHaveBeenCalledTimes(1)

			inputBase && fireEvent.focus(inputBase)
			expect(onFocus).toHaveBeenCalledTimes(1)

			inputBase && fireEvent.change(inputBase, { target: { value: 'text' } })
			expect(onChange).toHaveBeenCalledTimes(1)

			inputBase && fireEvent.mouseEnter(inputBase)
			expect(onMouseEnter).toHaveBeenCalledTimes(1)

			inputBase && fireEvent.mouseLeave(inputBase)
			expect(onMouseLeave).toHaveBeenCalledTimes(1)
		})
	})

	it('should be able to get a ref', () => {
		const inputRef = createRef<HTMLInputElement>()
		const { container } = render(<InputBase ref={inputRef} />)
		expect(inputRef.current).toEqual(container.querySelector('input'))
	})
})
