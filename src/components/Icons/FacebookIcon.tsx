import classNames from 'classnames'
import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const FacebookIcon = ({
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
        d="M27.5 15C27.5 8.09643 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09643 2.5 15C2.5 21.2391 7.07107 26.4104 13.0469 27.3481V18.6133H9.87305V15H13.0469V12.2461C13.0469 9.11328 14.913 7.38281 17.7683 7.38281C19.1359 7.38281 20.5664 7.62695 20.5664 7.62695V10.7031H18.9902C17.4374 10.7031 16.9531 11.6667 16.9531 12.6552V15H20.4199L19.8657 18.6133H16.9531V27.3481C22.9289 26.4104 27.5 21.2391 27.5 15Z" 
      />
    </svg>
  )
}

export default FacebookIcon
