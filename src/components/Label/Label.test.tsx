import { render } from '@testing-library/react'
import { describe, expect } from 'vitest'

import Label from './Label'
import styles from './Label.module.scss'
import { labelVariantType } from './Label.types'

const inputLabelVariants: labelVariantType[] = [
  'info',
  'success',
  'error',
]

describe('<Label />', () => {
  it('should render a label with default label class', () => {
    const { container } = render(<Label>Label</Label>)
    expect(container.firstChild).toHaveClass(styles['label'])
  })

  inputLabelVariants.map((variant: labelVariantType) => {
    it(`should render a label with ${variant} label class`, () => {
      const { container } = render(<Label variant={variant}>Label</Label>)
      expect(container.firstChild).toHaveClass(styles[`label--${variant}`])
    })
  })

  it('should render a label with disabled label class', () => {
    const { container } = render(<Label disabled>Label</Label>)
    expect(container.firstChild).toHaveClass(styles['label--disabled'])
  })

  it('should render a label with htmlFor attribute', () => {
    const { container } = render(<Label htmlFor="input">Label</Label>)
    expect(container.firstChild).toHaveAttribute('for', 'input')
  })
})
