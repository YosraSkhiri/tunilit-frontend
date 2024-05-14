import { FloatingPortal, useMergeRefs } from '@floating-ui/react'
import { forwardRef } from 'react'

import Typography from '../Typography'
import styles from './Tooltip.module.scss'
import { useTooltipContext } from './useTooltipContext'

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
        style={{
          ...context.floatingStyles,
          ...style
        }}
        className={styles['tooltip']}
        data-testid='tooltip-content'
        ref={ref}
        {...context.getFloatingProps(otherProps)}
      >
        <Typography className={styles['tooltip__text']} variant='body3'>
          {children}
        </Typography>
      </div>
    </FloatingPortal>
  )
})
