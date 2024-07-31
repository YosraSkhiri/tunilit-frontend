#!/bin/bash

# Define the connection parameters
DB_NAME=$POSTGRES_DB
DB_USER=$POSTGRES_USER
DB_PASSWORD=$POSTGRES_PASSWORD
DB_HOST=$DB_HOST
DB_PORT=$DB_PORT
TABLE_NAME="tl_states"
SQL_FILE="/docker-entrypoint-initdb.d/create_tables.sql"

declare -A TABLES_CSV_FILES
TABLES_CSV_FILES=(
  ["tl_states"]="/docker-entrypoint-initdb.d/tl_states.csv"
)

# Export the password so psql can use it
export PGPASSWORD=$DB_PASSWORD

check_db_connection() {
  PGPASSWORD=$DB_PASSWORD psql -h $DB_HOST -U $DB_USER -d $DB_NAME -c '\q' > /dev/null 2>&1
  return $?
}

until check_db_connection; do
  echo "Waiting for database connection..."
  sleep 2
done

echo "Database connected. Creating tables..."

psql -h $DB_HOST -p $DB_PORT -U $DB_USER -d $DB_NAME -f $SQL_FILE


for TABLE_NAME in "${!TABLES_CSV_FILES[@]}"; do
  CSV_FILE="${TABLES_CSV_FILES[$TABLE_NAME]}"

  echo "Inserting data into $TABLE_NAME from $CSV_FILE..."
  # Run the COPY command to import data from the CSV file into the PostgreSQL table
  psql -h $DB_HOST -p $DB_PORT -U $DB_USER -d $DB_NAME -c "\COPY $TABLE_NAME FROM '$CSV_FILE' DELIMITER ',' CSV HEADER;"
done

unset PGPASSWORD

echo "Data imported successfully into all tables."
