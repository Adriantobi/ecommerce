export type SizeType = { id: number; name: string; available: number };

export type StyleType = { id: number; name: string; price: number | null };

export type ProductType = {
  id: number;
  price: number;
  media: string;
  name: string;
};

export type cartItemType = {
  product: ProductType;
  size: SizeType;
  style: StyleType;
  quantity: number;
};

export type cartType = cartItemType[];
