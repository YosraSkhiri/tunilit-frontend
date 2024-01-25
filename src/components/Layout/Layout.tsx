import classNames from 'classnames'
import styles from './Layout.module.scss'
import LayoutProps from './Layout.types'

const Layout = ({
  component: Component = 'div',
  children,
  dir = 'row',
  type = 'flex',
  rowGap = 'md',
  columnGap = 'md',
  gap = 'md',
  flexWrap,
  center = false,
}: LayoutProps) => {
  const layoutClass = classNames({
    [styles[type]]: true,
    [styles[`flex--${dir}`]]: type === 'flex',
    [styles[`flex--${flexWrap}`]]: flexWrap,
    [styles[`gap--${gap}`]]: gap,
    [styles[`gap--row-${rowGap}`]]: rowGap,
    [styles[`gap--col-${columnGap}`]]: columnGap,
    [styles['center']]: center,
  })

  return (
    <Component 
      className={layoutClass}
    >
      {children}
    </Component>
  )
}

export default Layout
