import { ProductListLoading } from "@/components/loading/product-list-loading";
import { ProductLoading } from "@/components/loading/product-loading";
import { Product } from "@/components/product";
import { YouMayAlsoLike } from "@/components/you-may-also-like";
import {
  getProduct,
  getSizesByProduct,
  getStylesByProduct,
} from "@/lib/drizzle";
import { ProductType, SizeType, StyleType } from "@/types/types";
import { Suspense } from "react";

export default async function Products({
  params,
}: {
  params: { slug: number };
}) {
  const id = params.slug;
  const product: ProductType[] = await getProduct(id);
  const sizes: SizeType[] = await getSizesByProduct(id);
  const styles: StyleType[] = await getStylesByProduct(id);

  return (
    <main>
      <Suspense fallback={<ProductLoading />}>
        <Product product={product[0]} sizes={sizes} styles={styles} />
      </Suspense>
      <Suspense
        fallback={<ProductListLoading amount={4} title="You may also like" />}
      >
        <YouMayAlsoLike id={id} />
      </Suspense>
    </main>
  );
}
