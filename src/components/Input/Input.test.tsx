import { render } from '@testing-library/react'
import { describe, expect } from 'vitest'

import Input from './Input'
import styles from './Input.module.scss'

describe('<Input />', () => {
  it('should render a default Input', () => {
    const { container } = render(<Input />)
    expect(container.firstChild).toHaveClass(styles['input-wrapper--default'])
  })

  it('should render an info Input')
  it('should render a success Input')
  it('should render an error Input')
  it('should render a disabled Input')
  it('should render an md sized Input')
  it('should render an lg sized Input')
  it('should render an Input with startAdornment')
  it('should render an Input with endAdornment')
})
