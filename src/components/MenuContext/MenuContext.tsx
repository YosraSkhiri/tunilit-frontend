import { createContext } from 'react'

const MenuContext = createContext<{
	getItemProps: (
		userProps?: React.HTMLProps<HTMLElement>
	) => Record<string, unknown>
	activeIndex: number | null
	setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>
	setHasFocusInside: React.Dispatch<React.SetStateAction<boolean>>
	isOpen: boolean
}>({
	getItemProps: () => ({}),
	activeIndex: null,
	setActiveIndex: () => {},
	setHasFocusInside: () => {},
	isOpen: false,
})

export default MenuContext