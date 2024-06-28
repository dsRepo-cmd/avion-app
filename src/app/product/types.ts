export interface ProductListing {
  _id: string;
  name: string;
  price: number;
  imageSrc: string;
  description?: string;
}

export enum SortCategory {
  ProductType = "productType",
  PriceRange = "priceRange",
  Designer = "designer",
  ProductCategory = "productCategory",
}

export enum ProductType {
  Furniture = "Furniture",
  Accessories = "Accessories",
  LightFittings = "Light fittings",
  Sofas = "Sofas",
  Homeware = "Homeware",
}

export enum PriceRange {
  M = "0-99",
  S = "100-249",
  L = "250+",
}
export enum Designer {
  RobertSmith = "Robert Smith",
  LiamGallagher = "Liam Gallagher",
  BiggieSmalls = "Biggie Smalls",
  TomYorke = "Tom Yorke",
}

export enum ProductCategory {
  AllProducts = "All products",
  PlantPots = "Plant pots",
  Ceramics = "Ceramics",
  Tables = "Tables",
  Tableware = "Tableware",
  Cutlery = "Cutlery",
  Chairs = "Chairs",
  Crockery = "Crockery",
}

export interface ProductCreate {
  name: string;
  description: string;
  price: number;
  designer: string;
  productType: ProductType;
  category: ProductCategory.Ceramics;
  height: number;
  width: number;
  depth: number;
  brand: string;
  imageSrc: string;
}

export interface Product {
  id_: string;
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
  price = "Price",
  dateAdded = "Date Added",
  views = "Views",
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
  query: string;
}
//++++++++++++++ CART
export interface ICartData {
  error?: string;
  message?: string;
  cart: ICartBase;
}

export interface ICartProduct {
  product: ProductListing;
  quantity: number;
}

export interface ICartBase {
  userIdentifier: string;
  id_: string;
  products: ICartProduct[];
  totalPrice: number;
  status: string;
}
