export type schoolLogoSizes =
	| 'xxlarge'
	| 'xlarge'
	| 'large'
	| 'medium'
	| 'small'

export default interface SchoolLogoProps {
	active?: boolean,
	alt?: string,
	ambientMode?: boolean,
  className?: string,
  size?: schoolLogoSizes,
  src: string,
}
