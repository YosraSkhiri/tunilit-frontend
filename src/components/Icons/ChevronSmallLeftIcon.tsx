import classNames from 'classnames'
import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const ChevronSmallLeftIcon = ({
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
        d="M17.5 8.75L11.25 15L17.5 21.25"
      />
    </svg>
  )
}

ChevronSmallLeftIcon.displayName = 'ChevronSmallLeftIcon'

export default ChevronSmallLeftIcon
