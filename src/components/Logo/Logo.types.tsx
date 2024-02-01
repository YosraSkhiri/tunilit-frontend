export default interface LogoProps {
  iconWidth?: number,
  iconHeight?: number,
  textWidth?: number,
  eyes?: 'open' | 'closed' | 'wink',
  onlyIcon?: boolean,
  lightText?: boolean,
  link?: boolean,
  animate?: boolean,
  classname?: string,
}

export interface EyeProps {
  closed?: boolean, 
  animate?: boolean,
  side: 'left' | 'right',
}
