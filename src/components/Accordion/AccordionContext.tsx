import { createContext } from 'react'

interface AccordionContextType {
  isExpanded?: boolean,
}

const defaultValue: AccordionContextType = {}

export const AccordionContext = createContext(defaultValue)
