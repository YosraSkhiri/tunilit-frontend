import classNames from 'classnames'
import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const LanguagesIcon = ({
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
        d="M3 5.95001H9.6M9.6 5.95001V2.95001M9.6 5.95001H15.6M15.6 5.95001H18.6M15.6 5.95001C14.9652 8.36238 13.1535 12.7414 9.95021 16.7232M9.95021 16.7232C8.10759 19.0136 5.80449 21.1725 3 22.75M9.95021 16.7232C8.17534 14.6874 6.72023 12.5504 6 11.35M9.95021 16.7232C11.1325 18.0793 12.4567 19.3905 13.8 20.35M17.3182 23.35L21 14.35L25.2 23.35M17.3182 23.35L15.6 27.55M17.3182 23.35H25.2M25.2 23.35L27 27.55" 
      />
    </svg>
  )
}

LanguagesIcon.displayName = 'LanguagesIcon'

export default LanguagesIcon
