import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { ProductListLoading } from "@/components/loading/product-list-loading";
import { MostPopular } from "@/components/most-popular";
import { Nav } from "@/components/nav";
import { ShopAll } from "@/components/shop-all";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Hero />
      <Suspense
        fallback={<ProductListLoading amount={4} title="Most Popular" />}
      >
        <MostPopular />
      </Suspense>

      <Suspense fallback={<ProductListLoading amount={4} title="Shop All" />}>
        <ShopAll />
      </Suspense>
    </main>
  );
}
