import { OptionType } from '~/components/Autocomplete/Autocomplete.types'

import ButtonProps from '../Button/Button.types'

export default interface SearchFormProps {
	buttonProps?: ButtonProps,
	categoryOptions: Array<OptionType>,
	className?: string,
  selectedCategories?: Array<string>,
  selectedStates?: Array<string>,
	stateOptions: Array<OptionType>
}
