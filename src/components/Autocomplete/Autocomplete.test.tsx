import { act, fireEvent, render, waitFor } from '@testing-library/react'
import { describe, expect, vi } from 'vitest'

import Autocomplete from './Autocomplete.tsx'

const options = ['option1', 'option2', 'option3']

beforeAll(() => {
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

describe('<Autocomplete />', () => {
  it('renders autocomplete component with input and options', async () => {
    const { container, getByTestId } = render(
      <Autocomplete 
        id='test1'
        inputValue={''}
        options={options}
        selectedValue={''}
        setInputValue={() => {}}
        setSelectedValue={() => {}}
      />
    )

    const inputElement = container.querySelector('input')
    expect(inputElement?.nodeName).toBe('INPUT')

    await act(async () => {
      inputElement && fireEvent.click(inputElement)
    })

    await waitFor(() => {
      options.forEach(op => {
        expect(getByTestId(op)).toBeTruthy()
      })
    })
  })

  it('should clear the input when blur', async () => {    
    const { container } = render(
      <Autocomplete 
        inputValue={''}
        options={options}
        selectedValue={''}
        setInputValue={() => {}}
        setSelectedValue={() => {}}
      />
    )

    const inputElement = container.querySelector('input')

    if (inputElement) {
      await act(async () => {
        inputElement.focus()
        fireEvent.change(inputElement, { target: { value: 'a' } })
      })
  
      expect(inputElement.value).to.equal('a')
  
      act(() => {
        inputElement.blur()
      })
    
      expect(inputElement.value).to.equal('')
    } else {
      throw new Error('input element not found!')
    }
  })

  it('should show a loading message when open', async () => {
    const { container, getByText } = render(
      <Autocomplete 
        loading
        inputValue={''}
        options={[]}
        selectedValue={''}
        setInputValue={() => {}}
        setSelectedValue={() => {}}
      />
    )
    const inputElement = container.querySelector('input')

    await act( async () => {
      inputElement && fireEvent.click(inputElement)
    })

    expect(getByText('Loading...')).toBeTruthy()
  })

  it('should set the focus on the first item', async () => {
    const { container, getByRole } = render(
      <Autocomplete 
        inputValue={''}
        options={options}
        selectedValue={''}
        setInputValue={() => {}}
        setSelectedValue={() => {}}
      />
    )
  
    const inputElement = container.querySelector('input')
    await act( async () => {
      inputElement && fireEvent.click(inputElement)
    })

    const listbox = getByRole('listbox')
    expect(listbox.children[0].children[0].children[0]).toHaveAttribute('data-headlessui-state', 'active focus')
  })

  it('removes a tag from selected values', async () => {
    const selectedValue = [options[0], options[2]]
    const setSelectedValue = vi.fn()

    const { getByTestId } = render(
      <Autocomplete 
        multiple
        inputValue={''}
        options={options}
        selectedValue={selectedValue}
        setInputValue={() => {}}
        setSelectedValue={setSelectedValue}
      />
    )

    const tagRemoveBtn = getByTestId(`tag-${selectedValue[1]}`)

    await act( async () => {
      tagRemoveBtn && fireEvent.click(tagRemoveBtn)
    })
    
    expect(setSelectedValue).toHaveBeenCalledWith([options[0]])
  })

/*
  it('selects an option from autocomplete', async () => {
    const setInputValue = vi.fn()
    const setSelectedValue = vi.fn()

    const { container, getByTestId } = render(
      <Autocomplete 
        inputValue={''}
        options={options}
        selectedValue={''}
        setInputValue={setInputValue}
        setSelectedValue={setSelectedValue}
      />
    )

    const inputElement = container.querySelector('input')
    expect(inputElement?.nodeName).toBe('INPUT')

    await act( async () => {
      inputElement && fireEvent.click(inputElement)
    })

    const optionToSelect = options[1]
    const optionToClick = getByTestId(optionToSelect)

    await act( async () => {
      optionToClick && fireEvent.click(optionToClick)
    })

    await waitFor(() => {
      expect(setSelectedValue).toHaveBeenCalledWith(optionToSelect)
    })
  })
  */
})
