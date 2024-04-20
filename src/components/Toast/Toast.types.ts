import { Dispatch, ReactElement, SetStateAction } from 'react'

import LinkProps from '../Link/Link.types'

export default interface ToastProps {
  adorn?: ReactElement,
	closeToast?: never,
	linkProps?: LinkProps,
	message: string,
  onOpenChange: Dispatch<SetStateAction<boolean>>,
  open: boolean,
  title?: string,
}
