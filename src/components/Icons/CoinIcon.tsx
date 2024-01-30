import classNames from 'classnames'
import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const CoinIcon = ({
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
        d="M15 20H16.25C17.0833 20 18.75 19.5 18.75 17.5C18.75 15.5 17.0833 15 16.25 15H13.75C12.9167 15 11.25 14.5 11.25 12.5C11.25 10.5 12.9167 10 13.75 10H15M15 20H11.25M15 20V22.5M18.75 10H15M15 10V7.5M26.25 15C26.25 21.2132 21.2132 26.25 15 26.25C8.7868 26.25 3.75 21.2132 3.75 15C3.75 8.7868 8.7868 3.75 15 3.75C21.2132 3.75 26.25 8.7868 26.25 15Z" 
      />
    </svg>
  )
}

CoinIcon.displayName = 'CoinIcon'

export default CoinIcon
