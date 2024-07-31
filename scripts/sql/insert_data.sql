-- Create a staging table to load JSON data
CREATE TABLE staging_tl_states (
    json_data TEXT
);

CREATE TABLE IF NOT EXISTS "tl_states" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(256) NOT NULL,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp
);

-- Use \copy in a psql script to import the JSON data into the staging table
-- Note: The \copy command should be executed within psql session and not in SQL script directly.

-- Insert data from the staging table into the final table
DO $$
DECLARE
  record_data JSON;
BEGIN
  -- Read the JSON data from the staging table
  FOR record_data IN
    SELECT json_array_elements(json_data::json) AS record
    FROM staging_tl_states
  LOOP
    -- Insert the data into the table
    INSERT INTO tl_states
    SELECT * FROM json_populate_record(NULL::tl_states, record_data);
  END LOOP;
END $$;

-- Drop the staging table if no longer needed
DROP TABLE staging_tl_states;
