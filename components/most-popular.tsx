import { getRandProducts } from "@/lib/drizzle";
import { ProductType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

export async function MostPopular() {
  const products: ProductType[] = await getRandProducts(4);

  return (
    <div className="flex flex-col items-center">
      <div className="!max-w-4xl w-full pt-7 pb-9 flex flex-col gap-10">
        <h1 className="text-xl">Most Popular</h1>
        <ul className="flex gap-2">
          {products.map((product) => (
            <li key={product.id}>
              <Link
                href={`/products/${product.id}`}
                className="flex gap-7 flex-col cursor-pointer group"
              >
                <div className="w-[220px] h-[220px] overflow-hidden">
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
                  <Link
                    href={`/products/${product.id}`}
                    className={`text-xs group-hover:underline`}
                  >
                    {product.name}
                  </Link>
                  <p className="text-sm">From £{product.price}.00 GBP</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
