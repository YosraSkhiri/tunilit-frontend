import { Meta, StoryObj } from '@storybook/react'
import ToastContent from './ToastContent'
import { Slide, ToastContainer, toast } from 'react-toastify'
import '../../sass/react-toastify/main.scss'
import Button from '../Button'
import { CompareIcon } from '../Icons'

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
					limit={1}
					autoClose={false}
					hideProgressBar={true}
					position="bottom-left"
					closeButton={false}
					transition={Slide}
				/>
			</div>
		)
	},
}
