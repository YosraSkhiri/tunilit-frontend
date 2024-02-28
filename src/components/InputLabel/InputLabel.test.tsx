import { render } from '@testing-library/react'
import { describe, expect } from 'vitest'

import InputLabel from './InputLabel'
import styles from './InputLabel.module.scss'
import { labelVariantType } from './InputLabel.types'

const inputLabelVariants: labelVariantType[] = [
  'info',
  'success',
  'error',
]

describe('<InputLabel />', () => {
  it('should render a label with default label class', () => {
    const { container } = render(<InputLabel>Label</InputLabel>)
    expect(container.firstChild).toHaveClass(styles['label'])
  })

  inputLabelVariants.map((variant: labelVariantType) => {
    it(`should render a label with ${variant} label class`, () => {
      const { container } = render(<InputLabel variant={variant}>Label</InputLabel>)
      expect(container.firstChild).toHaveClass(styles[`label--${variant}`])
    })
  })

  it('should render a label with disabled label class', () => {
    const { container } = render(<InputLabel disabled>Label</InputLabel>)
    expect(container.firstChild).toHaveClass(styles['label--disabled'])
  })

  it('should render a label with htmlFor attribute', () => {
    const { container } = render(<InputLabel htmlFor="input">Label</InputLabel>)
    expect(container.firstChild).toHaveAttribute('for', 'input')
  })
})
