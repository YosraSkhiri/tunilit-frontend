import clsx from 'clsx'
import InputLabelProps from './InputLabel.types'
import styles from './InputLabel.module.scss'

const InputLabel = ({
  children,
  htmlFor,
  variant,
  disabled,
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
