"use client"
import clsx from 'clsx'

import styles from './Chip.module.scss'
import ChipProps from './Chip.types.ts'

const Chip = ({ backgroundColor, children, color, href, size = 'md' }: ChipProps) => {
  const chipClass = clsx({
    [styles['chip']]: true,
    [styles[`chip--${size}`]]: size,
  })

  return (
    <a
      style={{
        backgroundColor: backgroundColor,
        color: color,
        borderColor: color
      }}
      className={chipClass}
      href={href}
    >
      {children}
    </a>
  )
}

export default Chip
