"use client"
import * as LabelRadix from '@radix-ui/react-label'
import clsx from 'clsx'
import { forwardRef } from 'react'

import styles from './Label.module.scss'
import LabelProps from './Label.types'

const Label = forwardRef<HTMLLabelElement, LabelProps>(({
  children,
  disabled,
  htmlFor,
  required,
  variant,
  ...other
}, ref) => {
  const labelClass = clsx({
    [styles['label']]: true,
    [styles[`label--${variant}`]]: variant && !disabled,
    [styles['label--disabled']]: disabled,
  })

  return(
    <LabelRadix.Root 
      className={labelClass} 
      htmlFor={htmlFor}
      ref={ref}
      {...other}
    >
      {children} {required && '*'}
    </LabelRadix.Root>
  )
})

export default Label
