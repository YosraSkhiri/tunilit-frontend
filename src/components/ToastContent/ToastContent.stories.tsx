import '../../sass/react-toastify/main.scss'

import { Meta, StoryObj } from '@storybook/react'
import { Slide, toast,ToastContainer } from 'react-toastify'

import Button from '../Button'
import { CompareIcon } from '../Icons'
import ToastContent from './ToastContent'

const meta: Meta<typeof ToastContent> = {
	component: ToastContent,
}

export default meta

type Story = StoryObj<typeof ToastContent>

export const Overview: Story = {
	args: {
		message: 'Added to your compare list!',
		linkProps: {
			children: 'Visit list',
			underline: true,
			variant: 'subtle',
		},
		adorn: <CompareIcon />,
	},
  
	render: (args) => {
		const handleClick = () => {
			toast(<ToastContent {...args} />)
		}
		return (
			<div>
				<Button onClick={handleClick}>Show Toast!</Button>
				<ToastContainer
					autoClose={false}
					closeButton={false}
					hideProgressBar={true}
					limit={1}
					position="bottom-left"
					transition={Slide}
				/>
			</div>
		)
	},
}
