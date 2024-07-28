import { sql as sqlVercel } from '@vercel/postgres'
import { sql } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/vercel-postgres'

import { env } from '~/env';

import { eq, sql as sqlDrizzle } from 'drizzle-orm';
import { drizzle as drizzleNode } from 'drizzle-orm/node-postgres';
import { drizzle as drizzleVercel } from 'drizzle-orm/vercel-postgres';
import { migrate as migrateNode } from 'drizzle-orm/node-postgres/migrator';
import { migrate as migrateVercel } from 'drizzle-orm/vercel-postgres/migrator';

import { Pool } from 'pg';

import * as schema from './schema'
//export const db = drizzle(s, { schema });

console.log('process.env.NODE_ENV', process.env.NODE_ENV);
console.log('process.env.POSTGRES_URL', process.env.POSTGRES_URL);

export const db =
  process.env.NODE_ENV === 'production'
    ? drizzleVercel(sqlVercel)
    : drizzleNode(new Pool({ connectionString: process.env.POSTGRES_URL }));
  
  export async function dbMigrate() {
    if (process.env.NODE_ENV === 'production')
      await migrateVercel(db, { migrationsFolder: './drizzle' });
    else await migrateNode(db, { migrationsFolder: './drizzle' });
  }

await dbMigrate();

(async () => {
  try {
    const result = db.execute(sql`SELECT now()`);
    console.log('Database connection successful:', result);
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
})();

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
