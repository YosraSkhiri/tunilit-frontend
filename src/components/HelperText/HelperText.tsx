"use client"
import clsx from 'clsx'

import styles from './HelperText.module.scss'
import HelperTextProps from './HelperText.types.ts'

const HelperText = ({children, disabled, variant}: HelperTextProps) => {
  const helperTextClass = clsx({
    [styles['helper-text']]: true,
    [styles[`helper-text--${variant}`]]: !disabled && variant,
    [styles['helper-text--disabled']]: disabled,
  })

  return (
    <p className={helperTextClass}>
      {children}
    </p>
  )
}

export default HelperText
