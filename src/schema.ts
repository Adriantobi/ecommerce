import { serial, text, pgTable, integer, real } from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  price: integer("price").notNull(),
  media: text("media").notNull(),
});

export const sizes = pgTable("sizes", {
  id: serial("id").primaryKey(),
  product_id: integer("product_id")
    .notNull()
    .references(() => products.id),
  name: text("name").notNull(),
  available: integer("available").notNull(),
});

export const styles = pgTable("styles", {
  id: serial("id").primaryKey(),
  product_id: integer("product_id")
    .notNull()
    .references(() => products.id),
  name: text("name").notNull(),
  price: real("price").$type<number | null>(),
});

export const comment = pgTable("comment", {
  id: serial("id").primaryKey(),
  name: text("name"),
  phone: text("phone"),
  email: text("email").notNull(),
  message: text("message").notNull(),
});
