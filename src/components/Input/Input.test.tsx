import { render } from '@testing-library/react'
import { describe, expect } from 'vitest'

import InputButton from '../InputButton'
import Tag from '../Tag'
import Input from './Input'
import styles from './Input.module.scss'

describe('<Input />', () => {
  it('should render a default Input', () => {
    const { container } = render(<Input />)
    expect(container.firstChild).toHaveClass(styles['input-wrapper--default'])
  })

  it('should render an info Input', () => {
    const { container } = render(<Input variant='info' />)
    expect(container.firstChild).toHaveClass(styles['input-wrapper--info'])
  })
  
  it('should render a success Input', () => {
    const { container } = render(<Input variant='success' />)
    expect(container.firstChild).toHaveClass(styles['input-wrapper--success'])
  })

  it('should render an error Input', () => {
    const { container } = render(<Input variant='error' />)
    expect(container.firstChild).toHaveClass(styles['input-wrapper--error'])
  })

  it('should render a disabled Input', () => {
    const { container } = render(<Input disabled />)
    expect(container.firstChild).toHaveClass(styles['input-wrapper--disabled'])
  })

  it('should render an md sized Input', () => {
    const { container } = render(<Input size='md' />)
    expect(container.firstChild).toHaveClass(styles['input-wrapper--md'])
    expect(container.querySelector(`.${styles['input-base-wrapper--md']}`)).toBeTruthy()
  })

  it('should render an lg sized Input', () => {
    const { container } = render(<Input size='lg' />)
    expect(container.firstChild).toHaveClass(styles['input-wrapper--lg'])
    expect(container.querySelector(`.${styles['input-base-wrapper--lg']}`)).toBeTruthy()
  })

  it('should render an Input with startAdornment', () => {
    const { getByText } = render(<Input startAdornment={<Tag>Tag</Tag>} />)
    expect(getByText('Tag')).toBeTruthy()
  })

  it('should render an Input with endAdornment', () => {
    const { getByText } = render(<Input endAdornment={<InputButton>1</InputButton>} />)
    expect(getByText('1')).toBeTruthy()
  })
})
