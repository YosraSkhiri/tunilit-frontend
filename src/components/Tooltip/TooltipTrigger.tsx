"use client"
import { useMergeRefs } from '@floating-ui/react'
import { cloneElement, forwardRef, isValidElement } from 'react'

import { useTooltipContext } from './useTooltipContext'

export const TooltipTrigger = forwardRef<
  HTMLElement,
  React.HTMLProps<HTMLElement> & { asChild?: boolean }
>(function TooltipTrigger({ asChild = false, children, ...props }, propRef) {
  const context = useTooltipContext()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const childrenRef = (children as any).ref
  const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef])

  // `asChild` allows the user to pass any element as the anchor
  if (asChild && isValidElement(children)) {
    return cloneElement(
      children,
      context.getReferenceProps({
        ref,
        ...props,
        ...children.props,
        "data-state": context.open ? "open" : "closed"
      })
    )
  }

  return (
    <div
      // The user can style the trigger based on the state
      data-state={context.open ? "open" : "closed"}
      data-testid='tooltip-trigger'
      ref={ref}
      style={{width: 'fit-content'}}
      {...context.getReferenceProps(props)}
    >
      {children}
    </div>
  )
})
