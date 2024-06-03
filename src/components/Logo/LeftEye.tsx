"use client"
import clsx from 'clsx'
import { forwardRef } from 'react'

import styles from './Logo.module.scss'
import { EyeProps } from './Logo.types'

const LeftEye = forwardRef<SVGGElement, EyeProps>(({
  closed = false,
}, ref) => {
  const closedEyeClass = clsx({
    [styles['icon--hide']]: !closed,
    [styles['icon--stroke']]: true,
  })

  const openEyeClass = clsx({
    [styles['icon--hide']]: closed,
  })
  
  return (
    <g ref={ref}>
      <path  className={closedEyeClass} d="M16.7255 29.4918C17.2796 28.3814 18.388 26.1604 21.7131 26.1604C25.0382 26.1604 26.1466 28.3814 26.7008 29.4918" data-testid="left-eye-closed" strokeLinecap="round" strokeWidth="1.8904" />
      
      <g className={openEyeClass} data-testid="left-eye-open">
        <ellipse className={styles['icon__eye-sclera--shadow']} cx="21.775" cy="27.0893" rx="7.39813" ry="7.29091" />
        <path className={styles['icon__eye-sclera']} clipRule="evenodd" d="M15.2472 30.4948C16.2577 27.7079 19.0069 25.8027 22.24 25.8027C25.0487 25.8027 27.6487 26.8363 29.0023 28.7877C28.2249 31.9952 25.2943 34.3803 21.7978 34.3803C18.9569 34.3803 16.4895 32.8058 15.2472 30.4948Z" fillRule="evenodd" />
        <path className={styles['icon--stroke']} d="M22.74 34.5304C26.391 34.5304 29.3233 31.231 29.3233 27.1966C29.3233 23.1623 26.391 19.8628 22.74 19.8628C19.0891 19.8628 16.1568 23.1623 16.1568 27.1966C16.1568 31.231 19.0891 34.5304 22.74 34.5304Z" strokeWidth="0.300214" />
        <ellipse cx="22.74" cy="27.1966" fill="url(#eye-linear-left)" rx="6.43316" ry="7.18369" />
        <path clipRule="evenodd" d="M16.5214 29.0093C17.2407 27.1646 19.7558 25.8027 22.748 25.8027C25.7401 25.8027 28.2552 27.1646 28.9746 29.0093C28.2552 32.0991 25.7401 34.3803 22.748 34.3803C19.7558 34.3803 17.2407 32.0991 16.5214 29.0093Z" fill="url(#eye-radial-left)" fillRule="evenodd" />
        <ellipse className={styles['icon__eye--highlight']} cx="1.84303" cy="1.84654" rx="1.84303" ry="1.84654" transform="matrix(-0.861749 0.507335 0.507335 0.861749 24.9805 20.4419)" />
        <ellipse className={styles['icon__eye--highlight']} cx="0.921513" cy="0.92327" rx="0.921513" ry="0.92327" transform="matrix(-0.861749 0.507335 0.507335 0.861749 27.5846 23.8389)" />
        <ellipse className={styles['icon__eye-pupil']} cx="22.74" cy="26.9981" rx="1.71551" ry="2.14439" />
        <path className={styles['icon__eye-sparkle-fill']} d="M25.365 25.0466C25.365 26.136 26.2465 27.0192 27.3339 27.0192C26.2465 27.0192 25.365 27.9023 25.365 28.9918C25.365 27.9023 24.4836 27.0192 23.3962 27.0192C24.4836 27.0192 25.365 26.136 25.365 25.0466Z" />
        <path className={styles['icon__eye-sparkle-stroke']} d="M25.365 25.0466C25.365 26.136 26.2465 27.0192 27.3339 27.0192C26.2465 27.0192 25.365 27.9023 25.365 28.9918C25.365 27.9023 24.4836 27.0192 23.3962 27.0192C24.4836 27.0192 25.365 26.136 25.365 25.0466Z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.193336" />
      </g>
    </g>
  )
})

export default LeftEye
