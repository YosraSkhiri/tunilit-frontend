import { OptionType } from '~/components/Autocomplete/Autocomplete.types'

export default interface HeaderFormProps {
	categoryOptions: Array<OptionType>
	handleSearch: ({
		categories,
		states,
	}: {
		categories: Array<string>
		states: Array<string>
	}) => void
	stateOptions: Array<OptionType>
}
