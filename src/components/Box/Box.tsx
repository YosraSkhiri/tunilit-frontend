"use client"
import clsx from 'clsx'

import styles from './Box.module.scss'
import BoxProps from './Box.types.ts'

const Box = ({
  children,
  className,
}: BoxProps) => {
  const boxClass = clsx({
    [styles.box]: true,
  }, className)
  
  return (
    <div className={boxClass}>
      {children}
    </div>
  )
}

export default Box
