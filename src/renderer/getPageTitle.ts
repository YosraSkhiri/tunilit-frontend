export { getPageTitle }

import type { PageContext } from 'vike/types'

function getPageTitle(pageContext: PageContext): string {
  const val = pageContext.config.title
  if (typeof val === 'string') return val
  if (typeof val === 'function') return val(pageContext)
  return 'Tunilit'
}
