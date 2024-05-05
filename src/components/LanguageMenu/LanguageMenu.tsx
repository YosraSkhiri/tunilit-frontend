import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { nanoid } from 'nanoid'
import { useState } from 'react'

import Badge from '../Badge'
import IconButton from '../IconButton'
import { CheckSmallIcon, LanguagesIcon } from '../Icons'
import MenuItemContent from '../MenuItemContent'
import MenuItemsWrapper from '../MenuItemsWrapper'
import styles from './LanguageMenu.module.scss'
import LanguageMenuProps from './LanguageMenu.types'

const LanguageMenu = ({dir, onValueChange, options, value}: LanguageMenuProps) => {
  const [open, setOpen] = useState<boolean>(false)
  
  return (
    <DropdownMenu.Root dir={dir} open={open}>
      <Badge content={value} type='secondary' variant='standard'>
        <DropdownMenu.Trigger asChild>
          <IconButton tooltip='Translate' variant='secondary' onClick={() => setOpen(!open)}>
            <LanguagesIcon />
          </IconButton>
        </DropdownMenu.Trigger> 
      </Badge>
      <DropdownMenu.Portal>
        <DropdownMenu.Content align='end' style={{zIndex: 100}}>
          <DropdownMenu.RadioGroup 
            className={styles['min-width']}
            value={value} 
            onValueChange={onValueChange}
          >
            <MenuItemsWrapper  
              cornerRadius={10}
              maxWidth={false}
            >
              {
                options.map((op) => (
                  <DropdownMenu.RadioItem asChild key={nanoid()} value={op.value}>
                    <MenuItemContent 
                      renderLeftAdorn={(props) => value === op.value && <CheckSmallIcon {...props} />} 
                      selected={value === op.value}
                    >
                      {op.label}
                    </MenuItemContent>
                  </DropdownMenu.RadioItem>
                ))
              }
            </MenuItemsWrapper>
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default LanguageMenu
