import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import clsx from 'clsx'

import { CheckSmallIcon } from '../Icons'
import Label from '../Label'
import styles from './Checkbox.module.scss'
import CheckboxProps from './Checkbox.types.ts'

const Checkbox = ({
  checked, 
  defaultChecked,
  disabled, 
  id, 
  label, 
  name, 
  onCheckedChange, 
  required,
  value
}: CheckboxProps) => {
  const rootClass = clsx({
    [styles['checkbox__root']]: true,
    [styles['checkbox__root--default']]: !checked && !disabled,
    [styles['checkbox__root--checked']]: checked && !disabled,
    [styles['checkbox__root--disabled']]: disabled,
  })

  const indicatorClass = clsx({
    [styles['checkbox__icon']]: true,
    [styles['checkbox__icon--default']]: !disabled,
    [styles['checkbox__icon--disabled']]: disabled,
  })

  return (
    <div className={styles['container']}>
      <CheckboxPrimitive.Root
        checked={checked}
        className={rootClass}
        defaultChecked={defaultChecked}
        disabled={disabled}
        id={id}
        name={name}
        required={required}
        value={value}
        onCheckedChange={onCheckedChange}
      >
        <CheckboxPrimitive.Indicator asChild className={indicatorClass} >
          <CheckSmallIcon size='sm' />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {
        label && 
        (
          <Label 
            disabled={disabled} 
            htmlFor={id} 
            required={required}
          >
            {label}
          </Label>
        )
      }
    </div>
  )
}

export default Checkbox
