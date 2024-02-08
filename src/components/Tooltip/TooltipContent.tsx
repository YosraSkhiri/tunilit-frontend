import { FloatingPortal, useMergeRefs } from '@floating-ui/react'
import { forwardRef } from 'react'
import { useTooltipContext } from './useTooltipContext'
import Typography from '../Typography'
import styles from './Tooltip.module.scss'

export const TooltipContent = forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>(function TooltipContent({ style, ...props }, propRef) {
  const context = useTooltipContext()
  const ref = useMergeRefs([context.refs.setFloating, propRef])
  const { children, ...otherProps } = props

  if (!context.open) return null

  return (
    <FloatingPortal>
      <div
        ref={ref}
        className={styles['tooltip']}
        style={{
          ...context.floatingStyles,
          ...style
        }}
        {...context.getFloatingProps(otherProps)}
      >
        <Typography variant='body3' classname={styles['tooltip__text']}>
          {children}
        </Typography>
      </div>
    </FloatingPortal>
  )
})
