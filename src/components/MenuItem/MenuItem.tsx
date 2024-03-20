import { useFloatingTree, useListItem, useMergeRefs } from '@floating-ui/react'
import * as React from 'react'

import MenuContext from '../MenuContext'
import MenuItemContent from '../MenuItemContent'
import MenuItemProps from './MenuItem.types'

const MenuItem = React.forwardRef<
	HTMLButtonElement,
	MenuItemProps & React.ButtonHTMLAttributes<HTMLButtonElement>
>(
	(
		{
			buttonBaseProps,
      children,
			disabled = false,
			label,
			leftAdorn: LeftAdorn,
			rightAdorn: RightAdorn,
			typographyProps,
			...props
		},
		forwardedRef
	) => {
		const menu = React.useContext(MenuContext)
		const item = useListItem({ label: disabled ? null : label })
		const tree = useFloatingTree()
		const isActive = item.index === menu.activeIndex

    return (
	<MenuItemContent
		buttonBaseProps={buttonBaseProps}
		{ ...(LeftAdorn && typeof LeftAdorn !== 'string' && {
      renderLeftAdorn: (props) => (<LeftAdorn {...props} />)
    })}
		{ ...(RightAdorn && {
      renderRightAdorn: (props) => (<RightAdorn {...props} />)
    })}
		typographyProps={typographyProps}
		{...{
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
      }}
      {...props}
      >
		{children}
	</MenuItemContent>
    )
	}
)

export default MenuItem
