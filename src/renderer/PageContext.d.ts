type category = {
  id?: string,
  label: string,
  name: string
}
import type { School } from '~/server/db'

declare global {
  namespace Vike {
    interface PageContext {
      // Refine type of pageContext.Page (it's `unknown` by default)
      Page: () => JSX.Element,
      // Type of pageContext.user
      abortReason?:
        | string
        | { notAdmin: true },
      config?: {
        description?: string | ((pageContext) => string),
        title?: string | ((pageContext) => string),
      },
      data?: {
        description?: string,
        school?: {
          data?: School
        },
        schoolCategories?: Array<category>,
        title?: string
      },
      
    }
  }
}
 
// If you define Vike.PageContext in a .d.ts file then
// make sure there is at least one export/import statment.
// Tell TypeScript this file isn't an ambient module:
export {}