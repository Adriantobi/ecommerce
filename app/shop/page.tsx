import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/src/schema";
import { db } from "@/lib/drizzle";
import { ProductType } from "@/types/types";

export default async function Shop() {
  const result: ProductType[] = await db.select().from(products);

  return (
    <main>
      <div className="flex flex-col items-center">
        <div className="!max-w-4xl w-full pt-7 pb-9 flex flex-col gap-10">
          <h1 className="md:text-4xl text-2xl mg:px-0 md:px-12 px-4">
            Products
          </h1>
          <ul className="mg:px-0 md:px-12 px-4 gap-2 grid mg:grid-cols-4 grid-cols-2">
            {result.map((product) => (
              <li key={product.id}>
                <Link
                  href={`/products/${product.id}`}
                  className="flex gap-7 flex-col cursor-pointer group"
                >
                  <div className="mg:w-[220px] mg:h-[220px] w-full aspect-square overflow-hidden">
                    <Image
                      src={product.media}
                      alt={product.name}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs group-hover:underline">
                      {product.name}
                    </span>
                    <p className="text-sm">From £{product.price}.00 GBP</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
