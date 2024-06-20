"use client";
import {
  Designer,
  PriceRange,
  ProductType,
  SortCategory,
} from "@/app/product/types";
import { useRouter } from "next/navigation";
import DropdownOptions from "@/components/DropdownOptions/DropdownOptions";

interface ProductSortPanelProps {
  selectedTypes: string[];
  selectedPriceRanges: string[];
  selectedDesigners: string[];
  searchParams: Record<string, any>;
}

const SortPanel = ({
  selectedTypes,
  selectedPriceRanges,
  selectedDesigners,
  searchParams,
}: ProductSortPanelProps) => {
  const productTypes = Object.values(ProductType);
  const priceRanges = Object.values(PriceRange);
  const designers = Object.values(Designer);

  const router = useRouter();
  const handleCheckboxChange = (type: string, category: string) => {
    const isSelected =
      category === SortCategory.ProductType
        ? selectedTypes.includes(type as ProductType)
        : category === SortCategory.PriceRange
        ? selectedPriceRanges.includes(type)
        : selectedDesigners.includes(type);

    let updatedTypes =
      category === SortCategory.ProductType
        ? isSelected
          ? selectedTypes.filter((t) => t !== type)
          : [...selectedTypes, type as ProductType]
        : selectedTypes;

    let updatedPriceRanges =
      category === SortCategory.PriceRange
        ? isSelected
          ? selectedPriceRanges.filter((t) => t !== type)
          : [...selectedPriceRanges, type]
        : selectedPriceRanges;

    let updatedDesigners =
      category === SortCategory.Designer
        ? isSelected
          ? selectedDesigners.filter((t) => t !== type)
          : [...selectedDesigners, type]
        : selectedDesigners;

    const updatedParams = {
      ...searchParams,
      productType: updatedTypes.join(","),
      priceRange: updatedPriceRanges.join(","),
      designer: updatedDesigners.join(","),
      page: "1",
    };

    const params = new URLSearchParams(updatedParams).toString();
    router.push(`?${params}`);
  };

  return (
    <div className="flex">
      <DropdownOptions
        title="Product Type"
        options={productTypes}
        selectedOptions={selectedTypes}
        onChange={(value) =>
          handleCheckboxChange(value, SortCategory.ProductType)
        }
      />

      <DropdownOptions
        title="Price"
        options={priceRanges}
        selectedOptions={selectedPriceRanges}
        onChange={(value) =>
          handleCheckboxChange(value, SortCategory.PriceRange)
        }
      />

      <DropdownOptions
        title="Designer"
        options={designers}
        selectedOptions={selectedDesigners}
        onChange={(value) => handleCheckboxChange(value, SortCategory.Designer)}
      />
    </div>
  );
};

export default SortPanel;
