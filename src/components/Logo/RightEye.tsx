"use client"
import clsx from 'clsx'
import { forwardRef } from 'react'

import styles from './Logo.module.scss'
import { EyeProps } from './Logo.types'

const RightEye = forwardRef<SVGGElement, EyeProps>(({
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
      <path className={closedEyeClass} d="M40.7018 29.4918C41.256 28.3814 42.3643 26.1604 45.6894 26.1604C49.0145 26.1604 50.1229 28.3814 50.6771 29.4918" data-testid="right-eye-closed" strokeLinecap="round" strokeWidth="1.8904" />
      
      <g className={openEyeClass} data-testid="right-eye-open">
        <ellipse className={styles['icon__eye-sclera--shadow']} cx="45.5777" cy="27.0893" rx="7.39813" ry="7.29091" />
        <path className={styles['icon__eye-sclera']} clipRule="evenodd" d="M39.0494 30.4948C40.0434 27.7079 42.7475 25.8027 45.9275 25.8027C48.6902 25.8027 51.2475 26.8363 52.5789 28.7877C51.8142 31.9952 48.9317 34.3803 45.4926 34.3803C42.6983 34.3803 40.2714 32.8058 39.0494 30.4948Z" fillRule="evenodd" />
        <path className={styles['icon--stroke']} d="M46.3195 34.5304C49.9705 34.5304 52.9028 31.231 52.9028 27.1966C52.9028 23.1623 49.9705 19.8628 46.3195 19.8628C42.6685 19.8628 39.7362 23.1623 39.7362 27.1966C39.7362 31.231 42.6685 34.5304 46.3195 34.5304Z" strokeWidth="0.300214" />
        <ellipse cx="46.3195" cy="27.1966" fill="url(#eye-linear-right)" rx="6.43316" ry="7.18369" />
        <path clipRule="evenodd" d="M40.1008 29.0093C40.8202 27.1646 43.3352 25.8027 46.3274 25.8027C49.3196 25.8027 51.8347 27.1646 52.554 29.0093C51.8347 32.0991 49.3196 34.3803 46.3274 34.3803C43.3352 34.3803 40.8202 32.0991 40.1008 29.0093Z" fill="url(#eye-radial-right)" fillRule="evenodd" />
        <ellipse className={styles['icon__eye--highlight']} cx="1.84303" cy="1.84654" rx="1.84303" ry="1.84654" transform="matrix(-0.861749 0.507335 0.507335 0.861749 48.5599 20.4419)" />
        <ellipse className={styles['icon__eye--highlight']} cx="0.921513" cy="0.92327" rx="0.921513" ry="0.92327" transform="matrix(-0.861749 0.507335 0.507335 0.861749 51.1641 23.8389)" />
        <ellipse className={styles['icon__eye-pupil']} cx="46.3195" cy="26.9981" rx="1.71551" ry="2.14439" />
        <path className={styles['icon__eye-sparkle-fill']} d="M48.9445 25.0466C48.9445 26.136 49.826 27.0192 50.9133 27.0192C49.826 27.0192 48.9445 27.9023 48.9445 28.9918C48.9445 27.9023 48.0631 27.0192 46.9757 27.0192C48.0631 27.0192 48.9445 26.136 48.9445 25.0466Z" />
        <path className={styles['icon__eye-sparkle-stroke']} d="M48.9445 25.0466C48.9445 26.136 49.826 27.0192 50.9133 27.0192C49.826 27.0192 48.9445 27.9023 48.9445 28.9918C48.9445 27.9023 48.0631 27.0192 46.9757 27.0192C48.0631 27.0192 48.9445 26.136 48.9445 25.0466Z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.193336" />
      </g>
    </g>
  )
})

export default RightEye
