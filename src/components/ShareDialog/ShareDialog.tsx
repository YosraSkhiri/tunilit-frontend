"use client"
import * as Dialog from '@radix-ui/react-dialog';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import Button from '../Button';
import ButtonBase from '../ButtonBase';
import IconButton from '../IconButton';
import CopyIcon from '../Icons/CopyIcon.tsx';
import Typography from '../Typography';
import styles from './ShareDialog.module.scss'
import ShareDialogProps from './ShareDialog.types.ts'

const ShareDialog = ({
  trigger,
}: ShareDialogProps) => {
  const [link, setLink] = useState('')

  useEffect(() => {
    setLink(window.location.href)
    console.log(encodeURIComponent(window.location.href))
  }, [])

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {trigger}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles['overlay']} />
        <Dialog.Content className={styles['content']}>
          <Dialog.Title asChild>
            <Typography variant='h6'>
              Share
            </Typography>
          </Dialog.Title>
          <div className={styles['sm-btns-container']}>
            <Link 
              className={styles['sm-btn']} 
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`}
            >
              <img className={styles['sm-img']} src='/images/Facebook.png' />
            </Link>
            <ButtonBase className={styles['sm-btn']}>
              <img className={styles['sm-img']} src='/images/WhatsApp.png' />
            </ButtonBase>
            <Link 
              className={styles['sm-btn']}
              href={`https://www.linkedin.com/sharing/share-offsite?url=${encodeURIComponent(link)}`}
            >
              <img className={styles['sm-img']} src='/images/LinkedIn.png' />
            </Link>
          </div>
          <div className={styles['link-container']}>
            <div className={styles['link']}>
              {link}
            </div>
            <IconButton size='sm' tooltip='Copy Link' variant='subtle'>
              <CopyIcon />
            </IconButton>
          </div>
          <Dialog.Close asChild>
            <Button fullWidth variant='tertiary'>Close</Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default ShareDialog
