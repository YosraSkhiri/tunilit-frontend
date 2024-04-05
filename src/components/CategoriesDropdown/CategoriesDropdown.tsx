import { Popover } from '@headlessui/react'

import Button from '../Button';
import { ChevronDownIcon, ChevronSmallRightIcon } from '../Icons';
import Link from '../Link';
import MenuItemContent from '../MenuItemContent';
import Typography from '../Typography';
import styles from './CategoriesDropdown.module.scss';
import CategoriesDropdownProps from './CategoriesDropdown.types.ts'
// TODO ... Complete the categories dropdown
/**
 * Languages
 * Art
 * IT & Software
 * Business
 * Beauty & makeup
 * Design
 * Music
 * Photography & Video
 * Marketing
 */
const data = {
  categories: [
    {
      name: 'Art',
      subCategories: [
        {
          name: '',
          popularTopics: [{
            name: '',
            href: '',
          }]
        }
      ]
    }
  ]
}

const CategoriesDropdown = ({}: CategoriesDropdownProps) => {
  return (
    <Popover>
      <Popover.Button as='div'>
        <Button variant='subtle'>
          Categories
          <ChevronDownIcon />
        </Button>
      </Popover.Button>

      <Popover.Panel>

          <div className={styles['menu-wrapper']}>
          <div className={styles['menu-items-container']}>
            <div className={styles['menu-items']}>
              <MenuItemContent 
                renderRightAdorn={(props) => <ChevronSmallRightIcon {...props} />}
                size='sm'
              >
                Category 1
              </MenuItemContent>
              <MenuItemContent size='sm'>Category 1</MenuItemContent>
              <MenuItemContent size='sm'>Category 1</MenuItemContent>
              <MenuItemContent size='sm'>Category 1</MenuItemContent>
              <MenuItemContent size='sm'>Category 1</MenuItemContent>
              <MenuItemContent size='sm'>Category 1</MenuItemContent>
              <MenuItemContent size='sm'>Category 1</MenuItemContent>
              <MenuItemContent size='sm'>Category 1</MenuItemContent>
              <MenuItemContent size='sm'>Category 1</MenuItemContent>
              <MenuItemContent size='sm'>Category 1</MenuItemContent>
            
            </div>
            <div className={styles['menu-items']}>
              <MenuItemContent size='sm'>Category 1</MenuItemContent>
              <MenuItemContent size='sm'>Category 1</MenuItemContent>
              <MenuItemContent size='sm'>Category 1</MenuItemContent>
              <MenuItemContent size='sm'>Category 1</MenuItemContent>
              <MenuItemContent size='sm'>Category 1</MenuItemContent>
              <MenuItemContent size='sm'>Category 1</MenuItemContent>
              <MenuItemContent size='sm'>Category 1</MenuItemContent>
              <MenuItemContent size='sm'>Category 1</MenuItemContent>
              <MenuItemContent size='sm'>Category 1</MenuItemContent>
              <MenuItemContent size='sm'>Category 1</MenuItemContent>
            </div>
            <div className={styles['menu-items']}>
              <Link>Link1</Link>
              <Link>Link1</Link>
              <Link>Link1</Link>
              <Link>Link1</Link>
            </div>
          </div>
          </div>
          
          
          
      </Popover.Panel>
    </Popover>
  )
}

export default CategoriesDropdown
