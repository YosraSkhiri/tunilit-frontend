import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { nanoid } from 'nanoid'
import queryString from 'query-string';

import Button from '../Button'
import { ChevronDownIcon, ChevronSmallRightIcon } from '../Icons'
import MenuItemContent from '../MenuItemContent'
import MenuItemsWrapper from '../MenuItemsWrapper'
import CategoriesDropdownProps, { categoryType }  from './CategoriesDropdown.types.ts'

const CategoriesDropdown = ({categories, className}: CategoriesDropdownProps) => {
  return (
    <Popover className={className}>
      <PopoverButton as='div'>
        <Button variant='subtle'>
          Categories
          <ChevronDownIcon />
        </Button>
      </PopoverButton>

      <PopoverPanel>
        <MenuItemsWrapper cornerRadius={10} style={{position: 'absolute'}}> 
          {
            categories.map((cat: categoryType) => (
              <MenuItemContent 
                buttonBaseProps={{
                  href:`/search?${queryString.stringify({ category: cat.name }, {arrayFormat: 'comma'})}`
                }}
                key={nanoid()}
                renderRightAdorn={(props) => <ChevronSmallRightIcon {...props} />}
                size='sm'
              >
                {cat.name}
              </MenuItemContent>
            ))
          } 
        </MenuItemsWrapper>
      </PopoverPanel>
    </Popover>
  )
}

export default CategoriesDropdown
