import type { PageContextServer } from 'vike/types'

export default (pageContext: PageContextServer) =>
	'Tunilit - ' + pageContext?.data?.school?.data?.name || 'Tunilit'
