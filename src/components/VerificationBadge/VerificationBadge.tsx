import VerificationBadgeProps from './VerificationBadge.types.ts'

const VerificationBadge = ({ size = 'md' }: VerificationBadgeProps) => {
  const badgeSize = {
    width: size === 'lg' ? 30 : size === 'md' ? 24 : 16,
    hight: size === 'lg' ? 30 : size === 'md' ? 24 : 16,
  }

  return (
    <svg fill="none" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" {...badgeSize}>
      <path
        d="M26.7511 19.8758C26.4161 20.0676 26.2329 20.445 26.2894 20.8268C26.3022 20.913 26.3145 21.1015 26.3145 21.4277C26.3145 22.782 25.8689 23.8971 24.9836 24.8317C24.0946 25.7698 23.061 26.2148 21.832 26.2148C21.2818 26.2148 20.7637 26.114 20.2759 25.9151C19.8189 25.7288 19.2957 25.9286 19.0793 26.3722C18.6828 27.185 18.1195 27.831 17.3733 28.3301L17.3733 28.3301L17.3674 28.3341C16.6452 28.8252 15.8623 29.0625 15 29.0625C14.1057 29.0625 13.3176 28.8264 12.6128 28.3502L12.6128 28.3501L12.6067 28.3461C11.881 27.8639 11.3235 27.2179 10.9246 26.3801C10.7109 25.9315 10.1843 25.7275 9.72414 25.9151C9.23584 26.1142 8.72351 26.2148 8.16797 26.2148C6.93867 26.2148 5.89724 25.7693 4.9953 24.828L4.99359 24.8262C4.0955 23.8938 3.65039 22.7759 3.65039 21.4277C3.65039 21.3172 3.66652 21.1228 3.70706 20.81C3.75566 20.4351 3.57437 20.0677 3.24729 19.8782C2.55011 19.4744 1.99302 18.9076 1.56711 18.1556C1.1496 17.4082 0.9375 16.5942 0.9375 15.7031C0.9375 14.7554 1.17478 13.8977 1.64134 13.1218C2.10637 12.3483 2.71929 11.7922 3.48427 11.4289C3.92232 11.2208 4.12938 10.713 3.96173 10.2579C3.75169 9.68783 3.65039 9.12351 3.65039 8.57227C3.65039 7.22413 4.0955 6.10625 4.99359 5.17379C5.89784 4.23496 6.94084 3.78516 8.16797 3.78516C8.7182 3.78516 9.23634 3.88599 9.72414 4.0849C10.1811 4.27125 10.7043 4.07139 10.9207 3.62782C11.3172 2.81502 11.8805 2.16898 12.6267 1.66988L12.6291 1.66827C13.356 1.17882 14.141 0.9375 15 0.9375C15.8586 0.9375 16.6445 1.17864 17.3727 1.6636C18.116 2.16455 18.6842 2.81196 19.0793 3.62196C19.2957 4.06553 19.8189 4.26539 20.2759 4.07904C20.7642 3.87993 21.2765 3.7793 21.832 3.7793C23.061 3.7793 24.0946 4.22436 24.9836 5.16244C25.8739 6.1019 26.3145 7.21657 26.3145 8.56641C26.3145 9.2096 26.2177 9.76579 26.0384 10.2517C25.8705 10.7068 26.0775 11.2149 26.5157 11.423C27.2803 11.7862 27.8931 12.342 28.358 13.1148C28.8257 13.898 29.0625 14.7563 29.0625 15.7031C29.0625 16.5949 28.8501 17.4078 28.4282 18.1536C28.0005 18.9094 27.443 19.4797 26.7511 19.8758Z" 
        fill="#5CDBFF" 
        stroke="#008FB6" 
        strokeLinejoin="round" 
        strokeWidth="1.875" 
      />
      <path 
        clipRule="evenodd" 
        d="M20.8321 9.25208C21.5213 9.71161 21.7076 10.6429 21.2481 11.3322L15.2481 20.3322C14.9988 20.7061 14.595 20.9486 14.1478 20.9929C13.7006 21.0371 13.2571 20.8786 12.9393 20.5608L9.43934 17.0608C8.85355 16.475 8.85355 15.5253 9.43934 14.9395C10.0251 14.3537 10.9749 14.3537 11.5607 14.9395L13.7669 17.1457L18.7519 9.66811C19.2115 8.97882 20.1428 8.79256 20.8321 9.25208Z" fill="#F2ECE6" 
        fillRule="evenodd" 
        stroke="#008FB6" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="1.6"
      />
    </svg>
  )
}

export default VerificationBadge