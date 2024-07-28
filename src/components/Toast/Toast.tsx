"use client"
import * as ToastRadix from '@radix-ui/react-toast'

import IconButton from '../IconButton/index.tsx'
import { CrossSmallIcon } from '../Icons/index.tsx'
import Layout from '../Layout/index.tsx'
import Link from '../Link/index.tsx'
import Typography from '../Typography/index.tsx'
import styles from './Toast.module.scss'
import ToastProps from './Toast.types.ts'

const Toast = ({
  adorn,
  linkProps,
  message,
  onOpenChange,
	open,
	title
}: ToastProps) => {
  return (
    <ToastRadix.Root open={open} onOpenChange={onOpenChange}>
      <div className={styles['toast-wrapper']}>
        <Layout className={styles['toast-content']}>
          <Layout className={styles['toast-content__1']}>
            {adorn && <div className={styles['toast-content__icon']}>{adorn}</div>}
            <div>
              <ToastRadix.Title asChild>
                <Typography
                  variant="subtitle1">
                  {title}
                </Typography>
              </ToastRadix.Title>
              <ToastRadix.Description asChild>
                <Typography
                  variant="body3">
                  {message}
                </Typography>
              </ToastRadix.Description>
            </div>
          </Layout>

          <Layout className={styles['toast-content__2']}>
            {linkProps?.children && (
              <ToastRadix.Action asChild altText='See Compare list'>
                <Link {...linkProps}>{linkProps?.children}</Link>
              </ToastRadix.Action>
            )}
            <ToastRadix.Close asChild>
              <IconButton
                type='button'
                variant="subtle"
                >
                <CrossSmallIcon />
              </IconButton>   
            </ToastRadix.Close>
          </Layout>
        </Layout>
      </div>
    </ToastRadix.Root>
  )
}

export default Toast
