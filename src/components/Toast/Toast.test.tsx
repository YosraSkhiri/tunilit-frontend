import * as ToastRadix from '@radix-ui/react-toast'
import { fireEvent,render } from '@testing-library/react'
import { describe, expect, vi } from 'vitest'

import Toast from './Toast.tsx'

describe('<Toast />', () => {
  it('renders with title and message', () => {
    const { getByText } = render(
      <ToastRadix.Provider>
        <Toast
          message="Test Message"
          open={true}
          title="Test Title"
          onOpenChange={() => {}}
        />
        <ToastRadix.Viewport className="ToastViewport" />
      </ToastRadix.Provider>
    )


    expect(getByText('Test Title')).toBeInTheDocument()
    expect(getByText('Test Message')).toBeInTheDocument()
  })

  it('calls onOpenChange when close button is clicked', () => {
    const onOpenChange = vi.fn()

    const { getByRole } = render(
      <ToastRadix.Provider>
        <Toast
          message="Test Message"
          open={true}
          title="Test Title"
          onOpenChange={onOpenChange}
        />
        <ToastRadix.Viewport className="ToastViewport" />
      </ToastRadix.Provider>
      
    )

    fireEvent.click(getByRole('button'))

    expect(onOpenChange).toHaveBeenCalled()
  })

  it('renders with adornment', () => {
    const { getByTestId } = render(
      <ToastRadix.Provider>
        <Toast
        adorn={<div data-testid="adornment">Adornment</div>}
        message="Test Message"
        open={true}
        title="Test Title"
        onOpenChange={() => {}}
      />
      <ToastRadix.Viewport className="ToastViewport" />
      </ToastRadix.Provider>
    )

    expect(getByTestId('adornment')).toBeInTheDocument()
  })

  it('renders with link', () => {
    const linkProps = {
      href: '',
      children: 'Link Text'
    }
    const { getByText } = render(
      <ToastRadix.Provider>
        <Toast
          linkProps={linkProps}
          message="Test Message"
          open={true}
          title="Test Title"
          onOpenChange={() => {}}
        />
        <ToastRadix.Viewport className="ToastViewport" />
      </ToastRadix.Provider>
    )

    expect(getByText('Link Text')).toBeInTheDocument()
  })

  it('calls onOpenChange when link is clicked', () => {
    const onOpenChange = vi.fn()
    const linkProps = {
      href: '',
      children: 'Link Text'
    }
    const { getByText } = render(
      <ToastRadix.Provider>
        <Toast
          linkProps={linkProps}
          message="Test Message"
          open={true}
          title="Test Title"
          onOpenChange={onOpenChange}
        />
        <ToastRadix.Viewport className="ToastViewport" />
      </ToastRadix.Provider>
      
    )

    fireEvent.click(getByText('Link Text'))
    expect(onOpenChange).toHaveBeenCalled()
  })
})
