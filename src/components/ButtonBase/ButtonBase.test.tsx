import { fireEvent, render } from '@testing-library/react'
import { describe, expect, vi } from 'vitest'

import ButtonBase from './ButtonBase'

describe('<ButtonBase />', () => {
	it('should render a button with type button', () => {
		const { container } = render(<ButtonBase></ButtonBase>)
		expect(container.firstChild?.nodeName).equal('BUTTON')
		expect(container.firstChild).toHaveAttribute('type', 'button')
	})

	it('should change the button type', () => {
    const { container } = render(<ButtonBase type='submit'></ButtonBase>)
    expect(container.firstChild).toHaveAttribute('type', 'submit')
  })

	it('should automatically change the button to an anchor element when href is provided', () => {
    const { container } = render(<ButtonBase href='#'></ButtonBase>)
    expect(container.firstChild?.nodeName).equal('A')
  })

  describe('event callbacks', () => {
    it('should fire event callbacks', () => {
      const onClick = vi.fn()
      const onBlur = vi.fn()
      const onFocus = vi.fn()

      const { container } = render(
        <ButtonBase
          onBlur={onBlur}
          onClick={onClick}
          onFocus={onFocus}
        >
        </ButtonBase>
      )

      const button = container.firstChild

      button && fireEvent.click(button)
      expect(onClick).toHaveBeenCalledTimes(1)

      button && fireEvent.focus(button)
      expect(onFocus).toHaveBeenCalledTimes(1)

      button && fireEvent.blur(button)
      expect(onBlur).toHaveBeenCalledTimes(1)
    })
  })
})
