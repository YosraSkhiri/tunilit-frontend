import { useFloatingTree, useListItem, useMergeRefs } from '@floating-ui/react'
import * as React from 'react'
import { ReactElement } from 'react'

import MenuContext from '../MenuContext'

interface MenuItemProps {
	disabled?: boolean,
	label: string,
	renderMenuItem: (props: object) => ReactElement
}

const MenuItemWrapper = React.forwardRef<
	HTMLButtonElement,
	MenuItemProps & React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ disabled, label, renderMenuItem, ...props }, forwardedRef) => {
	const menu = React.useContext(MenuContext)
	const item = useListItem({ label: disabled ? null : label })
	const tree = useFloatingTree()
	const isActive = item.index === menu.activeIndex

  return (
    renderMenuItem({
      ref: useMergeRefs([item.ref, forwardedRef]),
      type: 'button',
      role: 'menuitem',
      tabIndex: isActive ? 0 : -1,
      disabled: disabled,
      ...menu.getItemProps({
        onClick(event: React.MouseEvent<HTMLButtonElement>) {
          props.onClick?.(event)
          tree?.events.emit('click')
        },
        onFocus(event: React.FocusEvent<HTMLButtonElement>) {
          props.onFocus?.(event)
          menu.setHasFocusInside(true)
        },
      }),
    })
  )
})

export default MenuItemWrapper
