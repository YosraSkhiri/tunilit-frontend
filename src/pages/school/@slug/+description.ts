import type { PageContextServer } from 'vike/types'

export default (pageContext: PageContextServer) =>
	'Explore ' + pageContext?.data?.school?.data?.name + ' training school' || 'Tunilit'
