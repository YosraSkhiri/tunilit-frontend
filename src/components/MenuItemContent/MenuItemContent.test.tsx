import { render } from '@testing-library/react'
import { describe, expect } from 'vitest'

import { CheckIcon } from '../Icons'
import MenuItemContent from './MenuItemContent'
import styles from './MenuItemContent.module.scss'

describe('<MenuItemContent />', () => {
  it('should render a MenuItem with selected class', () => {
    const { container } = render(<MenuItemContent selected>Menu Item</MenuItemContent>)
    expect(container.firstChild).toHaveClass(styles['menu-item--selected'])
  })

  it('should render a disabled MenuItem', () => {
    const { container } = render(<MenuItemContent disabled>Menu Item</MenuItemContent>)
    expect(container.firstChild).toHaveClass(styles['menu-item--disabled'])
  })

  it('should render a MenuItem with left adorn', () => {
    const { container } = render(<MenuItemContent renderLeftAdorn={(props) => (<CheckIcon {...props} />)}>Menu Item</MenuItemContent>)
    expect(container?.querySelector(`.${styles['menu-item__left-adorn']}`)).toBeTruthy()
  })

  it('should render a MenuItem with right adorn', () => {
    const { container } = render(<MenuItemContent renderRightAdorn={(props) => (<CheckIcon {...props} />)}>Menu Item</MenuItemContent>)
    expect(container?.querySelector(`.${styles['menu-item__right-adorn']}`)).toBeTruthy()
  })

  it('should render a small MenuItem', () => {
    const { container } = render(<MenuItemContent size='sm'>Menu Item</MenuItemContent>)
    expect(container.firstChild).toHaveClass(styles['menu-item--sm'])
  })

  it('should render a medium MenuItem', () => {
    const { container } = render(<MenuItemContent size='md'>Menu Item</MenuItemContent>)
    expect(container.firstChild).toHaveClass(styles['menu-item--md'])
  })

  it('should render a large MenuItem', () => {
    const { container } = render(<MenuItemContent size='lg'>Menu Item</MenuItemContent>)
    expect(container.firstChild).toHaveClass(styles['menu-item--lg'])
  })
})
