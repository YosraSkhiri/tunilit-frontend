import classNames from 'classnames'
import styles from './HelperText.module.scss'
import HelperTextProps from './HelperText.types.ts'

const HelperText = ({children, variant}: HelperTextProps) => {
  const helperTextClass = classNames({
    [styles['helper-text']]: true,
    [styles[`helper-text--${variant}`]]: variant,
  })

  return (
    <p className={helperTextClass}>
      {children}
    </p>
  )
}

export default HelperText
