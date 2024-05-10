import { Popover } from '@headlessui/react'
import { nanoid } from 'nanoid'

import Button from '../Button'
import { ChevronDownIcon, ChevronSmallRightIcon } from '../Icons'
import MenuItemContent from '../MenuItemContent'
import MenuItemsWrapper from '../MenuItemsWrapper'
import CategoriesDropdownProps, { categoryType }  from './CategoriesDropdown.types.ts'

const CategoriesDropdown = ({categories, className}: CategoriesDropdownProps) => {
  return (
    <Popover className={className}>
      <Popover.Button as='div'>
        <Button variant='subtle'>
          Categories
          <ChevronDownIcon />
        </Button>
      </Popover.Button>

      <Popover.Panel>
        <MenuItemsWrapper cornerRadius={10} style={{position: 'absolute'}}> 
          {
            categories.map((cat: categoryType) => (
              <MenuItemContent 
                key={nanoid()}
                renderRightAdorn={(props) => <ChevronSmallRightIcon {...props} />}
                size='sm'
              >
                {cat.name}
              </MenuItemContent>
            ))
          } 
        </MenuItemsWrapper>
      </Popover.Panel>
    </Popover>
  )
}

export default CategoriesDropdown
