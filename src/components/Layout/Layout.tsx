"use client"
import clsx from 'clsx'
import { forwardRef } from 'react'

import styles from './Layout.module.scss'
import LayoutProps from './Layout.types'

const Layout = forwardRef<HTMLElement, LayoutProps>(({
  center = false,
  children,
  className,
  component: Component = 'div',
  direction = 'row',
  flexWrap,
  style,
  type = 'flex',
}, ref) => {
  const layoutClass = clsx({
    [styles[type]]: true,
    [styles[`flex--${direction}`]]: type === 'flex' && direction,
    [styles[`flex--${flexWrap}`]]: type === 'flex' && flexWrap,
    [styles['center']]: center,
  }, className)

  return (
    <Component 
      className={layoutClass}
      ref={ref}
      style={style}
    >
      {children}
    </Component>
  )
}) 

export default Layout
