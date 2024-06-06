import { sql as s } from '@vercel/postgres'
import { drizzle } from 'drizzle-orm/vercel-postgres'

import * as schema from './schema'

// Use this object to send drizzle queries to your DB
export const db = drizzle(s, { schema })

export type State = typeof schema.states.$inferSelect
export type Category = typeof schema.schoolCategories.$inferSelect
export type School = typeof schema.schools.$inferInsert

export const tables = {
  schools: schema.schools,
  states: schema.states,
  schoolCategories: schema.schoolCategories,
  schoolsToCategories: schema.schoolsToCategories,
  locations: schema.locations,
  categoryButtonColors: schema.categoryButtonColors,
}