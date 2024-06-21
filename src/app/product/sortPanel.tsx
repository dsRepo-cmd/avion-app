"use client";
import {
  Designer,
  PriceRange,
  ProductType,
  SortBy,
  SortCategory,
  SortOrder,
} from "@/app/product/types";
import { useRouter } from "next/navigation";
import DropdownCustom from "@/components/DropdownCustom/DropdownCustom";
import CheckBox from "@/components/CheckBox/CheckBox";
import { useState } from "react";
import { cn } from "@/lib/utils";
import ArrowIcon from "@/assets/arrow-up.svg";
import Icon from "@/components/Icon/Icon";
import Typography from "@/components/Typography/Typography";
import { MenuItem } from "@headlessui/react";

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
  const [currentSortBy, setCurrentSortBy] = useState<SortBy>(SortBy.dateAdded);
  const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.asc);

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

  const handleSortChange = (sortBy: SortBy) => {
    const newSortOrder =
      sortBy === currentSortBy
        ? sortOrder === SortOrder.asc
          ? SortOrder.desc
          : SortOrder.asc
        : SortOrder.asc;

    setCurrentSortBy(sortBy);
    setSortOrder(newSortOrder);

    const updatedParams = {
      ...searchParams,
      sortBy,
      sortOrder: newSortOrder,
      page: "1",
    };

    const params = new URLSearchParams(updatedParams).toString();
    router.push(`?${params}`);
  };

  return (
    <div className="flex justify-between items-center">
      <div className="flex">
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
              onChange={() =>
                handleCheckboxChange(option, SortCategory.Designer)
              }
            />
          ))}
        </DropdownCustom>
      </div>

      <div className=" flex   items-center">
        <Typography
          className=" md:hidden"
          tag="h5"
          size="14px"
          fontFamily="primary"
        >
          Sorting by:
        </Typography>
        <DropdownCustom title={currentSortBy}>
          {Object.values(SortBy).map((sortBy) => (
            <MenuItem key={sortBy}>
              <button
                className={cn(
                  "grid grid-cols-2 w-full items-center justify-start gap-3 p-3 hover:bg-lightGrey font-primary",
                  sortBy === currentSortBy && "bg-lightGrey"
                )}
                onClick={() => handleSortChange(sortBy)}
              >
                {sortBy}
                {sortBy === currentSortBy && (
                  <span className="justify-self-end">
                    {sortOrder === SortOrder.asc ? (
                      <Icon width={18} height={18} Svg={ArrowIcon} />
                    ) : (
                      <Icon
                        className="rotate-180"
                        width={18}
                        height={18}
                        Svg={ArrowIcon}
                      />
                    )}
                  </span>
                )}
              </button>
            </MenuItem>
          ))}
        </DropdownCustom>
      </div>
    </div>
  );
};

export default SortPanel;
