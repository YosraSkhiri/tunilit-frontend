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
  ["tl_category_button_colors"]="/docker-entrypoint-initdb.d/tl_category_button_colors.csv"
  ["tl_school_categories"]="/docker-entrypoint-initdb.d/tl_school_categories.csv"
  ["tl_schools"]="/docker-entrypoint-initdb.d/tl_schools.csv"
  ["tl_schools_to_categories"]="/docker-entrypoint-initdb.d/tl_schools_to_categories.csv"
  ["tl_locations"]="/docker-entrypoint-initdb.d/tl_locations.csv"
)

# Define the order of tables for data insertion
ORDER_OF_INSERTION=("tl_states" "tl_category_button_colors" "tl_school_categories" "tl_schools" "tl_schools_to_categories" "tl_locations")

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

for TABLE_NAME in "${ORDER_OF_INSERTION[@]}"; do
  CSV_FILE="${TABLES_CSV_FILES[$TABLE_NAME]}"

  echo "Inserting data into $TABLE_NAME from $CSV_FILE..."
  # Run the COPY command to import data from the CSV file into the PostgreSQL table
  psql -h $DB_HOST -p $DB_PORT -U $DB_USER -d $DB_NAME -c "\COPY $TABLE_NAME FROM '$CSV_FILE' DELIMITER ',' CSV HEADER"
done

unset PGPASSWORD

echo "Data imported successfully into all tables."
