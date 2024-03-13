export default interface ChipProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: string,
  color?: string,
  size?: 'md' | 'sm',
}
