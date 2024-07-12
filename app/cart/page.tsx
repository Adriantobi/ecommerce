import { CartTable } from "@/components/cart-table";
import { ProductListLoading } from "@/components/loading/product-list-loading";
import { ShopAll } from "@/components/shop-all";
import { Suspense } from "react";

export default function Cart() {
  return (
    <main>
      <div className="flex flex-col items-center">
        <CartTable />
      </div>
      <Suspense fallback={<ProductListLoading amount={4} title="Featured" />}>
        <ShopAll title="Featured" />
      </Suspense>
    </main>
  );
}
