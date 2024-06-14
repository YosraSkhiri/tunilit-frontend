"use client"
import { memo, useMemo } from 'react'

import IconButton from '../IconButton'
import { ChevronSmallLeftIcon,ChevronSmallRightIcon } from '../Icons'
import PaginationItemProps from './PaginationItem.types.ts'

const PaginationItem = memo(({ currentPage, item, onClick }: PaginationItemProps) => {
  const generateProps = useMemo(() => {
    let props = {}
  
      switch (item) {
        case 'next':
          props = {
            ...props,
            variant: 'tertiary',
            tooltip: 'Next Page',
            children: <ChevronSmallRightIcon />,
            onClick: () => onClick(currentPage + 1),
          
          }
          break;
        case 'previous':
          props = {
            ...props,
            variant: 'tertiary',
            tooltip: 'Previous Page',
            children: <ChevronSmallLeftIcon />,
            onClick: () => onClick(currentPage - 1),
          }
          break;
        default:
          props = {
            ...props,
            variant: currentPage == +item ? 'primary' : 'subtle',
            children: item,
            onClick: () => onClick(+item)
          }
      }
      return props
  }, [currentPage, item, onClick])

  return (
    <IconButton 
      size='sm' 
      {...generateProps}
    />
  )
}, arePropsEqual)

function arePropsEqual(oldProps: PaginationItemProps, newProps: PaginationItemProps) {
  return (
    oldProps.item == newProps.item
    && oldProps.currentPage == newProps.currentPage
  );
}

export default PaginationItem
