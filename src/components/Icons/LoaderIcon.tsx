import classNames from 'classnames'
import styles from './Icon.module.scss'
import IconProps from './Icon.types'

const LoaderIcon = ({
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
    <svg  className={iconClass} width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round" 
        strokeLinejoin="round"
        d="M14.4163 1.00003C17.2537 1.00003 20.0437 1.65855 22.5194 2.91259C24.995 4.16663 27.0736 5.97426 28.5561 8.16255C30.0387 10.3508 30.8757 12.8466 30.9871 15.4111C31.0985 17.9757 30.4805 20.5231 29.1924 22.8099C27.9042 25.0967 25.9889 27.0462 23.6296 28.4721C21.2704 29.8979 18.5461 30.7524 15.7174 30.9538C12.8887 31.1552 10.0502 30.6967 7.4734 29.6222C4.89659 28.5477 2.66769 26.8931 0.999878 24.8168"
      />
    </svg>
  )
}

export default LoaderIcon
