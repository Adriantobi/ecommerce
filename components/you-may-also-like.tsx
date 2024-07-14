import Image from "next/image";
import Link from "next/link";
import { getProducts, getRandProducts } from "@/lib/drizzle";
import { ProductType } from "@/types/types";

export async function YouMayAlsoLike({ id }: { id: number }) {
  const productList: ProductType[] = await getRandProducts(4, id);

  return (
    <div className="flex flex-col items-center">
      <div className="!max-w-4xl w-full pt-7 pb-9 flex flex-col mg:gap-10 gap-6">
        <h1 className="mg:text-xl mg:px-0 md:px-12 px-4 text-lg">
          You may also like
        </h1>
        <ul className="mg:flex mg:px-0 md:px-12 px-4 gap-2 grid grid-cols-2">
          {productList.map((product) => (
            <li key={product?.id}>
              <Link
                href={`/products/${product?.id}`}
                className="flex gap-7 flex-col cursor-pointer group"
              >
                <div className="mg:w-[220px] mg:h-[220px] w-full aspect-square overflow-hidden">
                  <Image
                    src={product?.media}
                    alt={product?.name}
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
                  <p className="text-sm">From £{product?.price}.00 GBP</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
