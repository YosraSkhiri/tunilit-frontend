import { fireEvent, render } from '@testing-library/react'
import { describe, expect } from 'vitest'

import Breadcrumbs from './Breadcrumbs.tsx'

const links = [
  {
    children: 'link 1',
  },
  {
    children: 'link 2',
  },
  {
    children: 'link 3',
  },
  {
    children: 'link 4',
  },
  {
    children: 'link 5',
  },
  {
    children: 'link 6',
  },
]

describe('<Breadcrumbs />', () => {
  it('renders all links when numbers of links is equal or less than maxItems', () => {
    const { container } = render(
      <Breadcrumbs 
        links={links}
        maxItems={10}
      />
    )

    expect(container.querySelectorAll('a').length).toEqual(links.length)
  })

  it('should expand when expand button is clicked', () => {
    const { container } = render(
      <Breadcrumbs 
        links={links}
        maxItems={3}
      />
    )
    // show only 3 links at first
    expect(container.querySelectorAll('a').length).toEqual(3)

    const button = container.querySelector('button')
    button && fireEvent.click(button)

    // show all links after clicking the button 
    expect(container.querySelectorAll('a').length).toEqual(links.length)
  })
})
