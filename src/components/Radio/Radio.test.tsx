import * as RadioGroupRadix from '@radix-ui/react-radio-group';
import { render } from '@testing-library/react'
import { describe, expect } from 'vitest'

import styles from './Radio.module.scss'
import Radio from './Radio.tsx'

describe('<Radio />', () => {
  it('should render a unchecked radio button', () => {
    const { container } = render(
      <RadioGroupRadix.Root>
        <Radio value='test1' />
      </RadioGroupRadix.Root>
    )
    expect(container.querySelector(`.${styles['radio__item']}`)).toHaveAttribute('aria-checked', 'false')
  })

  it('should render a checked radio button', () => {
    const { container } = render(
      <RadioGroupRadix.Root defaultValue='test1'>
        <Radio value='test1' />
      </RadioGroupRadix.Root>
    )
    expect(container.querySelector(`.${styles['radio__item']}`)).toHaveAttribute('aria-checked', 'true')
  })

  it('should render an unchecked disabled radio button', () => {
    const { container } = render(
      <RadioGroupRadix.Root>
        <Radio disabled value='test1' />
      </RadioGroupRadix.Root>
    )
    expect(container.querySelector(`.${styles['radio__item']}`)).toHaveAttribute('disabled')
    expect(container.querySelector(`.${styles['radio__item']}`)).toHaveClass(styles['radio__item--disabled'])
  })

  it('should render a checked disabled radio button', () => {
    const { container } = render(
      <RadioGroupRadix.Root value='test1'>
        <Radio disabled value='test1' />
      </RadioGroupRadix.Root>
    )
    expect(container.querySelector(`.${styles['radio__item']}`)).toHaveAttribute('disabled')
    expect(container.querySelector(`.${styles['radio__item']}`)).toHaveClass(styles['radio__item--disabled'])
    expect(container.querySelector(`.${styles['radio__indicator']}`)).toHaveClass(styles['radio__indicator--disabled'])
  })
})
