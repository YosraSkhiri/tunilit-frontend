import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { nanoid } from 'nanoid'
import { useState } from 'react'

import Badge from '../Badge'
import IconButton from '../IconButton'
import { ChevronSmallLeftIcon, ChevronSmallRightIcon, MenuHamburgerIcon } from '../Icons'
import Layout from '../Layout'
import MenuItemContent from '../MenuItemContent'
import MenuItemsWrapper from '../MenuItemsWrapper'
import Typography from '../Typography/index.tsx'
import MobileNavProps from './MobileNav.types.ts'

const MobileNav = ({ schoolCategories }: MobileNavProps) => {
  const [showCategories, setShowCategories] = useState(false)

  return (
    <Popover>
      <PopoverButton as='div' style={{width: 'fit-content'}}>
        <Badge variant='dot'>
          <IconButton variant='secondary'>
            <MenuHamburgerIcon />
          </IconButton>
        </Badge>
      </PopoverButton>
      <PopoverPanel style={{ position: 'absolute', left: 0, top: 90, width: '100vw'}}>
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
                <MenuItemContent 
                  buttonBaseProps={{
                    href: '/compare'
                  }}
                  renderRightAdorn={(props) => <ChevronSmallRightIcon {...props} />}
                  size='lg'
                >
                  <Layout style={{ gap: '0.625rem'}}>
                    <Typography variant='body1'>Compare</Typography>
                    <Badge content='10' variant='standard' />
                  </Layout>
                </MenuItemContent>
                <MenuItemContent 
                  buttonBaseProps={{
                    href: '/search'
                  }}
                  renderRightAdorn={(props) => <ChevronSmallRightIcon {...props} />}
                  size='lg'
                >
                  <Typography variant='body1'>Search Schools</Typography>
                </MenuItemContent>
                <MenuItemContent 
                  buttonBaseProps={{
                    href: '/contact'
                  }}
                  renderRightAdorn={(props) => <ChevronSmallRightIcon {...props} />}
                  size='lg'
                >
                  <Typography variant='body1'>Contact</Typography> 
                </MenuItemContent>
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
                  <MenuItemContent 
                    key={nanoid()}
                    renderRightAdorn={(props) => <ChevronSmallRightIcon {...props} />}
                    size='lg'
                  >
                    <Typography variant='body1'>{cat.name}</Typography>
                  </MenuItemContent>
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
