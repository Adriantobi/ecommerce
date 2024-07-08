import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { ProductListLoading } from "@/components/loading/product-list-loading";
import { MostPopular } from "@/components/most-popular";
import { Nav } from "@/components/nav";
import { ShopAll } from "@/components/shop-all";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<ProductListLoading amount={4} title="Featured" />}>
        <div className="flex flex-col items-center">
          <div className="!max-w-4xl w-full pt-14 pb-9 flex flex-col gap-10 items-center">
            <h1 className="text-4xl">Your cart is empty</h1>
            <span className="flex justify-center items-center h-[48px]">
              <Link
                href="/shop"
                className="border border-zinc-900 px-8 py-3 text-sm cursor-pointer hover:border-2 transition-transform"
              >
                Continue Shopping
              </Link>
            </span>
          </div>
        </div>
        <ShopAll title="Featured" />
      </Suspense>
    </main>
  );
}
