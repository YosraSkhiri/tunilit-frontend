import { forwardRef } from 'react'
import ButtonBaseProps from './ButtonBase.types'

const ButtonBase = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonBaseProps>((
  {
    component: Component = 'button',
    children,
    disabled,
    onClick,
    onFocus,
    onBlur,
    href,
    type,
    className,
    ...other
  },
  ref,
) => {
  return (
    <Component
      className={className}
      disabled={disabled}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      ref={ref}
      {...(href && { href: href })}
      {...((type && Component === 'button') && { type: type })}
      {...other}
    >
      {children}
    </Component>
  )
})

ButtonBase.displayName = 'ButtonBase'

export default ButtonBase
