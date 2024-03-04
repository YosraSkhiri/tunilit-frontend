import clsx from 'clsx'
import { forwardRef } from 'react'

import styles from './MenuItemsWrapper.module.scss'
import MenuItemsWrapperProps from './MenuItemsWrapper.types'

const MenuItemsWrapper = forwardRef<HTMLDivElement, MenuItemsWrapperProps>(({
  children,
  cornerRadius,
  fullWidth = false,
  maxWidth = true,
  ...other
}, ref) => {
  const menuWrapperClass = clsx({
    [styles['menu-wrapper']]: true,
    [styles['menu-wrapper--maxWidth']]: maxWidth,
    [styles['menu-wrapper--fullWidth']]: fullWidth,
    [styles[`menu-wrapper--${cornerRadius}`]]: cornerRadius,
  })
  return (
	<div
		className={menuWrapperClass}
		ref={ref}
		{...other}
    >
		<div className={styles.menu}>{children}</div>
	</div>
  )
})

export default MenuItemsWrapper
