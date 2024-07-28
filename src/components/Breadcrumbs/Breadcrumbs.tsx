"use client"
import * as Collapsible from '@radix-ui/react-collapsible'
import { Fragment, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import ButtonBase from '../ButtonBase'
import { ChevronSmallRightIcon, MenuHorizontalIcon } from '../Icons'
import Layout from '../Layout'
import Link from '../Link'
import styles from './Breadcrumbs.module.scss'
import BreadcrumbsProps from './Breadcrumbs.types.ts'

const Breadcrumbs = ({links = [], maxItems = 3}: BreadcrumbsProps) => {
  const [open, setOpen] = useState(false)

  const allLinks = links?.map((link, i) => (
    <Fragment key={uuidv4()}>
      <Link 
        active={i === links.length -1} 
        variant='subtle' 
        {...link} 
      />
      { i !== links.length -1 && <ChevronSmallRightIcon className={styles.separator} /> }
    </Fragment>   
  ))

  return (
    <Collapsible.Root  open={open} onOpenChange={setOpen}>
      <Layout className={styles['breadcrumbs-container']}>
        {
          allLinks?.slice(0, maxItems - 1) 
        }
        {
          !open && (maxItems < links?.length) && (
            <>
              <Collapsible.Trigger asChild>
                <ButtonBase className={styles['trigger-btn']}>
                <MenuHorizontalIcon size='md' />
                </ButtonBase>
              </Collapsible.Trigger>
              <ChevronSmallRightIcon className={styles.separator} />
            </>
          )
        }
        <Collapsible.Content asChild>
          <Layout className={styles['breadcrumbs-container']}>
          {allLinks?.slice(maxItems - 1, allLinks?.length - 1)}
          </Layout>
        </Collapsible.Content>
        {
          maxItems < links?.length && allLinks?.[allLinks?.length - 1]
        }
      </Layout>
    </Collapsible.Root>
  )
}

export default Breadcrumbs
