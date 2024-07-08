"use client";

import { Footer } from "@/components/footer";
import { ProductListLoading } from "@/components/loading/product-list-loading";
import { ProductLoading } from "@/components/loading/product-loading";
import { Nav } from "@/components/nav";
import { Product } from "@/components/product";
import { YouMayAlsoLike } from "@/components/you-may-also-like";
import { SizeType, StyleType } from "@/types/types";
import { Suspense, useEffect, useState } from "react";

export default function Products({ params }: { params: { slug: number } }) {
  const [currentSize, setCurrentSize] = useState<SizeType | null>(null);
  const [currentStyle, setCurrentStyle] = useState<StyleType | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [id, setId] = useState<number>(params.slug);

  useEffect(() => {
    if (typeof params.slug !== "number") return;
    if (params.slug < 1) return;
    setId(params.slug);
  }, [params.slug]);

  return (
    <main>
      <Suspense fallback={<ProductLoading />}>
        <Product
          id={id}
          currentSize={currentSize}
          currentStyle={currentStyle}
          setCurrentSize={setCurrentSize}
          setCurrentStyle={setCurrentStyle}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      </Suspense>
      <Suspense
        fallback={<ProductListLoading amount={4} title="You may also like" />}
      >
        <YouMayAlsoLike id={id} />
      </Suspense>
    </main>
  );
}
