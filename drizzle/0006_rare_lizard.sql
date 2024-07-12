ALTER TABLE "styles" ALTER COLUMN "sizes" SET DATA TYPE integer[];--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "styles" ADD CONSTRAINT "styles_sizes_sizes_id_fk" FOREIGN KEY ("sizes") REFERENCES "public"."sizes"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
