"use client"
import { useContext } from 'react'

import TooltipContext from './TooltipContext'

export const useTooltipContext = () => {
  const context = useContext(TooltipContext)

  if (context == null) {
    throw new Error("Tooltip components must be wrapped in <Tooltip />")
  }

  return context
}
