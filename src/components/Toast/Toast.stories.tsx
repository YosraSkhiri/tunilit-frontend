import * as ToastRadix from '@radix-ui/react-toast'
import { Meta,StoryObj } from '@storybook/react'
import { useState } from 'react'

import Button from '../Button/Button.tsx'
import { CompareIcon } from '../Icons/index.tsx'
import Toast from './Toast.tsx'

const meta: Meta<typeof Toast> = {
  component: Toast
}

export default meta

type Story = StoryObj<typeof Toast>

export const Overview: Story = {
	args: {
		message: 'The school is added to your compare list.',
		linkProps: {
			children: 'Visit list',
			underline: true,
			variant: 'subtle',
		},
    title: 'Added to the compare list!',
		adorn: <CompareIcon />,
	},
  
	render: (args) => {
		const [open, setOpen] = useState(false)

		return (
			<ToastRadix.Provider >
				<Button onClick={() => {
          setOpen(true)
        }}>
          Show Toast!
        </Button>
        <Toast {...args} open={open} onOpenChange={setOpen} />
				<ToastRadix.Viewport className="ToastViewport" />
			</ToastRadix.Provider>
		)
	},
}
