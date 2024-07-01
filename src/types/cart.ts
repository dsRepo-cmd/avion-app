import type { ProductListing } from "./product";

export interface CartData {
  error?: string;
  message?: string;
  cart: CartBase;
}

export interface CartProduct {
  product: ProductListing;
  quantity: number;
}

export interface CartBase {
  userIdentifier: string;
  id: string;
  products: CartProduct[];
  totalPrice: number;
  status: string;
}
