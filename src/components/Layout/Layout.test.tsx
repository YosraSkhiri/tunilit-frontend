import { render } from '@testing-library/react'
import { describe, expect } from 'vitest'
import styles from './Layout.module.scss'
import Layout from './Layout'
import { directionType } from './Layout.types'

const direction: directionType[] = [
  'row',
  'column',
  'column-reverse',
  'row-reverse',
]

describe('<Layout />', () => {
  it('should render flex layout by default', () => {
    const { container } = render(<Layout></Layout>)
    expect(container.firstChild).toHaveClass(styles['flex'])
  })

  it('should render grid layout', () => {
    const { container } = render(<Layout type='grid'></Layout>)
    expect(container.firstChild).toHaveClass(styles['grid'])
  })

  direction.forEach((dir: directionType) => {
    it(`should render flex layout on ${dir} direction`, () => {
      const { container } = render(<Layout type='flex' direction={dir}></Layout>)
      expect(container.firstChild).toHaveClass(styles[`flex--${dir}`])
    })
  })

  it('should center layout', () => {
    const { container } = render(<Layout center></Layout>)
    expect(container.firstChild).toHaveClass(styles['center'])
  })

  it('should wrap flex layout', () => {
    const { container } = render(<Layout flexWrap='wrap'></Layout>)
    expect(container.firstChild).toHaveClass(styles['flex--wrap'])
  })

  it('should nowrap flex layout', () => {
    const { container } = render(<Layout flexWrap='nowrap'></Layout>)
    expect(container.firstChild).toHaveClass(styles['flex--nowrap'])
  })
})
