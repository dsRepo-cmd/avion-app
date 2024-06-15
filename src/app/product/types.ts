export interface ProductListing {
  _id: string;
  name: string;
  price: string;
  imageSrc: string;
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

export interface IProductBase {
  name: string;
  description: string;
  price: string;
  designer: string;
  productType: ProductType;
  category: ProductCategory;
  height: string;
  width: string;
  depth: string;
  brand: string;
  imageSrc: string;
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
  minPrice: string;
  maxPrice: string;
  sortBy: SortBy;
  sortOrder: SortOrder;
  page: string;
  limit: string;
  priceRange: string;
  designer: string;
}
