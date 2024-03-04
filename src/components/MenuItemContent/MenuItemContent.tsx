import clsx from 'clsx'
import * as React from 'react'

import ButtonBase from '../ButtonBase'
import Layout from '../Layout'
import Typography from '../Typography'
import styles from './MenuItemContent.module.scss'
import MenuItemProps from './MenuItemContent.types.ts'

const MenuItemContent = React.forwardRef<
	HTMLButtonElement,
	MenuItemProps 
>(
	(
		{
			buttonBaseProps,
      children,
			disabled = false,
			renderLeftAdorn,
			renderRightAdorn,
			selected = false,
      size = 'md',
      typographyProps,
			...props
		},
		ref
	) => {
		const menuItemClass = clsx({
			[styles['menu-item']]: true,
			[styles['menu-item--default']]: !disabled && !selected,
			[styles[`menu-item--${size}`]]: size,
			[styles['menu-item--disabled']]: disabled,
			[styles['menu-item--selected']]: !disabled && selected,
		})
		return (
			<ButtonBase
				className={menuItemClass}
				ref={ref}
				{...buttonBaseProps}
				{...props}
        >
				<Layout classname={styles['menu-item__content']}>
					<Layout classname={styles['menu-item__details']}>
						{renderLeftAdorn && renderLeftAdorn({
              className: styles['menu-item__left-adorn']
            })
            }
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
					{
            renderRightAdorn && renderRightAdorn({
              className: styles['menu-item__right-adorn']
            })
          }
				</Layout>
			</ButtonBase>
		)
	}
)

export default MenuItemContent
