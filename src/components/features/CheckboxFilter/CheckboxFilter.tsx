import { useCallback } from "react";
import { useRouter } from "next/navigation";
import CheckBox from "@/components/shared/CheckBox/CheckBox";
import Dropdown from "@/components/shared/Dropdown/Dropdown";
import Typography from "@/components/shared/Typography/Typography";
import useIsMobile from "@/lib/useIsMobile";

import { cn } from "@/lib/utils/utils";
import { Designer, PriceRange, ProductType, SortCategory } from "@/lib/enums";

interface Props {
  searchParams: Record<string, any>;
  isMobile?: boolean;
}

const CheckboxFilter: React.FC<Props> = ({ searchParams, isMobile }) => {
  const { productType, priceRange, designer } = searchParams;

  const router = useRouter();
  const isMobileClient = useIsMobile();
  const isShowMobile = isMobile || isMobileClient;

  const handleCheckboxFilter = useCallback(
    (type: string, category: SortCategory, selectedItems: string[]) => {
      const updatedItems = selectedItems.includes(type)
        ? selectedItems.filter((item) => item !== type)
        : [...selectedItems, type];

      const updatedParams = {
        ...searchParams,
        [category]: updatedItems.join(","),
        page: "1",
      };

      const params = new URLSearchParams(updatedParams).toString();
      router.push(`?${params}`);
    },
    [router, searchParams]
  );

  const renderCheckboxes = useCallback(
    (options: string[], selectedOptions: string[], category: SortCategory) =>
      options.map((option) => (
        <CheckBox
          key={option}
          name={option.toLowerCase()}
          checked={selectedOptions.includes(option)}
          value={option}
          onChange={() =>
            handleCheckboxFilter(option, category, selectedOptions)
          }
        />
      )),
    [handleCheckboxFilter]
  );

  const renderCategorySection = (
    category: SortCategory,
    options: string[],
    selectedOptions: string[]
  ) => (
    <div>
      <Typography className="m-3" tag="h5" size="16px" fontFamily="secondary">
        {category}
      </Typography>
      {renderCheckboxes(options, selectedOptions, category)}
    </div>
  );

  return (
    <div className={cn("flex", isShowMobile ? "" : "gap-2")}>
      <Dropdown
        className={isShowMobile ? "w-screen" : "w-[210px]"}
        classTrigger="py-3 px-6"
        isDownIcon
        trigger={isShowMobile ? "Filtering" : "Product Type"}
        position="bottomStart"
      >
        {isShowMobile ? (
          <li className="grid grid-cols-2 gap-6 p-4">
            {renderCategorySection(
              SortCategory.ProductType,
              Object.values(ProductType),
              productType ? productType.split(",") : []
            )}
            {renderCategorySection(
              SortCategory.PriceRange,
              Object.values(PriceRange),
              priceRange ? priceRange.split(",") : []
            )}
            {renderCategorySection(
              SortCategory.Designer,
              Object.values(Designer),
              designer ? designer.split(",") : []
            )}
          </li>
        ) : (
          renderCheckboxes(
            Object.values(ProductType),
            productType ? productType.split(",") : [],
            SortCategory.ProductType
          )
        )}
      </Dropdown>
      {!isShowMobile && (
        <>
          <Dropdown
            className="w-[210px]"
            classTrigger="py-3 px-6"
            isDownIcon
            trigger="Price"
            position="bottomStart"
          >
            {renderCheckboxes(
              Object.values(PriceRange),
              priceRange ? priceRange.split(",") : [],
              SortCategory.PriceRange
            )}
          </Dropdown>
          <Dropdown
            className="w-[210px]"
            classTrigger="py-3 px-6"
            isDownIcon
            trigger="Designers"
            position="bottomStart"
          >
            {renderCheckboxes(
              Object.values(Designer),
              designer ? designer.split(",") : [],
              SortCategory.Designer
            )}
          </Dropdown>
        </>
      )}
    </div>
  );
};

export default CheckboxFilter;
