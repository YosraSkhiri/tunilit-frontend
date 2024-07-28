import { Meta,StoryObj } from '@storybook/react'
import { useState } from 'react'

import LanguageMenu from './LanguageMenu.tsx'

const meta: Meta<typeof LanguageMenu> = {
  component: LanguageMenu
}

export default meta

type Story = StoryObj<typeof LanguageMenu>

export const Overview: Story = {
  render: () => {
    const [value, setValue] = useState('en')
    
    return (
      <LanguageMenu
        options={[
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
        ]}
        value={value}
        onValueChange={(newValue) => setValue(newValue)}
      />
    )
  }
}
