import { render } from '@testing-library/react'
import { describe, expect } from 'vitest'

import styles from './Checkbox.module.scss'
import Checkbox from './Checkbox.tsx'

describe('<Checkbox />', () => {
  it('should render an unchecked `checkbox` by default', () => {
    const { container } = render(<Checkbox />)
    expect(container.querySelector(`.${styles['checkbox__root']}`)).toHaveAttribute('data-state', 'unchecked')
  })

  it('should render a checked `checkbox` when `checked={true}', () => {
    const { container } = render(<Checkbox checked />)
    expect(container.querySelector(`.${styles['checkbox__root']}`)).toHaveAttribute('data-state', 'checked')
  })

  it('should render a required checkbox', () => {
    const { container } = render(<Checkbox required />)
    expect(container.querySelector(`.${styles['checkbox__root']}`)).toHaveAttribute('aria-required', 'true')
  })

  it('should render a disabled checkbox', () => {
    const { container } = render(<Checkbox disabled />)
    expect(container.querySelector(`.${styles['checkbox__root']}`)).toHaveAttribute('disabled')
  })
})
