import clsx from 'clsx'
import styles from './Layout.module.scss'
import LayoutProps from './Layout.types'

const Layout = ({
  component: Component = 'div',
  children,
  direction = 'row',
  type = 'flex',
  flexWrap,
  center = false,
  classname,
  style,
}: LayoutProps) => {
  const layoutClass = clsx({
    [styles[type]]: true,
    [styles[`flex--${direction}`]]: type === 'flex' && direction,
    [styles[`flex--${flexWrap}`]]: type === 'flex' && flexWrap,
    [styles['center']]: center,
  }, classname)

  return (
    <Component 
      className={layoutClass}
      style={style}
    >
      {children}
    </Component>
  )
}

export default Layout
