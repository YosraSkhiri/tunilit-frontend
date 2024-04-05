import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { useState } from 'react'

import Badge from '../Badge'
import IconButton from '../IconButton'
import { CheckSmallIcon, LanguagesIcon } from '../Icons'
import MenuItemContent from '../MenuItemContent'
import MenuItemsWrapper from '../MenuItemsWrapper'

// TODO Remove the space in the right of the menu
// TODO Use redux for handling languages
// TODO Write tests
// TODO Refactor code 

const LanguageMenu = () => {
  const [lang, setLang] = useState('en')
  
  return (
    <DropdownMenu.Root>
      <Badge content={lang} type='secondary' variant='standard'>
        <DropdownMenu.Trigger asChild>
          <IconButton tooltip='Translate' variant='secondary'>
            <LanguagesIcon />
          </IconButton>
        </DropdownMenu.Trigger> 
      </Badge>
      <DropdownMenu.Portal>
        <DropdownMenu.Content align='end'>
          <DropdownMenu.RadioGroup 
            style={{minWidth: '260px'}} 
            value={lang} 
            onValueChange={setLang}
          >
            <MenuItemsWrapper  
              cornerRadius={10}
              maxWidth={false}
            >
              <DropdownMenu.RadioItem asChild value="ar">
                <MenuItemContent 
                  renderLeftAdorn={(props) => lang === 'ar' && <CheckSmallIcon {...props} />} 
                  selected={lang === 'ar'}
                >
                  عربي
                </MenuItemContent>
              </DropdownMenu.RadioItem>
              <DropdownMenu.RadioItem asChild value="fr">
                <MenuItemContent 
                  renderLeftAdorn={(props) => lang === 'fr' && <CheckSmallIcon {...props} />}
                  selected={lang === 'fr'}
                >
                  Français
                </MenuItemContent>
              </DropdownMenu.RadioItem>
              <DropdownMenu.RadioItem asChild value="en">
                <MenuItemContent 
                  renderLeftAdorn={(props) => lang === 'en' && <CheckSmallIcon {...props} />}
                  selected={lang === 'en'}
                >
                  English
                </MenuItemContent>
              </DropdownMenu.RadioItem>
            </MenuItemsWrapper>
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default LanguageMenu
