import { Combobox, Transition } from '@headlessui/react'
import { Fragment, MouseEvent } from 'react'

import { ChevronDownIcon, CrossSmallIcon, LoaderIcon } from '../Icons'
import InputButton from '../InputButton'
import MenuItemContent from '../MenuItemContent'
import MenuItemsWrapper from '../MenuItemsWrapper'
import Tag from '../Tag'
import TextField from '../TextField/TextField.tsx'
import styles from './Autocomplete.module.scss'
import AutocompleteProps, { OptionType } from './Autocomplete.types.ts'

const Autocomplete = ({
  clearable = false,
  id,
  inputValue,
  label,
  loading,
  multiple = false,
  options,
  placeholder,
	selectedValue,
  setInputValue,
  setSelectedValue,
}: AutocompleteProps) => {
  const filterOptions = () => {
    return options?.filter((item: string | OptionType) => {
      const itemLabel = typeof item === 'string' ? item : item.name
      return itemLabel.toLowerCase().replace(/\s+/g, '').includes(inputValue.toLowerCase().replace(/\s+/g, ''))
    })
  }

  const displayOptions = () => {
    if (loading) {
      return (
        <Combobox.Option disabled as={Fragment} value="NO_OPTIONS">
          <MenuItemContent disabled={true} size="sm">
            Loading...
          </MenuItemContent>
        </Combobox.Option>
      )
    }
  
    const filteredOptions = filterOptions()
    if (!filteredOptions?.length && inputValue !== '' && inputValue !== selectedValue) {
      return (
        <Combobox.Option disabled as={Fragment} value="NO_OPTIONS">
          <MenuItemContent disabled={true} size="sm">
            No Options
          </MenuItemContent>
        </Combobox.Option>
      )
    } else {
      return filteredOptions?.map((item, index: number) => (
        <Combobox.Option
          as={Fragment}
          data-testid={typeof item === 'string' ? item : item.name}
          key={`${id}-option-${index}`}
          value={typeof item === 'string' ? item : item.name}
        >
          {({ active, selected }) => (
            <MenuItemContent 
              buttonBaseProps={
                {
                  id: 
                  (typeof item === 'object' && item?.id) 
                  ? item?.id 
                  : `${id}-option-${index}` 
                }
              } 
              active={active} 
              selected={selected} 
              size="sm"
            >
              {typeof item === 'string' ? item : item.name}
            </MenuItemContent>
          )}
        </Combobox.Option>
      ))
    }
  }

  const removeTag = (e?: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const valueToRemove = e?.currentTarget.getAttribute('data-value')
    const arr = selectedValue && typeof selectedValue === "object" && selectedValue.filter((v: string) => v !== valueToRemove)
    if (arr) setSelectedValue(arr)
  }

  const displayTags = () => {
    if(selectedValue && typeof selectedValue === 'object') return selectedValue?.map((v: string, i: number) => (
      <Tag data-testid={`tag-${v}`} data-value={v} key={`${id}-tag-${i}`} onClick={removeTag}>{v}</Tag>
    ))
  }

  const handleClearInput = (e?: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e?.stopPropagation()
    const resetValue =  multiple ? [] : ''
    setInputValue('')
    setSelectedValue(resetValue)
  }
  
  const showClearableBtn = () => (
    (clearable && selectedValue && selectedValue?.length > 0) && 
	<InputButton onClick={handleClearInput} >
		<CrossSmallIcon aria-hidden="true" size='md' />
	</InputButton>
  )

  const showLoadingBtn = () => (
    loading && 
	<InputButton disabled>
		<LoaderIcon aria-hidden="true" className={styles['loader--animation']} size='sm' />
	</InputButton>
  )

  return (
    <Combobox 
      multiple={multiple}
      value={selectedValue}
      onChange={setSelectedValue}
    >
      {({ open }) => (
        <div className={styles['ac-container']}>
          <div >
            <Combobox.Input
              fullWidth
              endAdornment={
                <>
                  {showClearableBtn()} 
                  {showLoadingBtn()} 
                  <Combobox.Button as={Fragment} data-testid="showOptionsBtn">
                    <InputButton>
                      <ChevronDownIcon 
                        aria-hidden="true" 
                        size='md'
                      />
                    </InputButton>
                  </Combobox.Button>
                </>
              }
              startAdornment={
                <>
                  {multiple && displayTags()}
                </>
              }
              as={TextField}
              autoComplete='off'
              displayValue={(v: OptionType) => typeof v === "string" ? v : v.name}
              id={id}
              label={label} 
              placeholder={placeholder}
              spellCheck={false} 
              onChange={(event) => setInputValue(event.target.value)}
            />
          </div>
          <Transition
            afterLeave={() => setInputValue('')}
            as={Fragment}
            leave={styles.leave}
            leaveFrom={styles['leave-from']}
            leaveTo={styles['leave-to']}
            show={open}
          >
            <Combobox.Options static as='div'>
              <MenuItemsWrapper 
                fullWidth
                cornerRadius={10}
                maxWidth={false}
                style={{position: "absolute", zIndex: 10}}
              >
                {displayOptions()}
              </MenuItemsWrapper>
            </Combobox.Options>
          </Transition>
        </div>
      )} 
    </Combobox>
  )
}

export default Autocomplete
