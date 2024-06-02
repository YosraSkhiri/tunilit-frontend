export { getPageDescription }

import type { PageContext } from 'vike/types'

function getPageDescription(pageContext: PageContext): string {
  const val = pageContext.config.description
  if (typeof val === 'string') return val
  if (typeof val === 'function') return val(pageContext)
  return 'Tunilit'
}