export interface ProductListing {
  _id: string;
  name: string;
  price: string;
  imageSrc: string;
  isPhotoBig?: boolean;
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
  isPhotoBig: boolean;
}
