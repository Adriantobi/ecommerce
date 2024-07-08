import {
  getProduct,
  getSizesByProduct,
  getStylesByProduct,
} from "@/lib/drizzle";
import { ProductType, SizeType, StyleType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

type ProductProps = {
  id: number;
  currentSize: SizeType | null;
  currentStyle: StyleType | null;
  setCurrentSize: (size: SizeType) => void;
  setCurrentStyle: (style: StyleType) => void;
  quantity: number;
  setQuantity: (quantity: number) => void;
};

export async function Product({
  id,
  currentSize,
  currentStyle,
  setCurrentSize,
  setCurrentStyle,
  quantity,
  setQuantity,
}: ProductProps) {
  const product: ProductType[] = await getProduct(id);
  const sizes: SizeType[] = await getSizesByProduct(id);
  const styles: StyleType[] = await getStylesByProduct(id);

  return (
    <div className="flex flex-col items-center pt-8">
      <div className="!max-w-4xl w-full flex gap-10">
        <div className="min-w-[585px] min-h-[585px] max-w-[585px] max-h-[585px]">
          {product[0]?.media && (
            <Image
              src={product[0].media}
              alt={product[0].name}
              width={0}
              height={0}
              sizes="100vw"
              className="object-cover w-full h-full group-hover:scale-110 transition-transform"
            />
          )}
        </div>
        <div className="flex flex-col gap-3 w-full">
          <div className="flex flex-col gap-6 pt-2">
            <h1 className="text-4xl max-w-96">{product[0]?.name}</h1>
            <span>£{currentStyle?.price ?? product[0]?.price}.00 GBP</span>
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
              {sizes?.map((size) => (
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
                disabled={quantity === currentSize?.available}
              >
                +
              </button>
            </div>
            <span className="bg-zinc-900 w-full text-center py-3 text-sm mt-4 cursor-pointer">
              Add to cart
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
