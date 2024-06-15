"use client";
import { ProductType } from "@/app/product/types";
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
  const priceRanges = ["0-100", "101-250", "250+"];
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
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-3">
        <Typography color="black" size="16px" fontFamily="secondary" tag="h5">
          Product Type
        </Typography>
        {productTypes.map((type) => (
          <div className=" flex gap-3" key={type}>
            <input
              type="checkbox"
              id={type}
              name="productType"
              value={type}
              checked={selectedTypes.includes(type)}
              onChange={() => handleCheckboxChange(type, "productType")}
            />
            <label htmlFor={type}>
              <Typography
                color="black"
                size="16px"
                fontFamily="primary"
                tag="p"
              >
                {type}
              </Typography>
            </label>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <Typography color="black" size="16px" fontFamily="secondary" tag="h5">
          Price Range
        </Typography>
        {priceRanges.map((range) => (
          <div className=" flex gap-3" key={range}>
            <input
              type="checkbox"
              id={range}
              name="priceRange"
              value={range}
              checked={selectedPriceRanges.includes(range)}
              onChange={() => handleCheckboxChange(range, "priceRange")}
            />
            <label htmlFor={range}>
              <Typography
                color="black"
                size="16px"
                fontFamily="primary"
                tag="p"
              >
                {range}
              </Typography>
            </label>
          </div>
        ))}
      </div>

      <div className=" flex flex-col gap-3">
        <Typography color="black" size="16px" fontFamily="secondary" tag="h5">
          Designer
        </Typography>
        {designers.map((designer) => (
          <div className=" flex gap-3" key={designer}>
            <input
              type="checkbox"
              id={designer}
              name="designer"
              value={designer}
              checked={selectedDesigners.includes(designer)}
              onChange={() => handleCheckboxChange(designer, "designer")}
            />
            <label className=" text-nowrap" htmlFor={designer}>
              <Typography
                color="black"
                size="16px"
                fontFamily="primary"
                tag="p"
              >
                {designer}
              </Typography>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSortPanel;
