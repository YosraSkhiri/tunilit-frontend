import { render } from '@testing-library/react'
import { describe, expect } from 'vitest'
import HelperText from './HelperText'
import { variantType } from './HelperText.types'
import styles from './HelperText.module.scss'

const variants: variantType[] = ['info', 'success', 'error']

describe('<HelperText />', () => {
	it('should render a default helper text', () => {
    const {container} = render(<HelperText>This is a helper message</HelperText>)
    expect(container.firstChild).toHaveClass(styles['helper-text'])
  })

  variants.map((variant: variantType) => {
    it(`should render ${variant} text helper`, () => {
      const {container} = render(<HelperText variant={variant}>This is a helper message</HelperText>)
      expect(container.firstChild).toHaveClass(styles[`helper-text--${variant}`])
    })
  })

  it('should render a helper text with disabled style', () => {
    const {container} = render(<HelperText disabled>This is a helper message</HelperText>)
    expect(container.firstChild).toHaveClass(styles['helper-text--disabled'])
  })
})
