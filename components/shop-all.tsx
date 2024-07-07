import Image from "next/image";
import Link from "next/link";

const popular = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    media:
      "https://shopswaywear.ca/cdn/shop/files/12095BC4-EBDE-4D7F-B5D7-948707974FD8.jpg?v=1699481558&width=360",
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    media:
      "https://shopswaywear.ca/cdn/shop/files/IMG-0216.jpg?v=1712014943&width=360",
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    media:
      "https://shopswaywear.ca/cdn/shop/files/9B82DD18-F71C-45EB-88F3-7AE4D928B01B.jpg?v=1711067432&width=360",
  },
  {
    id: 4,
    name: "Product 4",
    price: 400,
    media:
      "https://shopswaywear.ca/cdn/shop/files/95F7C3C2-AADB-4452-9CC2-D246965F92B1.jpg?v=1710815922",
  },
];

export function ShopAll() {
  return (
    <div className="flex flex-col items-center">
      <div className="!max-w-4xl w-full pt-7 pb-9 flex flex-col items-center gap-10">
        <div className="w-full flex flex-col gap-10">
          <h1 className="text-xl">Shop All</h1>
          <ul className="flex gap-2">
            {popular.map((product) => (
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
        <span className="flex justify-center items-center h-[48px]">
          <Link
            href="/shop"
            className="border border-zinc-900 px-8 py-3 text-sm cursor-pointer hover:border-2 transition-transform"
          >
            View All
          </Link>
        </span>
      </div>
    </div>
  );
}
