"use client";
import { ProductType } from "@/app/product/types";
import CheckBox from "@/components/CheckBox/CheckBox";
import Typography from "@/components/Typography/Typography";
import { useRouter } from "next/navigation";

interface ProductSortPanelProps {
  selectedTypes: string[];
  selectedPriceRanges: string[];
  selectedDesigners: string[];
  searchParams: Record<string, any>;
}

const ProductSortPanel = ({
  selectedTypes,
  selectedPriceRanges,
  selectedDesigners,
  searchParams,
}: ProductSortPanelProps) => {
  const productTypes = Object.values(ProductType);
  const priceRanges = ["0-99", "100-249", "250+"];
  const designers = [
    "Robert Smith",
    "Liam Gallagher",
    "Biggie Smalls",
    "Tom Yorke",
  ];

  const router = useRouter();
  const handleCheckboxChange = (type: string, category: string) => {
    const isSelected =
      category === "productType"
        ? selectedTypes.includes(type as ProductType)
        : category === "priceRange"
        ? selectedPriceRanges.includes(type)
        : selectedDesigners.includes(type);

    let updatedTypes =
      category === "productType"
        ? isSelected
          ? selectedTypes.filter((t) => t !== type)
          : [...selectedTypes, type as ProductType]
        : selectedTypes;

    let updatedPriceRanges =
      category === "priceRange"
        ? isSelected
          ? selectedPriceRanges.filter((t) => t !== type)
          : [...selectedPriceRanges, type]
        : selectedPriceRanges;

    let updatedDesigners =
      category === "designer"
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
    <div className="flex flex-col gap-12 lg:flex-row ">
      <div className="flex flex-col gap-3">
        <Typography color="black" size="16px" fontFamily="secondary" tag="h5">
          Product Type
        </Typography>
        {productTypes.map((type) => (
          <CheckBox
            key={type}
            checked={selectedTypes.includes(type)}
            name="productType"
            value={type}
            onChange={() => handleCheckboxChange(type, "productType")}
          />
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <Typography color="black" size="16px" fontFamily="secondary" tag="h5">
          Price Range
        </Typography>
        {priceRanges.map((range) => (
          <CheckBox
            key={range}
            name="priceRange"
            checked={selectedPriceRanges.includes(range)}
            value={range}
            onChange={() => handleCheckboxChange(range, "priceRange")}
          />
        ))}
      </div>

      <div className=" flex flex-col gap-3">
        <Typography color="black" size="16px" fontFamily="secondary" tag="h5">
          Designer
        </Typography>
        {designers.map((designer) => (
          <CheckBox
            key={designer}
            name="designer"
            checked={selectedDesigners.includes(designer)}
            value={designer}
            onChange={() => handleCheckboxChange(designer, "designer")}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSortPanel;
