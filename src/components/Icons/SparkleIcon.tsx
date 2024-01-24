import classNames from 'classnames'
import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const SparkleIcon = ({
  width,
  height,
  stroke,
  strokeWidth,
  classname,
  size = 'md',
}: IconProps) => {
  const iconClass = classNames({
    [styles['icon']]: true,
    [styles[`icon--${size}`]]: size,
  }, classname)

  return (
    <svg className={iconClass} width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M15 3.75C15 9.9632 20.0368 15 26.25 15C20.0368 15 15 20.0368 15 26.25C15 20.0368 9.9632 15 3.75 15C9.9632 15 15 9.9632 15 3.75Z" 
      />
    </svg>
  )
}

export default SparkleIcon
