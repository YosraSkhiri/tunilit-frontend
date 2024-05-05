import clsx from 'clsx'
import { forwardRef, useEffect, useRef } from 'react'

import { mergeRefs } from '../../utils'
import styles from './MenuItemsWrapper.module.scss'
import MenuItemsWrapperProps from './MenuItemsWrapper.types'

let didRunOnce = false;

const MenuItemsWrapper = forwardRef<HTMLDivElement, MenuItemsWrapperProps>(({
  children,
  className,
  cornerRadius,
  fullWidth = false,
  maxWidth = true,
  ...other
}, ref) => {
  const menuRef = useRef<HTMLDivElement>(null)
  const menuWrappperRef = useRef<HTMLDivElement>(null)
  
  const menuWrapperClass = clsx({
    [styles['menu-wrapper']]: true,
    [styles['menu-wrapper--maxWidth']]: maxWidth,
    [styles['menu-wrapper--fullWidth']]: fullWidth,
    [styles[`menu-wrapper--${cornerRadius}`]]: cornerRadius,
  }, className)

  const menuClass = clsx({
    [styles.menu]: true,
  })

  const updateMenuClass = () => {
    if (menuRef.current && menuWrappperRef.current) {
      const shouldUsePClass = menuRef.current.scrollHeight > menuRef.current.clientHeight
      menuRef.current.classList.toggle(styles['menu--pr'], shouldUsePClass)
      menuRef.current.classList.toggle(styles['menu-wrapper--pr'], shouldUsePClass)
    }
  }

  useEffect(() => {
    if (!didRunOnce) {
      didRunOnce = true;
      updateMenuClass()
    }
  }, [])

  return (
	<div
		className={menuWrapperClass}
    ref={mergeRefs(ref, menuWrappperRef)}
		{...other}
    >
		<div 
      className={menuClass} 
      ref={menuRef}
    >
      {children}
    </div>
	</div>
  )
})

export default MenuItemsWrapper
