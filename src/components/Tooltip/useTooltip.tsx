import {
  autoUpdate,
  flip,
  offset,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from "@floating-ui/react"
import { useMemo, useState } from 'react'

import TooltipOptions from './Tooltip.types'

export function useTooltip({
  initialOpen = false,
  onOpenChange: setControlledOpen,
  open: controlledOpen,
  placement = "top"
}: TooltipOptions = {}) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(initialOpen)

  const open = controlledOpen ?? uncontrolledOpen
  const setOpen = setControlledOpen ?? setUncontrolledOpen

  const data = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(10),
      flip({
        crossAxis: placement.includes("-"),
        fallbackAxisSideDirection: "start",
        padding: 5
      }),
      shift({ padding: 5 })
    ]
  })

  const context = data.context

  const hover = useHover(context, {
    move: false,
    enabled: controlledOpen == null
  })
  const focus = useFocus(context, {
    enabled: controlledOpen == null
  })
  const dismiss = useDismiss(context)
  const role = useRole(context, { role: "tooltip" })

  const interactions = useInteractions([hover, focus, dismiss, role])

  return useMemo(
    () => ({
      open,
      setOpen,
      ...interactions,
      ...data
    }),
    [open, setOpen, interactions, data]
  )
}
