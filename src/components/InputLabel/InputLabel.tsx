import clsx from 'clsx'

import styles from './InputLabel.module.scss'
import InputLabelProps from './InputLabel.types'

const InputLabel = ({
  children,
  disabled,
  htmlFor,
  variant,
  ...other
}: InputLabelProps) => {
  const labelClass = clsx({
    [styles['label']]: true,
    [styles[`label--${variant}`]]: variant && !disabled,
    [styles['label--disabled']]: disabled,
  })

  return(
    <label 
      className={labelClass} 
      htmlFor={htmlFor} 
      {...other}
    >
      {children}
    </label>
  )
}

export default InputLabel
