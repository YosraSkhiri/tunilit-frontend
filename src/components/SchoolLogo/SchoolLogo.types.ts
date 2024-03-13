export type schoolLogoSizes =
	| 'xxlarge'
	| 'xlarge'
	| 'large'
	| 'medium'
	| 'small'

export default interface SchoolLogoProps {
	alt?: string
	className?: string,
	size?: schoolLogoSizes,
  src: string
}
