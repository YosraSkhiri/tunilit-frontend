#!/bin/bash

set -e

# Wait for the app to create the tables
sleep 10

# Loop through and execute each SQL file in the /scripts/sql directory
for sql_file in /scripts/sql/*.sql; do
  echo "Executing $sql_file..."
  PGPASSWORD=$POSTGRES_PASSWORD psql -h "$DB_HOST" -U "$POSTGRES_USER" -d "$POSTGRES_DB" -f "$sql_file"
done

echo "Data initialization complete"