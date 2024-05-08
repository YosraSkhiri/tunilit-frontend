export default interface LogoProps {
  animate?: boolean,
  className?: string,
  eyes?: 'open' | 'closed' | 'wink',
  iconHeight?: number,
  iconWidth?: number,
  lightText?: boolean,
  link?: boolean,
  onlyIcon?: boolean,
  textWidth?: number
}

export interface EyeProps {
  animate?: boolean, 
  closed?: boolean,
}
