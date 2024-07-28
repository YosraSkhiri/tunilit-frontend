"use client"
import * as RadioGroup from '@radix-ui/react-radio-group';
import clsx from 'clsx';

import Label from '../Label';
import Layout from '../Layout/Layout.tsx';
import styles from './Radio.module.scss';
import RadioProps from './Radio.types.ts'

const Radio = ({ disabled, id, label, required, value }: RadioProps) => {
  const itemClass = clsx({
    [styles['radio__item']]: true,
    [styles['radio__item--default']]: !disabled,
    [styles['radio__item--disabled']]: disabled,
  })

  const indicatorClass = clsx({
    [styles['radio__indicator']]: true,
    [styles['radio__indicator--disabled']]: disabled,
  })

  return (
    <Layout className={styles['radio-container']}>
      <RadioGroup.Item 
        className={itemClass} 
        disabled={disabled} 
        id={id} 
        required={required} 
        value={value}
      >
        <RadioGroup.Indicator className={indicatorClass} />
      </RadioGroup.Item>
      {label && (<Label disabled={disabled} htmlFor={id} required={required}>{label}</Label>)}
    </Layout>
  )
}

export default Radio
