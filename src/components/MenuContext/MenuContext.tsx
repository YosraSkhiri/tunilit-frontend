import { createContext } from 'react'

const MenuContext = createContext<{
	activeIndex: number | null,
	getItemProps: (
		userProps?: React.HTMLProps<HTMLElement>
	) => Record<string, unknown>,
	isOpen: boolean,
	setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>,
	setHasFocusInside: React.Dispatch<React.SetStateAction<boolean>>
}>({
	getItemProps: () => ({}),
	activeIndex: null,
	setActiveIndex: () => {},
	setHasFocusInside: () => {},
	isOpen: false,
})

export default MenuContext
