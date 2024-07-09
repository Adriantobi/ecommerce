import { products, sizes, styles } from "@/src/schema";
import { neonConfig, Pool } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import { eq, sql } from "drizzle-orm";

const pool = new Pool({
  connectionString:
    "postgresql://ecommerce_owner:HT0Bcvsl3Xby@ep-weathered-bush-a20x66qn-pooler.eu-central-1.aws.neon.tech/ecommerce?sslmode=require",
});
export const db = drizzle(pool);

export async function getProduct(id: number) {
  return db.select().from(products).where(eq(products.id, id));
}

export async function getProducts(limit: number = 25, offset: number = 0) {
  return db.select().from(products).limit(limit).offset(offset);
}

export async function getRandProducts(limit: number = 4, exclude: number = 0) {
  return db
    .select()
    .from(products)
    .orderBy(sql`RANDOM()`)
    .limit(limit)
    .where(sql`id != ${exclude}`);
}

export async function getSizesByProduct(id: number) {
  return db.select().from(sizes).where(eq(sizes.product_id, id));
}

export async function getStylesByProduct(id: number) {
  return db.select().from(styles).where(eq(styles.product_id, id));
}
