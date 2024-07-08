import { products, sizes, styles } from "@/src/schema";
import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { sql } from "drizzle-orm";

const connection = neon(process.env.DATABASE_URL!);
neonConfig.fetchConnectionCache = true;
export const db = drizzle(connection);

export async function getProduct(id: number) {
  return db
    .select()
    .from(products)
    .where(sql`id = ${id}`);
}

export async function getProducts(num: number) {
  return db.select().from(products).limit(num);
}

export async function getSizesByProduct(id: number) {
  return db
    .select()
    .from(sizes)
    .where(sql`product_id = ${id}`);
}

export async function getStylesByProduct(id: number) {
  return db
    .select()
    .from(styles)
    .where(sql`product_id = ${id}`);
}
