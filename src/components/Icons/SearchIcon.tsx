import classNames from 'classnames'
import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const SearchIcon = ({
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
        d="M25 25L19.7541 19.7541M22.5 13.125C22.5 7.94733 18.3027 3.75 13.125 3.75C7.94733 3.75 3.75 7.94733 3.75 13.125C3.75 18.3027 7.94733 22.5 13.125 22.5C18.3027 22.5 22.5 18.3027 22.5 13.125Z" 
      />
    </svg>
  )
}

export default SearchIcon
