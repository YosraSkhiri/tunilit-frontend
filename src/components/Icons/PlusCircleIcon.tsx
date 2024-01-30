import classNames from 'classnames'
import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const PlusCircleIcon = ({
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
        d="M14.9998 8.74997V21.25M8.74976 15H21.2498M26.2498 15C26.2498 21.2132 21.213 26.25 14.9998 26.25C8.78655 26.25 3.74976 21.2132 3.74976 15C3.74976 8.78677 8.78655 3.74997 14.9998 3.74997C21.213 3.74997 26.2498 8.78677 26.2498 15Z"
      />
    </svg>
  )
}

PlusCircleIcon.displayName = 'PlusCircleIcon'

export default PlusCircleIcon
