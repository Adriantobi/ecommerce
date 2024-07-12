ALTER TABLE "styles" DROP CONSTRAINT "styles_sizes_sizes_id_fk";
--> statement-breakpoint
ALTER TABLE "styles" ADD COLUMN "size_ids" integer[];--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "styles" ADD CONSTRAINT "styles_size_ids_sizes_id_fk" FOREIGN KEY ("size_ids") REFERENCES "public"."sizes"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "styles" DROP COLUMN IF EXISTS "sizes";