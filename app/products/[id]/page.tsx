"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";

const products = [
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

const displayProduct = {
  id: 1,
  name: "Toronto x Canada",
  price: 100,
  media:
    "https://shopswaywear.ca/cdn/shop/products/toronto.jpg?v=1669244487&width=990",
  sizes: [
    { name: "small", available: 3 },
    { name: "medium", available: 10 },
    { name: "large", available: 5 },
    { name: "xtra large", available: 1 },
    { name: "2x large", available: 20 },
  ],
  styles: [
    { name: "crewneck", price: 100 },
    { name: "hoodie", price: null },
  ],
};

export default function Products({ params }: { params: { slug: string } }) {
  const [currentSize, setCurrentSize] = useState(displayProduct.sizes[0]);
  const [currentStyle, setCurrentStyle] = useState(displayProduct.styles[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <main>
      <Nav />
      <div className="flex flex-col items-center pt-8">
        <div className="!max-w-4xl w-full flex gap-10">
          <div className="min-w-[585px] min-h-[585px]">
            <Image
              src={displayProduct.media}
              alt={displayProduct.name}
              width={0}
              height={0}
              sizes="100vw"
              className="object-cover w-full h-full group-hover:scale-110 transition-transform"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-6 pt-2">
              <h1 className="text-4xl max-w-96">{displayProduct.name}</h1>
              <span>£{displayProduct.price}.00 GBP</span>
            </div>
            <div className="text-xs">
              <Link
                href="/policies/shipping"
                className="underline text-blue-500"
              >
                Shipping
              </Link>{" "}
              calculated at checkout
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs">Size</p>
              <ul className="flex flex-wrap gap-2">
                {displayProduct.sizes.map((size) => (
                  <li
                    key={size.name}
                    className={`flex px-4 py-2 text-sm border border-white border-opacity-65 hover:border-opacity-80 rounded-full cursor-pointer ${currentSize.name === size.name ? "bg-zinc-900" : ""}`}
                    onClick={() => setCurrentSize(size)}
                  >
                    <span>{size.name}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs">Style</p>
              <ul className="flex flex-wrap gap-2">
                {displayProduct.styles.map((style) => (
                  <li
                    key={style.name}
                    className={`flex px-4 py-2 text-sm border border-white border-opacity-65 hover:border-opacity-80 rounded-full cursor-pointer ${currentStyle.name === style.name ? "bg-zinc-900" : ""}`}
                    onClick={() => setCurrentStyle(style)}
                  >
                    <span>{style.name}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs">Quantity</p>
              <div className="flex gap-2 border border-white border-opacity-65 w-fit items-center">
                <button
                  onClick={() => setQuantity(quantity - 1)}
                  disabled={quantity === 1}
                  className="cursor-pointer p-3"
                >
                  -
                </button>
                <span className="w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="cursor-pointer p-3"
                  disabled={quantity === currentSize.available}
                >
                  +
                </button>
              </div>
              <span className="bg-zinc-900 w-full text-center py-3 text-sm mt-4">
                Add to cart
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="!max-w-4xl w-full pt-7 pb-9 flex flex-col gap-10">
          <h1 className="text-xl">You may also like</h1>
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
                    <p className="text-sm">From £{product.price} GBP</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </main>
  );
}
