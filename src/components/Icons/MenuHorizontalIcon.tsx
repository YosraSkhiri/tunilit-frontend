import classNames from 'classnames'
import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const MenuHorizontalIcon = ({
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
        d="M23.7498 16.25C24.4401 16.25 24.9998 15.6904 24.9998 15C24.9998 14.3097 24.4401 13.75 23.7498 13.75C23.0594 13.75 22.4998 14.3097 22.4998 15C22.4998 15.6904 23.0594 16.25 23.7498 16.25Z" 
      />
      <path 
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round" 
        strokeLinejoin="round"
        d="M14.9998 16.25C15.6901 16.25 16.2498 15.6904 16.2498 15C16.2498 14.3097 15.6901 13.75 14.9998 13.75C14.3094 13.75 13.7498 14.3097 13.7498 15C13.7498 15.6904 14.3094 16.25 14.9998 16.25Z" 
      />
      <path 
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round" 
        strokeLinejoin="round"
        d="M6.24976 16.25C6.94011 16.25 7.49976 15.6904 7.49976 15C7.49976 14.3097 6.94011 13.75 6.24976 13.75C5.5594 13.75 4.99976 14.3097 4.99976 15C4.99976 15.6904 5.5594 16.25 6.24976 16.25Z" 
      />
    </svg>
  )
}

export default MenuHorizontalIcon
