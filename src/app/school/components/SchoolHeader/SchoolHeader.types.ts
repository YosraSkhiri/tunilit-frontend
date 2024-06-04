type category = {
  backgroundColor?: string,
  category: string,
  textBorderColor?: string
}

export default interface SchoolHeaderProps {
  categories?: Array<category>,
  id: string,
  logoKey?: string,
  name: string
}
