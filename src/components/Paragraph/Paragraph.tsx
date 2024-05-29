import { useState } from 'react'

import { ChevronSmallRightIcon } from '../Icons'
import Link from '../Link'
import Typography from '../Typography'
import styles from './Paragraph.module.scss'
import ParagraphProps from './Paragraph.types.ts'

const variants = {
  body1: {
    lineHeight: 150, // %
    fontSize: 1.125 // rem
  },
  body2: {
    lineHeight: 150,
    fontSize: 1
  },
  body3: {
    lineHeight: 150,
    fontSize: 0.875
  }
}

const Paragraph = ({
  children,
  className,
  maxLines,
  variant = 'body2',
  ...other
}: ParagraphProps) => {
  const generateHeight = () => (
    maxLines ? `${maxLines * (variants[variant].fontSize * variants[variant].lineHeight / 100)}rem` : 'fit-content'
  )

  const [height, setHeight] = useState<string>(() => generateHeight())

  return (
    <div className={styles['paragraph-wrapper']} {...other}>
      <div 
        className={styles['paragraph']}
        {
          ...(maxLines && {
            style: {
              height: `${height}`
            }
          })
        }
      >
        <Typography className={className} variant={variant}>{children}</Typography>
      </div>
      {
        maxLines && (
          <Link 
            underline 
            typographyProps={{
              variant: 'body3'
            }} 
            component="button" 
            rightAdorn={<ChevronSmallRightIcon />}
            onClick={() => setHeight(state => {
              if (state === 'fit-content') return generateHeight()
              return 'fit-content'
            })}
          >
            See {height !== 'fit-content' ? 'More' : 'Less'}
          </Link>
        )
      }
    </div>
  )
}

export default Paragraph
