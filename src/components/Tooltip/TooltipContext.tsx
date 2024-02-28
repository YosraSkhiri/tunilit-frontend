import { createContext } from 'react'

import { useTooltip } from './useTooltip'

type ContextType = ReturnType<typeof useTooltip> | null

const TooltipContext = createContext<ContextType>(null)

export default TooltipContext
