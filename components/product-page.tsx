"use client";

import { SizeType, StyleType } from "@/types/types";
import { Suspense, useState } from "react";
import { Product } from "./product";
import { YouMayAlsoLike } from "./you-may-also-like";

export function ProductPage({ id }: { id: number }) {
  const [currentSize, setCurrentSize] = useState<SizeType | null>(null);
  const [currentStyle, setCurrentStyle] = useState<StyleType | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
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
      <Suspense fallback={<div>Loading...</div>}>
        <YouMayAlsoLike />
      </Suspense>
    </>
  );
}
