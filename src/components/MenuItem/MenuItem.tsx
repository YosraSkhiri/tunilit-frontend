import { useFloatingTree, useListItem, useMergeRefs } from '@floating-ui/react'
import * as React from 'react'
import clsx from 'clsx'
import styles from './MenuItem.module.scss'
import MenuContext from '../MenuContext'
import { cloneElement } from 'react'
import ButtonBase from '../ButtonBase'
import Layout from '../Layout'
import Typography from '../Typography'
import ChevronSmallRightIcon from '../Icons/ChevronSmallRightIcon'
import MenuItemProps from './MenuItem.types'

const MenuItem = React.forwardRef<
	HTMLButtonElement,
	MenuItemProps & React.ButtonHTMLAttributes<HTMLButtonElement>
>(
	(
		{
			label,
			size = 'md',
			adorn,
			selected = false,
			disabled = false,
			children,
			typographyProps,
			buttonBaseProps,
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
									variant="body3"
									className={styles['menu-item__text']}
									{...typographyProps}>
									{children}
								</Typography>
							) : (
								children
							)}
						</div>
					</Layout>
					<ChevronSmallRightIcon classname={styles['menu-item__right-adorn']} />
				</Layout>
			</ButtonBase>
		)
	}
)

export default MenuItem
