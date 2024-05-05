import * as AccordionRadix from '@radix-ui/react-accordion'
import { forwardRef } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Accordion = forwardRef<HTMLDivElement, any>((props, ref) => {
  const {
    asChild, 
    children, 
    collapsible,
    defaultValue,
    dir,
    disabled,
    onValueChange,
    type,
    value,
  } = props

	return (
    <AccordionRadix.Root 
      {...(type === 'single' && {collapsible: collapsible})}
      asChild={asChild}
      defaultValue={defaultValue} 
      dir={dir}
      disabled={disabled}
      ref={ref}
      type={type}
      value={value}
      onValueChange={onValueChange}
    >
      {children}
    </AccordionRadix.Root>		
	)
})

export default Accordion
