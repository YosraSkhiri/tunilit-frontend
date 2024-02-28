import {render} from "@testing-library/react"
import { describe, expect } from 'vitest'

import Typography from './Typography'
import styles from './Typography.module.scss'
import { variantType } from './Typography.types'

const variants: variantType[] = [
  'body1',
  'body2',
  'body3',
  'title',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2'
]

describe('<Typography />', () => {
  it('should render the text', () => {
    const { container } = render(<Typography>Text</Typography>)
    expect(container.firstChild).toHaveTextContent('Text')
  })

  it('should render body2 by default', () => {
    const { container } = render(<Typography>Text</Typography>)
    expect(container.firstChild).toHaveClass(styles['typography--body2'])
  })

  it('should center text', () => {
    const { container } = render(<Typography align='center'>Text</Typography>)
    expect(container.firstChild).toHaveClass(styles['typography--align-center'])
  })

  it('should have noWrap class', () => {
    const { container } = render(<Typography noWrap>Text</Typography>)
    expect(container.firstChild).toHaveClass(styles['typography--nowrap'])
  })

  variants.forEach((variant: variantType) => {
    it(`should render ${variant} text`, () => {
      const { container } = render(<Typography variant={variant}>Text</Typography>)
      expect(container.firstChild).toHaveClass(styles[`typography--${variant}`])
    }) 
  })

  it('should render h5 element with h1 style', () => {
    const { container } = render(<Typography component='h5' variant='h1'>Text</Typography>)
    expect(container.firstChild).toHaveClass(styles['typography--h1'])
    expect(container.firstChild?.nodeName).toBe('H5')
  })

  it('should render adorn with h1', () => {
    const { container } = render(<Typography adorn variant='h1'>Text</Typography>)
    expect(container.firstChild?.childNodes[1].nodeName).toBe('svg')
  })

  it('should render adorn with h2', () => {
    const { container } = render(<Typography adorn variant='h2'>Text</Typography>)
    expect(container.firstChild?.childNodes[1].nodeName).toBe('svg')
  })

  variants.forEach((variant: variantType) => {
    if (variant !== 'h1' && variant !== 'h2') {
      it(`should not render adorn with ${variant}`, () => {
        const { container } = render(<Typography adorn variant={variant}>Text</Typography>)
        expect(container.firstChild?.childNodes[1]).toBeNull
      })
    }
  })
})
