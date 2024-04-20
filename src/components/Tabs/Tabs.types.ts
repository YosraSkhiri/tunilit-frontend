import { ReactNode } from 'react'

export default interface TabsProps {
  children: ReactNode,
  defaultIndex?: number,
  onChange?: (index: number) => void,
  showScrollButtons?: boolean,
  tabs: Array<string>
}
