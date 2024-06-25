import {
  Designer,
  PriceRange,
  ProductType,
  SortCategory,
} from "@/app/product/types";
import CheckBox from "@/components/CheckBox/CheckBox";
import Dropdown from "@/components/Dropdown/Dropdown";
import Typography from "@/components/Typography/Typography";
import useIsMobile from "@/lib/useIsMobile";

import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  searchParams: Record<string, any>;
  isMobile?: boolean;
}
function CheckboxFilter({ searchParams, isMobile }: Props) {
  const { productType, priceRange, designer } = searchParams;

  const selectedTypes = productType
    ? (productType.split(",") as ProductType[])
    : [];
  const selectedPriceRanges = priceRange ? priceRange.split(",") : [];
  const selectedDesigners = designer ? designer.split(",") : [];

  const router = useRouter();

  const handleCheckboxFilter = (type: string, category: SortCategory) => {
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

  const isMobileClient = useIsMobile();

  const isShowMobile = isMobile || isMobileClient;

  if (isShowMobile) {
    return (
      <div className=" flex">
        <Dropdown
          className="  w-screen"
          classTrigger=" py-3 px-6 "
          isDownIcon
          trigger={"Filtering"}
          position="bottomStart"
        >
          <li className=" grid grid-cols-2 gap-6 p-4">
            <div>
              <Typography
                className="m-3"
                tag="h5"
                size="16px"
                fontFamily="secondary"
              >
                Product Type
              </Typography>
              {Object.values(ProductType).map((option) => (
                <CheckBox
                  key={option}
                  name={option.toLowerCase()}
                  checked={selectedTypes.includes(option)}
                  value={option}
                  onChange={() =>
                    handleCheckboxFilter(option, SortCategory.ProductType)
                  }
                />
              ))}
            </div>
            <div>
              <Typography
                className="m-3"
                tag="h5"
                size="16px"
                fontFamily="secondary"
              >
                Price Range
              </Typography>
              {Object.values(PriceRange).map((option) => (
                <CheckBox
                  key={option}
                  name={option.toLowerCase()}
                  checked={selectedPriceRanges.includes(option)}
                  value={option}
                  onChange={() =>
                    handleCheckboxFilter(option, SortCategory.PriceRange)
                  }
                />
              ))}
            </div>
            <div>
              <Typography
                className="m-3"
                tag="h5"
                size="16px"
                fontFamily="secondary"
              >
                Designer
              </Typography>
              {Object.values(Designer).map((option) => (
                <CheckBox
                  key={option}
                  name={option.toLowerCase()}
                  checked={selectedDesigners.includes(option)}
                  value={option}
                  onChange={() =>
                    handleCheckboxFilter(option, SortCategory.Designer)
                  }
                />
              ))}
            </div>
          </li>
        </Dropdown>
      </div>
    );
  }

  return (
    <div className="flex gap-2 ">
      <Dropdown
        className=" w-[210px]"
        classTrigger=" py-3 px-6 "
        isDownIcon
        trigger={"Product Type"}
        position="bottomStart"
      >
        {Object.values(ProductType).map((option) => (
          <CheckBox
            key={option}
            name={option.toLowerCase()}
            checked={selectedTypes.includes(option)}
            value={option}
            onChange={() =>
              handleCheckboxFilter(option, SortCategory.ProductType)
            }
          />
        ))}
      </Dropdown>

      <Dropdown
        className=" w-[210px]"
        classTrigger=" py-3 px-6 "
        isDownIcon
        trigger={"Price"}
        position="bottomStart"
      >
        {Object.values(PriceRange).map((option) => (
          <CheckBox
            key={option}
            name={option.toLowerCase()}
            checked={selectedPriceRanges.includes(option)}
            value={option}
            onChange={() =>
              handleCheckboxFilter(option, SortCategory.PriceRange)
            }
          />
        ))}
      </Dropdown>

      <Dropdown
        className=" w-[210px]"
        classTrigger=" py-3 px-6 "
        isDownIcon
        trigger={"Designers"}
        position="bottomStart"
      >
        {Object.values(Designer).map((option) => (
          <CheckBox
            key={option}
            name={option.toLowerCase()}
            checked={selectedDesigners.includes(option)}
            value={option}
            onChange={() => handleCheckboxFilter(option, SortCategory.Designer)}
          />
        ))}
      </Dropdown>
    </div>
  );
}

export default CheckboxFilter;
