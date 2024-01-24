import classNames from 'classnames'
import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const CrossSmallIcon = ({
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
        d="M19.9999 10L14.9999 15M14.9999 15L9.99988 20M14.9999 15L9.99989 10M14.9999 15L19.9999 20"
      />
    </svg>
  )
}

export default CrossSmallIcon
