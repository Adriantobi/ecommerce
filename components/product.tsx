"use client";

import { cartItemType, ProductType, SizeType, StyleType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

type ProductProps = {
  product: ProductType;
  sizes: SizeType[];
  styles: StyleType[];
};

export function Product({ product, sizes, styles }: ProductProps) {
  const [quantity, setQuantity] = useState(1);
  const [availableSizes, setAvailableSizes] = useState<SizeType[]>([]);
  const [currentSize, setCurrentSize] = useState<SizeType | null>(sizes[0]);
  const [currentStyle, setCurrentStyle] = useState<StyleType | null>(styles[0]);

  useEffect(() => {
    setQuantity(1);
  }, [currentSize, currentStyle]);

  useEffect(() => {
    //whe currentStyle changes, set availableSizes to the sizes that are available for the current style and set currentSize to the first available size
    if (currentStyle) {
      const availableSizes = sizes.filter((size) =>
        currentStyle?.size_ids?.includes(size.id),
      );
      setAvailableSizes(availableSizes);
      setCurrentSize(availableSizes[0]);
    }
  }, [currentStyle, sizes]);

  const addProductToCart = () => {
    const productToAdd = {
      product: product,
      size: currentSize,
      style: currentStyle,
      quantity: quantity,
    };

    const currentCart = JSON.parse(localStorage.getItem("cart") ?? "[]");

    const productIndex = currentCart.findIndex(
      (item: cartItemType) =>
        item.product.id === product.id &&
        item.size.id === currentSize?.id &&
        item.style.id === currentStyle?.id,
    );

    if (productIndex !== -1) {
      if (
        currentSize?.available &&
        currentCart[productIndex].quantity + quantity > currentSize?.available
      ) {
        currentCart[productIndex].quantity = currentSize?.available;
        localStorage.setItem("cart", JSON.stringify(currentCart));
        return;
      }

      currentCart[productIndex].quantity += quantity;
      localStorage.setItem("cart", JSON.stringify(currentCart));
      return;
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify([...currentCart, productToAdd]),
      );
    }

    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className="flex flex-col items-center pt-8">
      <div className="!max-w-4xl w-full mg:flex md:grid md:grid-cols-2 flex md:flex-row flex-col gap-10 mg:px-0 md:px-12 px-4">
        <div className="mg:min-w-[585px] mg:min-h-[585px] mg:max-w-[585px] mg:max-h-[585px] w-full aspect-square overflow-hidden">
          {product?.media && (
            <Image
              src={product.media}
              alt={product.name}
              width={0}
              height={0}
              sizes="100vw"
              className="object-cover w-full h-full group-hover:scale-110 transition-transform"
            />
          )}
        </div>
        <div className="flex flex-col gap-3 w-full">
          <div className="flex flex-col gap-6 pt-2">
            <h1 className="text-4xl max-w-96">{product?.name}</h1>
            <span>£{currentStyle?.price ?? product?.price}.00 GBP</span>
          </div>
          <div className="text-xs">
            <Link href="/policies/shipping" className="underline text-blue-500">
              Shipping
            </Link>{" "}
            calculated at checkout
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xs">Size</p>
            <ul className="flex flex-wrap gap-2">
              {availableSizes?.map((size) => (
                <li
                  key={size.id}
                  className={`flex px-4 py-2 text-sm border border-white border-opacity-65 hover:border-opacity-80 rounded-full cursor-pointer ${currentSize?.name === size.name ? "bg-zinc-900" : ""}`}
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
              {styles?.map((style) => (
                <li
                  key={style.id}
                  className={`flex px-4 py-2 text-sm border border-white border-opacity-65 hover:border-opacity-80 rounded-full cursor-pointer ${currentStyle?.name === style.name ? "bg-zinc-900" : ""}`}
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
                onClick={() => {
                  if (currentSize?.available) {
                    setQuantity(quantity - 1);
                  }
                }}
                disabled={quantity === 1 || !currentSize?.available}
                className="cursor-pointer py-3 px-5"
              >
                -
              </button>
              <span className="w-8 text-center">{quantity}</span>
              <button
                onClick={() => {
                  if (currentSize?.available) {
                    setQuantity(quantity + 1);
                  }
                }}
                className="cursor-pointer py-3 px-5"
                disabled={
                  quantity === currentSize?.available || !currentSize?.available
                }
              >
                +
              </button>
            </div>
            <span
              className="bg-zinc-900 w-full text-center py-3 text-sm mt-4 cursor-pointer"
              onClick={() => {
                if (currentSize && currentStyle) {
                  addProductToCart();
                }
              }}
            >
              Add to cart
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
