import {
  Designer,
  PriceRange,
  ProductType,
  SortCategory,
} from "@/app/product/types";
import CheckBox from "@/components/CheckBox/CheckBox";
import DropdownCustom from "@/components/DropdownCustom/DropdownCustom";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  searchParams: Record<string, any>;
}
function CheckboxChange({ searchParams }: Props) {
  const { productType, priceRange, designer } = searchParams;

  const selectedTypes = productType
    ? (productType.split(",") as ProductType[])
    : [];
  const selectedPriceRanges = priceRange ? priceRange.split(",") : [];
  const selectedDesigners = designer ? designer.split(",") : [];

  const router = useRouter();

  const handleCheckboxChange = (type: string, category: SortCategory) => {
    let updatedTypes = [...selectedTypes];
    let updatedPriceRanges = [...selectedPriceRanges];
    let updatedDesigners = [...selectedDesigners];

    const isSelected =
      (category === SortCategory.ProductType &&
        selectedTypes.includes(type as ProductType)) ||
      (category === SortCategory.PriceRange &&
        selectedPriceRanges.includes(type)) ||
      (category === SortCategory.Designer && selectedDesigners.includes(type));

    if (isSelected) {
      updatedTypes = updatedTypes.filter((t) => t !== (type as ProductType));
      updatedPriceRanges = updatedPriceRanges.filter((t) => t !== type);
      updatedDesigners = updatedDesigners.filter((t) => t !== type);
    } else {
      if (category === SortCategory.ProductType)
        updatedTypes.push(type as ProductType);
      if (category === SortCategory.PriceRange) updatedPriceRanges.push(type);
      if (category === SortCategory.Designer) updatedDesigners.push(type);
    }

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
    <div className="flex space-x-4">
      <DropdownCustom title="Product Type">
        {Object.values(ProductType).map((option) => (
          <CheckBox
            key={option}
            name={option.toLowerCase()}
            checked={selectedTypes.includes(option)}
            value={option}
            onChange={() =>
              handleCheckboxChange(option, SortCategory.ProductType)
            }
          />
        ))}
      </DropdownCustom>

      <DropdownCustom title="Price">
        {Object.values(PriceRange).map((option) => (
          <CheckBox
            key={option}
            name={option.toLowerCase()}
            checked={selectedPriceRanges.includes(option)}
            value={option}
            onChange={() =>
              handleCheckboxChange(option, SortCategory.PriceRange)
            }
          />
        ))}
      </DropdownCustom>

      <DropdownCustom title="Designers">
        {Object.values(Designer).map((option) => (
          <CheckBox
            key={option}
            name={option.toLowerCase()}
            checked={selectedDesigners.includes(option)}
            value={option}
            onChange={() => handleCheckboxChange(option, SortCategory.Designer)}
          />
        ))}
      </DropdownCustom>
    </div>
  );
}

export default CheckboxChange;
