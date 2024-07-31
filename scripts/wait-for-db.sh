#!/bin/bash

set -e

host="$1"
shift
cmd="$@"

# Function to check if the database has tables
check_db_tables() {
  PGPASSWORD=$POSTGRES_PASSWORD psql -h "$host" -U "$POSTGRES_USER" -d "$POSTGRES_DB" -t -c "SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' LIMIT 1;"
}

# Wait until PostgreSQL is available
until PGPASSWORD=$POSTGRES_PASSWORD psql -h "$host" -U "$POSTGRES_USER" -d "$POSTGRES_DB" -c '\q'; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done

# Wait until the database has tables
until [ "$(check_db_tables)" -eq 1 ]; do
  >&2 echo "Database has no tables - sleeping"
  sleep 1
done

>&2 echo "Postgres is up and has tables - executing command"
exec $cmd
