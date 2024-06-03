"use client"
import { motion, Variants } from "framer-motion"
import { nanoid } from 'nanoid'

import TitleWord from '../TitleWord'
import styles from './Title.module.scss'

const itemVariants: Variants = {
  visible: i => ({
    transform: 'translateY(0)',
    opacity: 1,
    transition: {
      delay: i * 0.2,
    },
  }),
  hidden: { transform: 'translateY(30%)', opacity: 0 },
}

const title = [
  {
    word: 'Find',
    adorn: false,
  },
  {
    word: 'the',
    adorn: false,
  },
  {
    word: 'right',
    adorn: true,
  },
  {
    word: 'education',
    adorn: false,
  },
  {
    word: 'for',
    adorn: false,
  },
  {
    word: 'you',
    adorn: false,
  },
]

const Title = () => {
  return (
    <div 
      className={styles['title-container']}  
    >
      <ol className={styles['title']}>
      {
        title.map((w, i: number) => (
          <motion.li    
            animate="visible"
            custom={i} 
            initial="hidden" 
            key={nanoid()}
            variants={itemVariants}
          >
            <TitleWord 
              adorn={w.adorn}
            >
              {w.word}
            </TitleWord>
          </motion.li>
        ))
      }
      </ol>
      <svg className={styles.line} fill="none" viewBox="0 0 280 40" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.75 15.2778C41.4167 9.9445 150.45 0.177831 277.25 3.77783C210.583 12.1112 75.65 30.3778 69.25 36.7778C83.9167 35.2778 123.05 32.4778 162.25 33.2778" stroke="#80C75E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5"/>
      </svg>
    </div>
  )
}

export default Title
