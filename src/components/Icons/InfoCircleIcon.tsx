import classNames from 'classnames'
import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const InfoCircleIcon = ({
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
        d="M15 8.76249V8.75M15 21.25L15 12.5M26.25 15C26.25 21.2132 21.2132 26.25 15 26.25C8.7868 26.25 3.75 21.2132 3.75 15C3.75 8.7868 8.7868 3.75 15 3.75C21.2132 3.75 26.25 8.7868 26.25 15Z" 
      />
    </svg>
  )
}

InfoCircleIcon.displayName = 'InfoCircleIcon'

export default InfoCircleIcon
