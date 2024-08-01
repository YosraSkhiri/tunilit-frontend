import { sql as sqlVercel } from '@vercel/postgres'
import { drizzle as drizzleNode } from 'drizzle-orm/node-postgres';
import { migrate as migrateNode } from 'drizzle-orm/node-postgres/migrator';
import { drizzle as drizzleVercel } from 'drizzle-orm/vercel-postgres';
import { migrate as migrateVercel } from 'drizzle-orm/vercel-postgres/migrator';
import { Pool } from 'pg';

import { env } from '~/env';

import * as schema from './schema'

export const db =
  env.NODE_ENV === 'production'
    ? drizzleVercel(sqlVercel)
    : drizzleNode(new Pool({ connectionString: env.POSTGRES_URL }));
  
  export async function dbMigrate() {
    console.log("dbMigrate")
    if (env.NODE_ENV === 'production')
      await migrateVercel(db, { migrationsFolder: './drizzle' });
    else await migrateNode(db, { migrationsFolder: './drizzle' });
  }

//await dbMigrate();

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
