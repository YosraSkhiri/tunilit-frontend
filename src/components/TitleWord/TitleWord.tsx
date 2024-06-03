"use client"
import clsx from 'clsx'

import Typography from '../Typography'
import styles from './TitleWord.module.scss'
import TitleWordProps from './TitleWord.types.ts'

const TitleWord = ({
  adorn = false,
  children,
  className,
  dir = 'ltr',
  ...other
}: TitleWordProps) => {
  const wordWrapperClass = clsx({
    [styles['word-wrapper']]: true,
  }, className)

  const wordContainerClass = clsx({
    [styles['word-container']]: true,
    [styles['word-adorn']]: adorn, 
    [styles['word-adorn--right']]: adorn && dir === 'ltr', 
    [styles['word-adorn--left']]: adorn && dir === 'rtl', 
  })

  return (
    <div 
      className={wordWrapperClass}
      {...other}
    >
      <div className={wordContainerClass}>
        <Typography className={`${styles['word']}`} component="div" dir={dir} variant="title">
          {children}
        </Typography> 
        {
          adorn && (
            <svg className={styles['lines']} fill="none" viewBox="0 0 41 32" xmlns="http://www.w3.org/2000/svg">
              <path className={styles['line__1']} d="M37.4385 22.9858L29.8748 28.5042" stroke="#80C75E" strokeLinecap="round" strokeWidth="7"/>
              <path className={styles['line__2']} d="M25.8777 7.81767L17.5897 20.4613" stroke="#80C75E" strokeLinecap="round" strokeWidth="7"/>
              <path className={styles['line__3']} d="M6.125 3.89551L4.27159 12.7097" stroke="#80C75E" strokeLinecap="round" strokeWidth="7"/>
            </svg>
          )
        }
      </div>
    </div>
  )
}

export default TitleWord
