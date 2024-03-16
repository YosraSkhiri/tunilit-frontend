/* eslint-disable @typescript-eslint/no-explicit-any */
// TODO: Write tests
import * as AccordionRadix from '@radix-ui/react-accordion'

const Accordion = (props: any) => {
  const { 
    children, 
    collapsible, 
    defaultValue, 
    onValueChange,
    type = 'single',
    value,
  } = props
	return (
		<AccordionRadix.Root 
      collapsible={collapsible} 
      defaultValue={defaultValue}
      type={type} 
      value={value}
      onValueChange={onValueChange}
    >
      {children}
    </AccordionRadix.Root>
	)
}

export default Accordion
