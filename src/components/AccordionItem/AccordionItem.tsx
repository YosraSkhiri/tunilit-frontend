import * as AccordionRadix from '@radix-ui/react-accordion'

import styles from './AccordionItem.module.scss';
import AccordionItemProps from './AccordionItem.types.ts'

const AccordionItem = ({ children, value }: AccordionItemProps) => {
  return (
    <AccordionRadix.Item 
      className={styles['accordion-item']} 
      value={value}
    >
      {children}
    </AccordionRadix.Item>
  )
}

export default AccordionItem
