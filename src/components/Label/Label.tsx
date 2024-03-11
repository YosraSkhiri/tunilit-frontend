import * as LabelRadix from '@radix-ui/react-label'
import clsx from 'clsx'

import styles from './Label.module.scss'
import LabelProps from './Label.types'

const Label = ({
  children,
  disabled,
  htmlFor,
  required,
  variant,
  ...other
}: LabelProps) => {
  const labelClass = clsx({
    [styles['label']]: true,
    [styles[`label--${variant}`]]: variant && !disabled,
    [styles['label--disabled']]: disabled,
  })

  return(
    <LabelRadix.Root 
      className={labelClass} 
      htmlFor={htmlFor} 
      {...other}
    >
      {children} {required && '*'}
    </LabelRadix.Root>
  )
}

export default Label
