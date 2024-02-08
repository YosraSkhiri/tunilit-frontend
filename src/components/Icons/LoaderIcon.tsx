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
    <svg className={iconClass} width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round" 
        strokeLinejoin="round"
        d="M16 0.999999C18.9667 0.999999 21.8668 1.87973 24.3336 3.52796C26.8003 5.17618 28.7229 7.51886 29.8582 10.2597C30.9935 13.0006 31.2906 16.0166 30.7118 18.9264C30.133 21.8361 28.7044 24.5088 26.6066 26.6066C24.5088 28.7044 21.8361 30.133 18.9264 30.7118C16.0166 31.2906 13.0006 30.9935 10.2597 29.8582C7.51886 28.7229 5.17618 26.8003 3.52796 24.3336C1.87973 21.8668 1 18.9667 1 16" 
      />
    </svg>
  )
}

LoaderIcon.displayName = 'LoaderIcon'

export default LoaderIcon
