import { ReactElement } from 'react'

import LinkProps from '../Link/Link.types'

export default interface ToastContentProps {
	adorn?: ReactElement,
	closeToast?: never,
	linkProps: LinkProps,
	message: string
}
