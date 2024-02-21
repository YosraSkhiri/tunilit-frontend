import { ReactElement } from 'react'
import LinkProps from '../Link/Link.types'

export default interface ToastContentProps {
	closeToast?: never
	adorn?: ReactElement
	message: string
	linkProps: LinkProps,
}
