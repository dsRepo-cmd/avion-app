"use client";
import { SortBy, SortOrder } from "@/app/product/types";
import DropdownCustom from "@/components/DropdownCustom/DropdownCustom";
import Typography from "@/components/Typography/Typography";
import { MenuItem } from "@headlessui/react";
import { useState } from "react";
import ArrowIcon from "@/assets/arrow-up.svg";
import Icon from "@/components/Icon/Icon";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useClientMediaQuery } from "@/lib/useClientMediaQuery";

interface Props {
  searchParams: Record<string, any>;
}
function SortChange({ searchParams }: Props) {
  const router = useRouter();
  const [currentSortBy, setCurrentSortBy] = useState<SortBy>(SortBy.dateAdded);
  const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.asc);

  const isMobile = useClientMediaQuery("mobile");

  console.log(isMobile);
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
    <div className="flex items-center">
      <Typography
        className="md:hidden"
        tag="h5"
        size="14px"
        fontFamily="primary"
      >
        Sorting by:
      </Typography>

      <DropdownCustom title={isMobile ? "Sorting" : currentSortBy}>
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
  );
}

export default SortChange;
