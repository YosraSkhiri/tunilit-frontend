import classNames from 'classnames'
import InputLabelProps from './InputLabel.types'
import styles from './InputLabel.module.scss'

const InputLabel = ({
  children,
  htmlFor,
  variant,
  disabled,
  ...other
}: InputLabelProps) => {
  const labelClass = classNames({
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
