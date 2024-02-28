import { useFloatingTree, useListItem, useMergeRefs } from '@floating-ui/react'
import clsx from 'clsx'
import * as React from 'react'
import { cloneElement } from 'react'

import ButtonBase from '../ButtonBase'
import ChevronSmallRightIcon from '../Icons/ChevronSmallRightIcon'
import Layout from '../Layout'
import MenuContext from '../MenuContext'
import Typography from '../Typography'
import styles from './MenuItem.module.scss'
import MenuItemProps from './MenuItem.types'

const MenuItem = React.forwardRef<
	HTMLButtonElement,
	MenuItemProps & React.ButtonHTMLAttributes<HTMLButtonElement>
>(
	(
		{
			adorn,
			buttonBaseProps,
			children,
			disabled = false,
			label,
			selected = false,
			size = 'md',
			typographyProps,
			...props
		},
		forwardedRef
	) => {
		const menu = React.useContext(MenuContext)
		const item = useListItem({ label: disabled ? null : label })
		const tree = useFloatingTree()
		const isActive = item.index === menu.activeIndex
		const menuItemClass = clsx({
			[styles['menu-item']]: true,
			[styles['menu-item--default']]: !disabled,
			[styles[`menu-item--${size}`]]: size,
			[styles['menu-item--disabled']]: disabled,
			[styles['menu-item--selected']]: !disabled && selected,
		})
		return (
			<ButtonBase
				className={menuItemClass}
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
				{...buttonBaseProps}>
				<Layout classname={styles['menu-item__content']}>
					<Layout classname={styles['menu-item__details']}>
						{adorn &&
							cloneElement(adorn, {
								classname: styles['menu-item__left-adorn'],
							})}
						<div>
							{children && typeof children == 'string' ? (
								<Typography
									className={styles['menu-item__text']}
									variant="body3"
									{...typographyProps}>
									{children}
								</Typography>
							) : (
								children
							)}
						</div>
					</Layout>
					<ChevronSmallRightIcon className={styles['menu-item__right-adorn']} />
				</Layout>
			</ButtonBase>
		)
	}
)

export default MenuItem
