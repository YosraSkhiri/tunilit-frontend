"use client"
import * as AccordionRadix from '@radix-ui/react-accordion';
import { forwardRef } from 'react';

import styles from './AccordionContent.module.scss'
import AccordionContentProps from './AccordionContent.types';

const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(({ children, ...props }, forwardedRef) => (
  <AccordionRadix.Content
    className={styles['details-content-wrapper']}
    {...props}
    ref={forwardedRef}
  >
    <div className={styles['details-content']}>{children}</div>
  </AccordionRadix.Content>
));

export default AccordionContent;