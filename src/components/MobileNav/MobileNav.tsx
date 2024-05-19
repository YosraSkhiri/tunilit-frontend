import { CloseButton, Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { nanoid } from 'nanoid'
import queryString from 'query-string';
import { useState } from 'react'

import Badge from '../Badge'
import IconButton from '../IconButton'
import { ChevronSmallLeftIcon, ChevronSmallRightIcon, MenuHamburgerIcon } from '../Icons'
import Layout from '../Layout'
import MenuItemContent from '../MenuItemContent'
import MenuItemsWrapper from '../MenuItemsWrapper'
import Typography from '../Typography/index.tsx'
import styles from './MobileNav.module.scss'
import MobileNavProps from './MobileNav.types.ts'

const MobileNav = ({ schoolCategories }: MobileNavProps) => {
  const [showCategories, setShowCategories] = useState(false)

  return (
    <Popover>
      <PopoverButton as='div'>
        <Badge variant='dot'>
          <IconButton variant='secondary'>
            <MenuHamburgerIcon />
          </IconButton>
        </Badge>
      </PopoverButton>
      <PopoverPanel className={styles.menu}>
        <MenuItemsWrapper fullWidth maxHeight={false} style={{ height: 'calc(100vh - 100px)'}} tabIndex={1}> 
          {
            !showCategories && (
              <>
                <MenuItemContent 
                  buttonBaseProps={{
                    onClick: () => setShowCategories(true)
                  }}
                  renderRightAdorn={(props) => <ChevronSmallRightIcon {...props} />}
                  size='lg'
                >
                  <Typography variant='body1'>Categories</Typography>
                </MenuItemContent>

                <CloseButton 
                  buttonBaseProps={{
                    href: '/compare'
                  }}
                  as={MenuItemContent}
                  renderRightAdorn={(props: {className?: string}) => <ChevronSmallRightIcon {...props} />}
                  size='lg'                         
                >
                  <Layout style={{ gap: '0.625rem'}}>
                    <Typography variant='body1'>Compare</Typography>
                    <Badge content='10' variant='standard' />
                  </Layout>
                </CloseButton>
                
                <CloseButton
                  buttonBaseProps={{
                    href: '/search'
                  }}
                  as={MenuItemContent}
                  renderRightAdorn={(props: {className?: string}) => <ChevronSmallRightIcon {...props} />}
                  size='lg'
                >
                  <Typography variant='body1'>Search Schools</Typography>
                </CloseButton>

                <CloseButton
                  buttonBaseProps={{
                    href: '/contact'
                  }}
                  as={MenuItemContent}
                  renderRightAdorn={(props: {className?: string}) => <ChevronSmallRightIcon {...props} />}
                  size='lg'
                >
                  <Typography variant='body1'>Contact</Typography>
                </CloseButton>
              </>
            )
          }

          {
            showCategories && (
              <>
                <MenuItemContent 
                  buttonBaseProps={{
                    onClick: () => setShowCategories(false)
                  }}
                  renderLeftAdorn={(props) => <ChevronSmallLeftIcon {...props} />}
                  size='md'
                >
                  <Typography variant='body1'>Back</Typography>
                </MenuItemContent>

                {showCategories && schoolCategories.map(cat => (
                  <CloseButton 
                    buttonBaseProps={{
                      href:`/search?${queryString.stringify({ category: cat.name }, {arrayFormat: 'comma'})}`
                    }}
                    as={MenuItemContent}
                    key={nanoid()}
                    renderRightAdorn={(props: {className?: string}) => <ChevronSmallRightIcon {...props} />}
                    size='lg'
                  >
                    <Typography variant='body1'>{cat.name}</Typography>
                  </CloseButton>
                ))}
              </>
            )
          }
        </MenuItemsWrapper>
      </PopoverPanel>
    </Popover>    
  )
}

export default MobileNav
