import classNames from 'classnames'
import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const GlobeIcon = ({
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
        d="M26.2499 15C26.2499 21.2132 21.2131 26.25 14.9999 26.25M26.2499 15C26.2499 8.78684 21.2131 3.75004 14.9999 3.75004M26.2499 15H3.74988M14.9999 26.25C8.78667 26.25 3.74988 21.2132 3.74988 15M14.9999 26.25C14.9999 26.25 19.9999 22.5 19.9999 15C19.9999 7.50004 14.9999 3.75004 14.9999 3.75004M14.9999 26.25C14.9999 26.25 9.99988 22.5 9.99988 15C9.99988 7.50004 14.9999 3.75004 14.9999 3.75004M3.74988 15C3.74988 8.78684 8.78667 3.75004 14.9999 3.75004" 
      />
    </svg>
  )
}

GlobeIcon.displayName = 'GlobeIcon'

export default GlobeIcon
