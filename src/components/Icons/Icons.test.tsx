import { render } from '@testing-library/react'
import { describe, expect } from 'vitest'

import styles from './Icon.module.scss'
import * as Icons from './index'

describe('<Icon />', () => {
  Object.values(Icons).forEach((Icon) => {
    it(`should render small ${Icon.name}`, () => {
      const { container } = render(<Icon size='sm' />)
      expect(container.firstChild).toHaveClass(styles['icon--sm'])
    })

    it(`should render medium ${Icon.name}`, () => {
      const { container } = render(<Icon size='md' />)
      expect(container.firstChild).toHaveClass(styles['icon--md'])
    })

    it(`should render large ${Icon.name}`, () => {
      const { container } = render(<Icon size='lg' />)
      expect(container.firstChild).toHaveClass(styles['icon--lg'])
    })
  })
})
