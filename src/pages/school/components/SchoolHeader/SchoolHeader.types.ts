type category = {
  backgroundColor?: string | null,
  category: string | null,
  textBorderColor?: string | null
}

export default interface SchoolHeaderProps {
  categories?: Array<category>,
  id: string,
  logoKey?: string,
  name: string
}
