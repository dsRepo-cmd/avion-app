export enum SortCategory {
  ProductType = "productType",
  PriceRange = "priceRange",
  Designer = "designer",
  ProductCategory = "productCategory",
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

export enum Brand {
  BestFurniture = "Best Furniture",
  BestCeramics = "Best Ceramics",
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

export enum SortOrder {
  asc = "asc",
  desc = "desc",
}
export enum SortBy {
  price = "Price",
  dateAdded = "Date Added",
  views = "Views",
}

export enum ProductType {
  Furniture = "Furniture",
  Accessories = "Accessories",
  LightFittings = "Light fittings",
  Sofas = "Sofas",
  Homeware = "Homeware",
}

export interface ProductListing {
  id_: string;
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
