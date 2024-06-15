"use client"
import * as Dialog from '@radix-ui/react-dialog';
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';

import Button from '../Button';
import ButtonBase from '../ButtonBase';
import IconButton from '../IconButton';
import CopyIcon from '../Icons/CopyIcon.tsx';
import Toast from '../Toast';
import Typography from '../Typography';
import styles from './ShareDialog.module.scss'
import ShareDialogProps from './ShareDialog.types.ts'

const ShareDialog = ({
  trigger,
}: ShareDialogProps) => {
  const [link, setLink] = useState('')
  const [open, setOpen] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')

  const copyToClipboard = async ({message, text}: {message: string, text: string}) => {
    try {
      await navigator.clipboard.writeText(text)
      setMessage(message)
      setOpen(true)
    } catch (error) {
      if (error instanceof DOMException && error.name === 'NotAllowedError') {
        setMessage('Clipboard write operation not allowed')
      }
      setMessage('Somthing went wrong, please try again later.')
    }
  }

  useEffect(() => {
    setLink(window.location.href)
  }, [])

  return (
    <Fragment>
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
              target='_blank'
            >
              <img className={styles['sm-img']} src='/images/Facebook.png' />
            </Link>
            <ButtonBase 
              className={styles['sm-btn']}
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(link)}`}
              target='_blank'
            >
              <img className={styles['sm-img']} src='/images/WhatsApp.png' />
            </ButtonBase>
            <Link 
              className={styles['sm-btn']}
              href={`https://www.linkedin.com/sharing/share-offsite?url=${encodeURIComponent(link)}`}
              target='_blank'
            >
              <img className={styles['sm-img']} src='/images/LinkedIn.png' />
            </Link>
          </div>
          <div className={styles['link-container']}>
            <div className={styles['link-wrapper']}>
              <div className={styles['link']}>
                {link}
              </div>
            </div>
            
            <IconButton 
              size='sm' 
              tooltip='Copy Link' 
              variant='subtle'
              onClick={
                () => copyToClipboard({
                  text: link,
                  message: 'Profile link successfully copied!'
                })
              }
            >
              <CopyIcon />
            </IconButton>
          </div>
          <Dialog.Close asChild>
            <Button fullWidth variant='tertiary'>Close</Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
    <Toast message={message} open={open} onOpenChange={setOpen} />
    </Fragment>
  )
}

export default ShareDialog
