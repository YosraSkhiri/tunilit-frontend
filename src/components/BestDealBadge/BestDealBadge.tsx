import clsx from 'clsx'

import styles from './BestDealBadge.module.scss';
import BestDealBadgeProps from './BestDealBadge.types.ts'

const BestDealBadge = ({animate, className, label}: BestDealBadgeProps) => {
    const badgeClass = clsx({
      [styles['badge']]: true,
      [styles['badge--animate']]: animate,
    }, className)
  
    return (
      <div className={badgeClass}>
        <span className={styles['badge__label']}>{label}</span>
  
        <svg className={styles['badge__stars']} fill="none" height="38" viewBox="0 0 22 38" width="22" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.079 7.6397C23.6639 5.31055 13.079 8.57954 15.4335 12.4615C17.3713 15.8122 18.1631 15.5057 14.3917 14.6885C10.0161 13.7282 11.9956 13.4422 7.45323 17.9575C6.91149 18.5091 7.55742 16.2617 7.72411 14.1368C7.91163 11.6034 2.91091 10.7861 2.18164 9.45808C2.53586 9.45808 1.91077 9.45808 5.11956 9.15162C9.07847 8.82472 7.20319 6.63859 8.93261 3.16528C10.3495 4.37072 11.808 7.90531 13.079 7.6397Z" fill="#FAFF00" />
          <path d="M20.0169 4.37061C18.725 4.53406 14.4327 5.45364 13.7659 5.63752C12.5366 5.94399 8.68188 -2.41253 7.70257 0.693006C5.30639 8.33427 8.59853 7.08814 2.49348 7.59892C-0.00687984 7.80323 -0.04855 8.45703 0.013959 9.64204C0.013959 10.4389 0.305667 10.6021 1.80588 11.5011C8.57769 15.5873 5.61894 12.6248 5.05635 20.1844C5.05635 21.2264 5.5981 21.7167 6.45239 21.4511C8.39017 20.8177 11.4531 15.3217 12.87 16.0368C14.9199 16.7322 17.0065 17.3187 19.1209 17.7939C20.3086 18.1208 20.8086 17.5079 20.6628 16.6089C20.4336 15.1787 18.8292 14.5658 17.2248 11.6645C16.8706 10.9903 16.9539 11.2968 20.9336 6.61804C21.6212 5.75993 21.9338 4.14587 20.0169 4.37061ZM15.4329 12.5431C17.3706 15.8938 18.1624 15.5873 14.391 14.7701C10.0154 13.8098 11.9949 13.524 7.45253 18.0393C6.91079 18.5909 7.55672 16.3433 7.72341 14.2185C7.91094 11.685 2.91021 10.8677 2.18094 9.53971C2.53516 9.53971 1.91007 9.53971 5.11887 9.23325C9.07777 8.90635 7.20249 6.7202 8.93191 3.2469C10.3488 4.43191 11.8073 7.98694 13.0992 7.72133C23.6632 5.31045 13.1409 8.57945 15.4329 12.5431Z" fill="#482005" />
          <path d="M17.7203 28.9938C18.5275 29.2845 16.0731 29.9791 15.0683 30.7221C13.421 31.9173 14.9694 32.9188 14.8376 34.5986C13.5528 34.0656 12.1032 31.3681 10.1924 31.3681C6.74965 32.4988 6.5355 32.9834 5.92601 32.9834C6.12368 31.772 9.02285 29.3168 7.3756 28.0085C6.73317 27.5239 5.13533 25.2142 5.94248 25.3918C9.13815 26.1187 9.12166 26.2641 9.73115 25.8441C12.9433 23.6797 13.0257 20.3523 13.6187 24.9073C14.1293 28.9938 13.0915 27.3786 17.7203 28.9938Z" fill="#FAFF00" />
          <path d="M14.9864 23.4701C14.8546 22.6625 14.591 21.8548 14.4263 21.0633C14.4071 20.872 14.3288 20.6909 14.2026 20.5439C14.0763 20.3969 13.9074 20.2908 13.718 20.2397C13.0756 20.0459 12.9932 20.4011 10.7859 22.9693C8.82566 25.2467 9.99519 24.8591 5.18522 23.6961C4.92029 23.7424 4.66908 23.8461 4.44945 23.9998C4.22981 24.1535 4.04725 24.3532 3.91685 24.5845C3.5874 25.0529 3.62033 25.2306 5.08638 27.5565C6.33829 29.5432 6.73365 29.0587 6.14064 29.9147C3.02734 34.4858 1.62716 35.9879 7.35959 33.9366C10.6541 32.7737 10.5223 32.596 11 33.0644C13.2238 35.2449 16.2877 38.9277 16.4689 35.8426C16.5471 34.6324 16.3563 33.4199 15.9088 32.2891C15.6782 31.1261 20.2081 30.5285 20.4717 28.8648C20.4937 28.7928 20.5005 28.7169 20.4923 28.6421C20.4827 28.5672 20.4594 28.4949 20.4195 28.4298C20.3811 28.3646 20.3303 28.308 20.2672 28.2634C20.2054 28.2187 20.1354 28.1871 20.0599 28.1703C13.7839 25.9897 15.7276 28.122 14.9864 23.4701ZM15.0687 30.6902C13.4215 31.8854 14.9699 32.8867 14.8381 34.5666C13.5533 34.0335 12.1037 31.3361 10.1929 31.3361C6.75013 32.4668 6.53598 32.9513 5.9265 32.9513C6.12417 31.7399 9.02333 29.2849 7.37608 27.9766C6.73365 27.492 5.13581 25.1821 5.94297 25.3598C9.13863 26.0866 9.12215 26.232 9.73163 25.8121C12.9438 23.6477 13.0261 20.3203 13.6192 24.8752C14.1298 28.9779 13.092 27.2981 17.7208 28.9456C18.4785 29.2525 16.1065 29.9472 15.0687 30.6902Z" fill="#482005" />
        </svg>
      </div>
    )
  
}

export default BestDealBadge
