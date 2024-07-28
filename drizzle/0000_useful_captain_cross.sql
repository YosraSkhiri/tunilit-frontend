CREATE TABLE IF NOT EXISTS "tl_category_button_colors" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(256) NOT NULL,
	"background_color" varchar,
	"text_border_color" varchar
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tl_locations" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"google_map_link" varchar(1024),
	"address" varchar(1024) NOT NULL,
	"state_id" uuid NOT NULL,
	"school_id" uuid NOT NULL,
	"latitude" real NOT NULL,
	"longitude" real NOT NULL,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tl_school_categories" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(256) NOT NULL,
	"category_button_colors_id" uuid,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tl_schools" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(256) NOT NULL,
	"logo_key" varchar(1024) NOT NULL,
	"code" varchar(256),
	"is_verified" boolean,
	"description" text,
	"website" varchar(256),
	"phone" varchar(256),
	"mobile" varchar(256),
	"mail" varchar(256),
	"slug" varchar(256),
	"sm_youtube_link" varchar(256),
	"sm_messenger_link" varchar(256),
	"sm_instagram_link" varchar(256),
	"sm_linkedin_link" varchar(256),
	"sm_facebook_link" varchar(256),
	"sm_whatsup_link" varchar(256),
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp,
	CONSTRAINT "tl_schools_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tl_schools_to_categories" (
	"school_id" uuid NOT NULL,
	"category_id" uuid NOT NULL,
	CONSTRAINT "tl_schools_to_categories_school_id_category_id_pk" PRIMARY KEY("school_id","category_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tl_states" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(256) NOT NULL,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tl_schools_to_categories" ADD CONSTRAINT "tl_schools_to_categories_school_id_tl_schools_id_fk" FOREIGN KEY ("school_id") REFERENCES "public"."tl_schools"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tl_schools_to_categories" ADD CONSTRAINT "tl_schools_to_categories_category_id_tl_school_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."tl_school_categories"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
