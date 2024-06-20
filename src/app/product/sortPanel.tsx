"use client";
import {
  Designer,
  PriceRange,
  ProductType,
  SortBy,
  SortCategory,
} from "@/app/product/types";
import { useRouter } from "next/navigation";
import DropdownOptions from "@/components/DropdownOptions/DropdownOptions";
import { Select } from "@headlessui/react";

interface Props {
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
}: Props) => {
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
    <div className="flex  justify-between items-center">
      <div className=" flex">
        <DropdownOptions
          title="Product Type"
          options={Object.values(ProductType)}
          selectedOptions={selectedTypes}
          onChange={(value) =>
            handleCheckboxChange(value, SortCategory.ProductType)
          }
        />

        <DropdownOptions
          title="Price"
          options={Object.values(PriceRange)}
          selectedOptions={selectedPriceRanges}
          onChange={(value) =>
            handleCheckboxChange(value, SortCategory.PriceRange)
          }
        />

        <DropdownOptions
          title="Designer"
          options={Object.values(Designer)}
          selectedOptions={selectedDesigners}
          onChange={(value) =>
            handleCheckboxChange(value, SortCategory.Designer)
          }
        />
      </div>

      <Select
        className={" py-3 px-6 font-second"}
        name={SortBy.dateAdded}
        aria-label="Project status"
      >
        {Object.values(SortBy).map((type) => (
          <option key={type} className=" font-second p-2" value={type}>
            {type}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default SortPanel;
