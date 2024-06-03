"use client"
import * as AccordionRadix from '@radix-ui/react-accordion'
import clsx from 'clsx'
import { forwardRef } from 'react'

import { MinusCircleIcon, PlusCircleIcon } from '../Icons'
import Typography from '../Typography'
import styles from './AccordionTrigger.module.scss'
import AccordionTriggerProps from './AccordionTrigger.types'

const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(({ children, ...props }, forwardedRef) => {
  const collapseIconClass = clsx({
    [styles['trigger__icon']]: true,
    [styles['trigger__icon--collapse']]: true,
  })

  const expandIconClass = clsx({
    [styles['trigger__icon']]: true,
    [styles['trigger__icon--expand']]: true,
  })

  return (
    <AccordionRadix.Header className="AccordionHeader">
      <AccordionRadix.Trigger
        className={styles['trigger']}
        {...props}
        ref={forwardedRef}
      >
        <PlusCircleIcon
					aria-hidden={true}
					className={expandIconClass}
					data-testid="plus-circle-icon"
          size="lg"
				/>
        <MinusCircleIcon
					aria-hidden={true}
					className={collapseIconClass}
					data-testid="plus-circle-icon"
          size="lg"
				/>
        <Typography className={styles['trigger__text']} variant='body1'>
          {children}
        </Typography>
      </AccordionRadix.Trigger>
    </AccordionRadix.Header>
  )
})

export default AccordionTrigger
