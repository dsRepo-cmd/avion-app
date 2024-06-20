"use client";
import { ProductType } from "@/app/product/types";
import CheckBox from "@/components/CheckBox/CheckBox";
import Typography from "@/components/Typography/Typography";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { useRouter } from "next/navigation";
import DownIcon from "@/assets/chevron-down.svg";
import Icon from "@/components/Icon/Icon";

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
    <div className="flex   ">
      <Menu>
        <MenuButton className={"flex gap-4 py-3 px-6"}>
          <Typography color="black" size="16px" fontFamily="secondary" tag="h5">
            Product Type
          </Typography>
          <Icon width={9} Svg={DownIcon} />
        </MenuButton>

        <Transition
          enter="transition ease-out duration-75"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <MenuItems className={"  rounded-lg bg-white  "} anchor="bottom">
            {productTypes.map((type) => (
              <MenuItem disabled key={type}>
                <CheckBox
                  key={type}
                  checked={selectedTypes.includes(type)}
                  name="productType"
                  value={type}
                  onChange={() => handleCheckboxChange(type, "productType")}
                />
              </MenuItem>
            ))}
          </MenuItems>
        </Transition>
      </Menu>

      <Menu>
        <MenuButton className={"flex gap-4 py-3 px-6"}>
          <Typography color="black" size="16px" fontFamily="secondary" tag="h5">
            Price
          </Typography>
          <Icon width={9} Svg={DownIcon} />
        </MenuButton>

        <Transition
          enter="transition ease-out duration-75"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <MenuItems className={"  rounded-lg bg-white  "} anchor="bottom">
            {priceRanges.map((range) => (
              <MenuItem disabled key={range}>
                <CheckBox
                  key={range}
                  name="priceRange"
                  checked={selectedPriceRanges.includes(range)}
                  value={range}
                  onChange={() => handleCheckboxChange(range, "priceRange")}
                />
              </MenuItem>
            ))}
          </MenuItems>
        </Transition>
      </Menu>

      <Menu>
        <MenuButton className={"flex gap-4 py-3 px-6"}>
          <Typography color="black" size="16px" fontFamily="secondary" tag="h5">
            Designer
          </Typography>
          <Icon width={9} Svg={DownIcon} />
        </MenuButton>

        <Transition
          enter="transition ease-out duration-75"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <MenuItems className={"  rounded-lg bg-white  "} anchor="bottom">
            {designers.map((designer) => (
              <MenuItem disabled key={designer}>
                <CheckBox
                  className=""
                  name="designer"
                  checked={selectedDesigners.includes(designer)}
                  value={designer}
                  onChange={() => handleCheckboxChange(designer, "designer")}
                />
              </MenuItem>
            ))}
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  );
};

export default SortPanel;
