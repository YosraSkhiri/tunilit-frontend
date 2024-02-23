import { FloatingTree, useFloatingParentNodeId } from '@floating-ui/react'
import MenuContent from '../MenuContent'
import { forwardRef } from 'react'
import MenuProps from './Menu.types'

const Menu = forwardRef<
	HTMLButtonElement,
	MenuProps & React.HTMLProps<HTMLButtonElement>
>((props, ref) => {

  const parentId = useFloatingParentNodeId();

  if (parentId === null) {
    return (
      <FloatingTree>
        <MenuContent
          {...props}
          ref={ref}
        />
      </FloatingTree>
    )
  }

  return <MenuContent {...props} ref={ref} />;
	
})

export default Menu
