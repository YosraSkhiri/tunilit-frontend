import { render } from '@testing-library/react'
import { describe, expect } from 'vitest'
import IconButton from './IconButton'
import {
  PlaceholderIcon,
} from '../Icons'
import styles from './IconButton.module.scss'
import { buttonVariantType } from './IconButton.type'

const buttonVariants: buttonVariantType[] = [
  'primary',
  'secondary',
  'tertiary',
  'success',
  'error',
  'subtle',
]

describe('<Button />', () => {
	it('should render a primary button by default', () => {
    const { container } = render(<IconButton>Button</IconButton>)
    expect(container.firstChild).toHaveClass(styles['btn--primary'])
  })

  buttonVariants.map((variant: buttonVariantType) => {
    it(`should render ${variant} button`, () => {
      const { container } = render(<IconButton variant={variant}>Button</IconButton>)
      expect(container.firstChild).toHaveClass(styles[`btn--${variant}`])
    })
  })

  buttonVariants.map((variant: buttonVariantType) => {
    if(variant !== 'subtle') {
      it('should render a disabled outlined button', () => {
        const { container } = render(<IconButton disabled variant={variant}>Button</IconButton>)
        expect(container.firstChild).toHaveClass(styles['btn--disabled-outlined'])
      })
    } else {
      it('should render a disabled subtle button', () => {
        const { container } = render(<IconButton disabled variant={variant}>Button</IconButton>)
        expect(container.firstChild).toHaveClass(styles['btn--disabled-subtle'])
      })
    }
  })

  buttonVariants.map((variant: buttonVariantType) => {
    if(variant !== 'subtle') {
      it('should render a loading outlined button', () => {
        const { container } = render(<IconButton loading variant={variant}>Button</IconButton>)
        expect(container.firstChild).toHaveClass(styles['btn--disabled-outlined'])
      })
    } else {
      it('should render a loading subtle button', () => {
        const { container } = render(<IconButton loading variant={variant}>Button</IconButton>)
        expect(container.firstChild).toHaveClass(styles['btn--disabled-subtle'])
      })
    }
  })

	it('should render a medium button', () => {
    const { container } = render(<IconButton>Button</IconButton>)
    expect(container.firstChild).toHaveClass(styles['btn--md'])
  })

  it('should render a large button', () => {
    const { container } = render(<IconButton size='lg'>Button</IconButton>)
    expect(container.firstChild).toHaveClass(styles['btn--lg'])
  })

  it('should render a button with an icon', () => {
    const { container } = render(<IconButton>
      Button
      <PlaceholderIcon />
    </IconButton>)

    expect(container.firstChild?.childNodes.length).equal(2)
    expect(container.firstChild?.childNodes[1].nodeName).equal('svg')
  })
})
