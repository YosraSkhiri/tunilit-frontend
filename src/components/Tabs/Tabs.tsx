"use client"
import { Tab, TabGroup, TabList, TabPanels } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment, useRef } from 'react'

import ButtonBase from '../ButtonBase'
import {ChevronSmallLeftIcon, ChevronSmallRightIcon} from '../Icons'
import styles from './Tabs.module.scss'
import TabsProps from './Tabs.types.ts'

const Tabs = ({children, defaultIndex = 0, onChange, showScrollButtons, tabs}: TabsProps) => {
  const tabsRef = useRef<HTMLDivElement>(null)

  const tabClass = (selected: boolean) => clsx({
    [styles['tab']]: true,
    [styles['tab--selected']]: selected,
  })

  // Function source: https://github.com/mui/material-ui/blob/bc22c6fff3f3dd32a4f84e5f41ae4a875786df15/packages/mui-material/src/Tabs/Tabs.js#L461-L480
  const getScrollSize = () => {
    if (tabsRef && tabsRef.current) {
      const containerSize = tabsRef.current['clientWidth']
      let totalSize = 0
      const children = Array.from(tabsRef.current.children)
  
      for (let i = 0; i < children.length; i += 1) {
        const tab = children[i]
        if (totalSize + tab['clientWidth'] > containerSize) {
          // If the first item is longer than the container size, then only scroll
          // by the container size.
          if (i === 0) {
            totalSize = containerSize
          }
          break
        }
        totalSize += tab['clientWidth']
      }
      return totalSize
    }

    return 1
  }

  // Function source: https://github.com/mui/material-ui/blob/bc22c6fff3f3dd32a4f84e5f41ae4a875786df15/packages/mui-material/src/Tabs/Tabs.js#L447-L459
  const moveTabsScroll = (delta: number) => {
    if (tabsRef && tabsRef.current) {
      const isRtl = false
      let scrollValue = tabsRef?.current?.['scrollLeft']
      
      if (typeof scrollValue === 'number') scrollValue += delta * getScrollSize() * (isRtl ? -1 : 1)
      
      tabsRef.current['scrollLeft'] = scrollValue
    }
  }

  return (
    <div className={styles['tab__group-wrapper']}>
      <TabGroup defaultIndex={defaultIndex} onChange={onChange}>
        <div className={styles['tabs-wrapper']}>
          {
            showScrollButtons && (
              <ButtonBase className={styles['tab-scroll-btn']} onClick={() => moveTabsScroll(-1)}>
                <ChevronSmallLeftIcon />
              </ButtonBase>
            )
          }
          <TabList className={styles['tabs-container']} ref={tabsRef}>
            {tabs.map((label, i) => (
              <Tab as={Fragment} key={`tab-${i}`}>
                {({ selected }) => (
                  <ButtonBase className={tabClass(selected)}>{label}</ButtonBase>
                )}
              </Tab>
            ))}
          </TabList>
          {
            showScrollButtons && (
              <ButtonBase className={styles['tab-scroll-btn']} onClick={() => moveTabsScroll(1)}>
                <ChevronSmallRightIcon />
              </ButtonBase>
            )
          }
        </div>
        <TabPanels>
          {children}
        </TabPanels>
      </TabGroup>
    </div>

  )
}

export default Tabs
