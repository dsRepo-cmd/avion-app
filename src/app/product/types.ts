import { Types } from "mongoose";

export interface ProductListing {
  _id: string;
  name: string;
  price: number;
  imageSrc: string;
  description?: string;
}

export enum ProductType {
  Furniture = "Furniture",
  Accessories = "Accessories",
  LightFittings = "Light fittings",
  Sofas = "Sofas",
  Homeware = "Homeware",
}

export enum ProductCategory {
  PlantPots = "Plant pots",
  Ceramics = "Ceramics",
  Tables = "Tables",
  Tableware = "Tableware",
  Cutlery = "Cutlery",
  Chairs = "Chairs",
  Crockery = "Crockery",
}

export interface Product {
  _id: Types.ObjectId;
  name: string;
  description: string;
  price: number;
  designer: string;
  productType: ProductType;
  category: ProductCategory;
  height: number;
  width: number;
  depth: number;
  brand: string;
  imageSrc: string;
  views: number;
  dateAdded: Date;
}

export enum SortOrder {
  asc = "asc",
  desc = "desc",
}
export enum SortBy {
  price = "price",
  dateAdded = "dateAdded",
  views = "views",
}

export interface SearchParams {
  category: string;
  productType: string;
  brand: string;
  sortBy: SortBy;
  sortOrder: SortOrder;
  page: string;
  limit: string;
  priceRange: string;
  designer: string;
}

export interface ICartProduct {
  product: ProductListing;
  quantity: number;
}
export interface ICartBase {
  id: string;
  userEmail: string;
  products: ICartProduct[];
  totalPrice: number;
  status: "active" | "completed" | "canceled";
}
