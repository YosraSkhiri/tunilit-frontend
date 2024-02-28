import { render } from '@testing-library/react'
import { describe, expect } from 'vitest'

import { PlaceholderIcon } from '../Icons'
import typographyStyles from '../Typography/Typography.module.scss'
import Link from './Link'

describe('<Link />', () => {
	it('should render a text', () => {
		const { getByText } = render(<Link>Link</Link>)
    expect(getByText('Link')).toBeTruthy()
	})

	it('should pass props to the <Typography /> component', () => {
    const { container } = render(<Link typographyProps={{variant: 'body1'}}>Link</Link>)
    expect(container.querySelector(`.${typographyStyles['typography--body1']}`)).toBeTruthy()
  })

	it('should render a leftAdorn', () => {
    const { container } = render(<Link leftAdorn={<PlaceholderIcon />}>Link</Link>)
    expect(container.firstChild?.firstChild?.nodeName).toEqual('svg')
  })

	it('should render a rightAdorn', () => {
    const { container } = render(<Link rightAdorn={<PlaceholderIcon />}>Link</Link>)
    expect(container.firstChild?.lastChild?.nodeName).toEqual('svg')
  })
})
