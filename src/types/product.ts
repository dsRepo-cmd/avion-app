import {
  Brand,
  Designer,
  PriceRange,
  ProductCategory,
  ProductType,
  SortBy,
  SortOrder,
} from "@/lib/enums";


export interface ProductListing {
  id: string;
  name: string;
  price: number;
  imageSrc: string;
  description: string;
}

export interface Product extends ProductListing {
  designer: Designer;
  productType: ProductType;
  category: ProductCategory;
  brand: Brand;
  height: number;
  width: number;
  depth: number;
  views: number;
  dateAdded: Date;
}

export interface SearchParams {
  category: ProductCategory;
  productType: ProductType;
  brand: Brand;
  sortBy: SortBy;
  sortOrder: SortOrder;
  page: string;
  limit: string;
  priceRange: PriceRange;
  designer: Designer;
  query: string;
}
