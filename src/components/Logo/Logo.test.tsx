import { fireEvent, render } from '@testing-library/react'
import { describe, expect } from 'vitest'

import Logo from './Logo'
import styles from './Logo.module.scss'

describe('<Logo />', () => {
  it('should render full logo', () => {
    const { getByTestId } = render(<Logo />)
    const icon = getByTestId('logo-icon')
    const text = getByTestId('logo-text')

    expect(icon.nodeName).equal('svg')
    expect(text.nodeName).equal('svg')
  })

  it('should render only icon', () => {
    const { container, getByTestId } = render(<Logo onlyIcon />)
    const icon = getByTestId('logo-icon')

    expect(container.childNodes.length).equal(1)
    expect(icon.nodeName).equal('svg')
  })

  it('should wrap logo with a link', () => {
    const { container } = render(<Logo link />)
    expect(container.firstChild?.nodeName).equal('A')
  })

  it('should render default text by default', () => {
    const { container } = render(<Logo />)
    expect(container.firstChild?.lastChild).toHaveClass(styles['text--default'])
  })

  it('should render light text', () => {
    const { container } = render(<Logo lightText />)
    expect(container.firstChild?.lastChild).toHaveClass(styles['text--light'])
  })

  it('should render open eyes by default', () => {
    const { getByTestId } = render(<Logo />)
    const closedLeftEye = getByTestId('left-eye-closed')
    const openLeftEye = getByTestId('left-eye-open')

    const closedRightEye = getByTestId('right-eye-closed')
    const openRightEye = getByTestId('right-eye-open')

    expect(closedLeftEye).toHaveClass(styles['icon--hide'])
    expect(closedRightEye).toHaveClass(styles['icon--hide'])

    expect(openLeftEye.nodeName).equal('g')
    expect(openRightEye.nodeName).equal('g')
  })

  it('should render open eyes', () => {
    const { getByTestId } = render(<Logo eyes='open' />)
    const closedLeftEye = getByTestId('left-eye-closed')
    const openLeftEye = getByTestId('left-eye-open')

    const closedRightEye = getByTestId('right-eye-closed')
    const openRightEye = getByTestId('right-eye-open')

    expect(closedLeftEye).toHaveClass(styles['icon--hide'])
    expect(closedRightEye).toHaveClass(styles['icon--hide'])

    expect(openLeftEye.nodeName).equal('g')
    expect(openRightEye.nodeName).equal('g')
  })

  it('should render closed eyes', () => {
    const { getByTestId } = render(<Logo eyes='closed' />)
    const closedLeftEye = getByTestId('left-eye-closed')
    const openLeftEye = getByTestId('left-eye-open')

    const closedRightEye = getByTestId('right-eye-closed')
    const openRightEye = getByTestId('right-eye-open')

    expect(openLeftEye).toHaveClass(styles['icon--hide'])
    expect(openRightEye).toHaveClass(styles['icon--hide'])

    expect(closedLeftEye.nodeName).equal('path')
    expect(closedRightEye.nodeName).equal('path')
  })

  it('should render a wink', () => {
    const { getByTestId } = render(<Logo eyes='wink' />)
    const closedLeftEye = getByTestId('left-eye-closed')
    const openLeftEye = getByTestId('left-eye-open')

    const closedRightEye = getByTestId('right-eye-closed')
    const openRightEye = getByTestId('right-eye-open')

    expect(openLeftEye).toHaveClass(styles['icon--hide'])
    expect(closedRightEye).toHaveClass(styles['icon--hide'])

    expect(closedLeftEye.nodeName).equal('path')
    expect(openRightEye.nodeName).equal('g')
  })

  it('should animate logo on hover', () => {
    const { container, getByTestId } = render(<Logo animate />)

    const logo = container.querySelector(`.${styles.logo}`)
    logo && fireEvent.mouseOver(logo)

    const closedRightEye = getByTestId('right-eye-closed')
    const closedLeftEye = getByTestId('left-eye-closed')
    const openRightEye = getByTestId('right-eye-open')
    const openLeftEye = getByTestId('left-eye-open')


    expect(openRightEye).toHaveClass(styles['icon--hide'])
    expect(openLeftEye).toHaveClass(styles['icon--hide'])

    expect(closedRightEye).not.toHaveClass(styles['icon--hide'])
    expect(closedLeftEye).not.toHaveClass(styles['icon--hide'])
  })
})
