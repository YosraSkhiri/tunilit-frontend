import { render } from '@testing-library/react'
import { describe, expect } from 'vitest'

import {
  PlaceholderIcon,
} from '../Icons'
import Button from './Button'
import styles from './Button.module.scss'
import { buttonVariantType } from './Button.types'

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
    const { container } = render(<Button>Button</Button>)
    expect(container.firstChild).toHaveClass(styles['btn--primary'])
  })

  buttonVariants.map((variant: buttonVariantType) => {
    it(`should render ${variant} button`, () => {
      const { container } = render(<Button variant={variant}>Button</Button>)
      expect(container.firstChild).toHaveClass(styles[`btn--${variant}`])
    })
  })

  buttonVariants.map((variant: buttonVariantType) => {
    if(variant !== 'subtle') {
      it('should render a disabled outlined button', () => {
        const { container } = render(<Button disabled variant={variant}>Button</Button>)
        expect(container.firstChild).toHaveClass(styles['btn--disabled-outlined'])
      })
    } else {
      it('should render a disabled subtle button', () => {
        const { container } = render(<Button disabled variant={variant}>Button</Button>)
        expect(container.firstChild).toHaveClass(styles['btn--disabled-subtle'])
      })
    }
  })

  buttonVariants.map((variant: buttonVariantType) => {
    if(variant !== 'subtle') {
      it('should render a loading outlined button', () => {
        const { container } = render(<Button loading variant={variant}>Button</Button>)
        expect(container.firstChild).toHaveClass(styles['btn--disabled-outlined'])
      })
    } else {
      it('should render a loading subtle button', () => {
        const { container } = render(<Button loading variant={variant}>Button</Button>)
        expect(container.firstChild).toHaveClass(styles['btn--disabled-subtle'])
      })
    }
  })

	it('should render a medium button', () => {
    const { container } = render(<Button>Button</Button>)
    expect(container.firstChild).toHaveClass(styles['btn--md'])
  })

  it('should render a large button', () => {
    const { container } = render(<Button size='lg'>Button</Button>)
    expect(container.firstChild).toHaveClass(styles['btn--lg'])
  })

  it('should render a button with an icon', () => {
    const { container } = render(<Button>
      Button
      <PlaceholderIcon />
    </Button>)

    expect(container.firstChild?.childNodes.length).equal(2)
    expect(container.firstChild?.childNodes[1].nodeName).equal('svg')
  })

  it('should render a button with dotted shadow', () => {
    const { container } = render(<Button shadow>Button</Button>)

    expect(container.firstChild).toHaveClass(styles['btn--shadow'])
    expect(container.firstChild).toHaveClass(styles['btn--shadow-md'])
  })

  it('should render a button with an arrow', () => {
    const { container } = render(<Button arrow>Button</Button>)

    expect(container.firstChild).toHaveClass(styles['wrapper__arrow'])
    expect(container.firstChild?.nodeName).equal('DIV')
    expect(container.firstChild?.lastChild?.nodeName).equal('svg')
  }) 
})
