import { fireEvent, render } from '@testing-library/react'
import { describe, expect, vi } from 'vitest'

import LanguageMenu from './LanguageMenu'

const options = [
  {
    value: 'ar',
    label: 'عربي'
  },
  {
    value: 'fr',
    label: 'Français'
  },
  {
    value: 'en',
    label: 'English'
  },
]

describe('<LanguageMenu />', () => {
	it('should display options on trigger button click', async () => {
		const { getAllByRole, getByTestId } = render(
			<LanguageMenu 
        options={options}
        value={options[0].value}
        onValueChange={() => {}}
      />
		)

    const triggerBtn = getByTestId('icon-btn')

    triggerBtn && fireEvent.click(triggerBtn)

    const optionsElements = getAllByRole('menuitemradio')

    expect(optionsElements.length).toEqual(options.length)
	})

  it('should change value when a new option is clicked', () => {
    const onValueChange = vi.fn((newValue) => newValue)

    const { getAllByRole, getByTestId } = render(
			<LanguageMenu 
        options={options}
        value={options[0].value}
        onValueChange={onValueChange}
      />
		)

    const triggerBtn = getByTestId('icon-btn')

    triggerBtn && fireEvent.click(triggerBtn)

    const optionsElements = getAllByRole('menuitemradio')

    optionsElements[1] && fireEvent.click(optionsElements[1])

    expect(onValueChange).toHaveReturnedWith(options[1].value)
  })
})
