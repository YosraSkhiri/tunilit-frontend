import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  FloatingPortal,
  offset,
  size,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole
} from "@floating-ui/react"
import { MouseEvent, useEffect, useRef, useState } from 'react'

import {ChevronDownIcon,CrossSmallIcon} from '../Icons'
import InputButton from '../InputButton'
import MenuItemContent from '../MenuItemContent'
import MenuItemsWrapper from '../MenuItemsWrapper'
import Tag from '../Tag'
import TextField from '../TextField'
import AutocompleteProps from './Autocomplete.types.ts'
import { OptionType } from './Autocomplete.types.ts'

const Autocomplete = ({
  TextFieldProps,
  clearable = false,
  fullWidth = false,
  id,
  inputValue = '',
  label,
  multiple= false,
  onChange,
  onInputChange,
  options,
	placeholder,
  value,
}: AutocompleteProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const [focus, setFocus] = useState<boolean>(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  useEffect(() => {
    if (open && inputValue === value && !multiple) {
      const selectedItem = listRef.current.filter(item => 
        item?.getAttribute('data-value')?.toLowerCase().trim() === value.toLowerCase().trim()
      )
      // scrollIntoView() doesn't work when called synchronously
      // https://stackoverflow.com/questions/71667401/ref-scrollintoview-does-not-work-with-behavior-smooth-on-react
      setTimeout(() => {selectedItem[0]?.scrollIntoView(false)}, 0) 
    }
  }, [open, inputValue, value, multiple])
  
  const listRef = useRef<Array<HTMLElement | null>>([])
  const { context, floatingStyles, refs } = useFloating<HTMLDivElement>({
    whileElementsMounted: autoUpdate,
    open,
    onOpenChange: setOpen,
    middleware: [
      flip(),
      offset(10),
      size({
        apply({ elements, rects }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
          });
        },
      }),
    ]
  });
  const role = useRole(context, { role: "listbox" })
  const dismiss = useDismiss(context)
  const listNav = useListNavigation(context, {
    listRef,
    activeIndex,
    onNavigate: setActiveIndex,
    virtual: true,
    loop: true,
  })
  const {
    getFloatingProps,
    getItemProps,
    getReferenceProps,
  } = useInteractions([role, dismiss, listNav])

  const handleClearInput = (e?: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e?.stopPropagation()
    const resetValue =  multiple ? [] : ''
    onInputChange && onInputChange(e, '')
    onChange && onChange(e, resetValue)
  }

  const showClearable = () => (
    (clearable && value && value.length > 0 && (focus || open)) && 
	<InputButton onClick={handleClearInput}>
		<CrossSmallIcon size='md' />
	</InputButton>
  )

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    onInputChange && onInputChange(event, value)

    if (value) {
      setOpen(true)
      setActiveIndex(0)
    } else {
      setOpen(false)
    }
  }

  const items = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const filteredOptions = options?.filter((item: string | {[key: string]: any, label: string}) => {
      if (typeof item === 'string') 
        return item.toLowerCase().startsWith(inputValue.toLowerCase())
      else 
        return item.label.toLowerCase().startsWith(inputValue.toLowerCase())
    })

    if (
      filteredOptions 
      && filteredOptions?.length <= 0
      && inputValue !== ''
      && inputValue !== value
    ) {
      return ([])
    } else {
      if (inputValue === value) {
        return options
      } else {
        return filteredOptions
      }
    }
  }

  const removeTag = (e?: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const valueToRemove = e?.currentTarget.getAttribute('data-value')
    const arr = value && typeof value === "object" && value.filter((v: string) => v !== valueToRemove)
    if (arr) onChange && onChange(undefined, arr)
  }

  const displayTags = () => {
    if(value && typeof value === 'object') return value?.map((v: string, i: number) => (
      <Tag data-value={v} key={`${id}-option-${i}`} onClick={removeTag}>{v}</Tag>
    ))
  }

  const isSelected = (inputValue: string, item: string | OptionType): boolean => {
    const itemVal = typeof item === 'string' ? item : item.label
    if(value && multiple) {
      return value?.includes(itemVal)
    } 
    return inputValue === itemVal
  }

  const displayOptions = () => {
    const listOption = items()

    if (listOption && listOption?.length > 0) {
      return listOption.map((item, index: number) => (
        <MenuItemContent
          key={`${id}-${index}`}
          selected={isSelected(inputValue, item)}
          size='sm'
          {...getItemProps({
            ref(node) {
              listRef.current[index] = node
            },
            onClick() {
              const clickedOption = typeof item === 'string' ? item : item.label
              if (value) {
                if (multiple && typeof value === 'object') {
                  if( value.includes(clickedOption)) {
                    const arr = value.filter((v: string) => v !== clickedOption)
                    onInputChange(undefined, '')
                    onChange && onChange(undefined, arr)
                  } else {
                    const arr = value
                    arr.push(clickedOption)
                    onInputChange(undefined, '')
                    onChange && onChange(undefined, arr)
                  }
                  
                } else {
                  if (value === clickedOption) {
                    onInputChange(undefined, '')
                    onChange && onChange(undefined, '')
                  } else {
                    onInputChange(undefined, clickedOption)
                    onChange && onChange(undefined, clickedOption)
                  }
                }
              }
              
              setOpen(false)
              refs.domReference.current?.focus()
            },
          })}
          buttonBaseProps={{
            ['data-value']: (typeof item === 'string' ? item : item.label),
            active: `${activeIndex === index}`,
            id: `${id}-${index}`,
          }}
        >
          {typeof item === 'string' ? item : item.label}
        </MenuItemContent>
      ))
    }
  }

  return (
	<>
		<TextField 
			endAdornment={
				<>
					{showClearable()} 
					<InputButton>
						<ChevronDownIcon size='md' />
					</InputButton>
				</>
        }
			floatingUIProps={getReferenceProps({
			onChange: handleOnChange,
			value: inputValue,
			"aria-autocomplete": "list",
			onFocus() {
        setFocus(true)
				setOpen(true)
			},
			onBlur() {
        setFocus(false)
			},
			onClick() {
				setOpen(true)
			}
		})}
			startAdornment={
				<>
					{multiple && displayTags()}
				</>
        }
			
			autoComplete='off'
			fullWidth={fullWidth}
			id={id}
			label={label}
			placeholder={placeholder}
			ref={refs.setReference}
      spellCheck={false}
      {...TextFieldProps}
      />
		<FloatingPortal>
			{open && (
				<FloatingFocusManager
					visuallyHiddenDismiss
					context={context}
					initialFocus={-1}
      >
					<MenuItemsWrapper
						maxWidth={false}
						{...getFloatingProps({
            ref: refs.setFloating,
            style: {
              ...floatingStyles,
            }
          })}
						cornerRadius={10}
          >
						{displayOptions()}
					</MenuItemsWrapper>
				</FloatingFocusManager>
      )}
		</FloatingPortal>
	</>
    
  )
}

export default Autocomplete
