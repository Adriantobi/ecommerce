"use client";

import { cartType } from "@/types/types";
import { Trash2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export function CartTable() {
  const [cart, setCart] = useState<cartType>([] as cartType);

  const changeQuantity = (index: number, quantity: number) => {
    if (quantity <= 0) {
      removeItem(index);
      return;
    }

    const updatedCart = cart.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          quantity: quantity,
        };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("storage"));
  };

  const removeItem = (index: number) => {
    const updatedCart = cart.filter((item, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("storage"));
  };

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart") ?? "[]"));
  }, []);

  return (
    <div
      className={`!max-w-4xl w-full pt-14 pb-9 flex flex-col gap-10 ${cart.length > 0 ? "" : "items-center"}`}
    >
      {cart.length > 0 ? (
        <>
          <span className="flex justify-between items-end">
            <h1 className="text-4xl">Your cart</h1>
            <Link
              href="/shop"
              className="text-sm cursor-pointer hover:underline transition-transform"
            >
              Continue Shopping
            </Link>
          </span>
          <table className="w-full">
            <thead className="border-b borderb-white border-opacity-15">
              <tr className="h-10">
                <th className="text-left text-xs w-full font-normal text-opacity-65">
                  PRODUCT
                </th>
                <th className="text-left text-xs font-normal text-opacity-65">
                  QUANTITY
                </th>
                <th className="text-right text-xs font-normal text-opacity-65">
                  TOTAL
                </th>
              </tr>
            </thead>
            <tbody className="border-b borderb-white border-opacity-15">
              {cart.map((item, index) => {
                return (
                  <tr key={index} className="h-40">
                    <td>
                      <span className="flex gap-10">
                        <div className="max-w-[90px] max-h-[90px] h-full w-full overflow-hidden">
                          <Image
                            src={item.product.media}
                            alt={item.product.name}
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="flex flex-col justify-between">
                          <h2 className="text-sm hover:underline w-fit">
                            <Link href={`/products/${item.product.id}`}>
                              {item.product.name}
                            </Link>
                          </h2>
                          <p className="text-xs">
                            {item.style?.price
                              ? `£${item.style.price}.00 GBP`
                              : `£${item.product.price}.00 GBP`}
                          </p>
                          <p className="text-xs">
                            {`Style: ${item.style?.name}` ?? "No style"}
                          </p>
                          <p className="text-xs">
                            {`Size: ${item.size?.name}` ?? "No size"}
                          </p>
                        </div>
                      </span>
                    </td>
                    <td>
                      <span className="flex gap-4 items-center w-fit pr-6">
                        <div className="flex gap-2 border border-white border-opacity-65 w-fit items-center">
                          <button
                            className="cursor-pointer py-3 px-5"
                            disabled={
                              item.quantity === 1 || !item.size?.available
                            }
                            onClick={() =>
                              changeQuantity(index, item.quantity - 1)
                            }
                          >
                            -
                          </button>
                          <span className="w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            className="cursor-pointer py-3 px-5"
                            disabled={
                              item.quantity === item.size?.available ||
                              !item.size?.available
                            }
                            onClick={() =>
                              changeQuantity(index, item.quantity + 1)
                            }
                          >
                            +
                          </button>
                        </div>
                        <Trash2Icon
                          className="cursor-pointer"
                          onClick={() => removeItem(index)}
                          strokeWidth={1}
                          size={16}
                        />
                      </span>
                    </td>
                    <td className="text-right text-sm text-nowrap">
                      £
                      {item.style?.price
                        ? item.style?.price * item.quantity
                        : item.product.price * item.quantity}
                      .00
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      ) : (
        <>
          <h1 className="text-4xl">Your cart is empty</h1>
          <span className="flex justify-center items-center h-[48px]">
            <Link
              href="/shop"
              className="border border-zinc-900 px-8 py-3 text-sm cursor-pointer hover:border-2 transition-transform"
            >
              Continue Shopping
            </Link>
          </span>
        </>
      )}
    </div>
  );
}
