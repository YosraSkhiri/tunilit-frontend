"use client"
import { Fragment, useState } from 'react'

import { IconButton, Link, Toast, Typography } from '~/components'
import { CopyIcon, GlobeIcon } from '~/components/Icons'

import SocialMedia from '../SocialMedia'
import styles from './ContactInfo.module.scss'
import ContactInfoProps, { ContactItemProps } from './ContactInfo.types'

const ContactInfo = ({
  mail,
  mobile,
  phone,
  website,
  ...other
}: ContactInfoProps) => {
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

  return (
    <Fragment>
      <div className={styles.container}>
        <ul className={styles['contact-list']}>
          <ContactItem
            contactInfo={website}
            label='Website'
            tooltip='Copy Website Link'
            onCopyClick={
              () => copyToClipboard({
                text: website ? website : "",
                message: 'Website link successfully copied!'
              })
            }
          >
            <Link 
              underline 
              typographyProps={{
                variant: 'body3'
              }} 
              leftAdorn={<GlobeIcon />}
            >
              {website}
            </Link> 
          </ContactItem>
          <ContactItem
            contactInfo={phone}
            label='Phone'
            tooltip='Copy Phone Number'
            onCopyClick={
              () => copyToClipboard({
                text: phone ? phone : "",
                message: 'Phone number successfully copied!'
              })
            }   
          >
            <Typography className={styles.text} variant='body2'>{phone}</Typography>
          </ContactItem>
          
          <ContactItem
            contactInfo={mobile}
            label='Mobile'
            tooltip='Copy Mobile Number'
            onCopyClick={
              () => copyToClipboard({
                text: mobile ? mobile : "",
                message: 'Mobile number successfully copied!'
              })
            }   
          >
            <Typography className={styles.text} variant='body2'>{mobile}</Typography>
          </ContactItem>

          <ContactItem
            contactInfo={mail}
            label='Email'
            tooltip='Copy Email'
            onCopyClick={
              () => copyToClipboard({
                text: mail ? mail : "",
                message: 'Email successfully copied!'
              })
            }   
          >
            <Typography className={styles.text} variant='body2'>{mail}</Typography>
          </ContactItem>
        </ul>
        <div>
          <Typography className={styles['sub-title']} variant='h4'>Social Media</Typography>
          <SocialMedia 
            {...other}
          />
        </div>
      </div>
      <Toast message={message} open={open} onOpenChange={setOpen} />
    </Fragment>
  )
}

export default ContactInfo

const ContactItem = ({children, contactInfo, label, onCopyClick, tooltip}: ContactItemProps) => {
  return (
    <li>
      <div className={styles['contact-list__item']}>
        <div className={styles['contact-list__label']}>
          <Typography>{label}:</Typography>
        </div>

        <div className={styles['contact-list__content-wrapper']}>
          <div className={styles['contact-list__content']}>
            <div className={styles['text-wrapper']}>
              {contactInfo ? children : "----"}
            </div>
            <div className={styles['copy-btn-wrapper']}>
              {
                contactInfo && (
                  <IconButton 
                    size='sm' 
                    tooltip={tooltip} 
                    variant='subtle'
                    onClick={onCopyClick}
                  >
                    <CopyIcon/>
                  </IconButton>
                )
              }
            </div>   
          </div>
        </div>
      </div>
    </li>
  )
}
