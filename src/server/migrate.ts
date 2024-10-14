/*import { migrate as migrateNode } from 'drizzle-orm/node-postgres/migrator'
import { migrate as migrateVercel } from 'drizzle-orm/vercel-postgres/migrator'

import { env } from '~/env'

import { db } from './db'


export async function dbMigrate() {
	if (env.NODE_ENV === 'production')
		await migrateVercel(db, { migrationsFolder: './drizzle' })
	else await migrateNode(db, { migrationsFolder: './drizzle' })
}
*/