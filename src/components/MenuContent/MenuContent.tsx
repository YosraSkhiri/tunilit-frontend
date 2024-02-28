import {
	autoUpdate,
	flip,
	FloatingFocusManager,
	FloatingList,
	FloatingNode,
	FloatingPortal,
	offset,
	safePolygon,
	shift,
	useClick,
	useDismiss,
	useFloating,
	useFloatingNodeId,
	useFloatingParentNodeId,
	useFloatingTree,
	useHover,
	useInteractions,
	useListItem,
	useListNavigation,
	useMergeRefs,
	useRole,
	useTypeahead,
} from '@floating-ui/react'
import clsx from 'clsx'
import { forwardRef, useContext, useEffect, useRef, useState } from 'react'

import MenuProps from '../Menu/Menu.types'
import MenuContext from '../MenuContext'
import styles from './MenuContent.module.scss'

const MenuContent = forwardRef<
	HTMLButtonElement,
	MenuProps & React.HTMLProps<HTMLButtonElement>
>(
	(
		{ children, cornerRadius = 10, renderMenuTrigger, ...props },
		forwardedRef
	) => {
		const [isOpen, setIsOpen] = useState(false)
		const [hasFocusInside, setHasFocusInside] = useState(false)
		const [activeIndex, setActiveIndex] = useState<number | null>(null)

		const elementsRef = useRef<Array<HTMLButtonElement | null>>([])
		const labelsRef = useRef<Array<string | null>>([])
		const parent = useContext(MenuContext)

		const tree = useFloatingTree()
		const nodeId = useFloatingNodeId()
		const parentId = useFloatingParentNodeId()
		const item = useListItem()

		const menuWrapperClass = clsx({
			[styles['menu-wrapper']]: true,
			[styles[`menu-wrapper--${cornerRadius}`]]: cornerRadius,
		})

		const { context, floatingStyles, refs } = useFloating<HTMLButtonElement>({
			nodeId,
			open: isOpen,
			onOpenChange: setIsOpen,
			placement: 'bottom-start',
			middleware: [offset({ mainAxis: 10, alignmentAxis: 0 }), flip(), shift()],
			whileElementsMounted: autoUpdate,
		})

		const hover = useHover(context, {
			enabled: false,
			delay: { open: 75 },
			handleClose: safePolygon({ blockPointerEvents: true }),
		})
		const click = useClick(context, {
			event: 'mousedown',
			toggle: true,
			ignoreMouse: false,
		})
		const role = useRole(context, { role: 'menu' })
		const dismiss = useDismiss(context, { bubbles: true })
		const listNavigation = useListNavigation(context, {
			listRef: elementsRef,
			activeIndex,
			nested: false,
			onNavigate: setActiveIndex,
		})
		const typeahead = useTypeahead(context, {
			listRef: labelsRef,
			onMatch: isOpen ? setActiveIndex : undefined,
			activeIndex,
		})

		const { getFloatingProps, getItemProps, getReferenceProps } =
			useInteractions([hover, click, role, dismiss, listNavigation, typeahead])

		// Event emitter allows you to communicate across tree components.
		// This effect closes all menus when an item gets clicked anywhere
		// in the tree.
		useEffect(() => {
			if (!tree) return

			function handleTreeClick() {
				setIsOpen(false)
			}

			function onSubMenuOpen(event: { nodeId: string; parentId: string }) {
				if (event.nodeId !== nodeId && event.parentId === parentId) {
					setIsOpen(false)
				}
			}

			tree.events.on('click', handleTreeClick)
			tree.events.on('menuopen', onSubMenuOpen)

			return () => {
				tree.events.off('click', handleTreeClick)
				tree.events.off('menuopen', onSubMenuOpen)
			}
		}, [tree, nodeId, parentId])

		useEffect(() => {
			if (isOpen && tree) {
				tree.events.emit('menuopen', { parentId, nodeId })
			}
		}, [tree, isOpen, nodeId, parentId])

		return (
			<FloatingNode id={nodeId}>
				{renderMenuTrigger({
					ref: useMergeRefs([refs.setReference, item.ref, forwardedRef]),
					tabIndex: parent.activeIndex === item.index ? 0 : -1,
					['data-open']: isOpen ? '' : undefined,
					['data-focus-inside']: hasFocusInside ? '' : undefined,
					...getReferenceProps(
						parent.getItemProps({
							...props,
							onFocus(event: React.FocusEvent<HTMLButtonElement>) {
								props.onFocus?.(event)
								setHasFocusInside(false)
								parent.setHasFocusInside(true)
							},
						})
					),
				})}

				<MenuContext.Provider
					value={{
						activeIndex,
						setActiveIndex,
						getItemProps,
						setHasFocusInside,
						isOpen,
					}}>
					<FloatingList
						elementsRef={elementsRef}
						labelsRef={labelsRef}>
						{isOpen && (
							<FloatingPortal>
								<FloatingFocusManager
									context={context}
									initialFocus={0}
									modal={false}
									returnFocus={true}>
									<div
										className={menuWrapperClass}
										ref={refs.setFloating}
										style={floatingStyles}
										{...getFloatingProps()}>
										<div className={styles.menu}>{children}</div>
									</div>
								</FloatingFocusManager>
							</FloatingPortal>
						)}
					</FloatingList>
				</MenuContext.Provider>
			</FloatingNode>
		)
	}
)

export default MenuContent
