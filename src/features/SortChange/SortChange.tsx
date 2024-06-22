"use client";
import { SortBy, SortOrder } from "@/app/product/types";
import Typography from "@/components/Typography/Typography";
import { useState } from "react";
import ArrowIcon from "@/assets/arrow-up.svg";
import Icon from "@/components/Icon/Icon";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import useIsMobile from "@/lib/useIsMobile";
import Dropdown from "@/components/Dropdown/Dropdown";

interface Props {
  searchParams: Record<string, any>;
  isMobile?: boolean;
}
function SortChange({ searchParams, isMobile }: Props) {
  const router = useRouter();
  const [currentSortBy, setCurrentSortBy] = useState<SortBy>(SortBy.dateAdded);
  const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.asc);

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

  const isMobileClient = useIsMobile();

  const isShowMobile = isMobile || isMobileClient;

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

      <Dropdown
        className=" w-[210px]"
        classTrigger=" py-3 px-6 "
        isDownIcon
        trigger={isShowMobile ? "Sorting" : currentSortBy}
      >
        {Object.values(SortBy).map((sortBy) => (
          <li className="w-full" key={sortBy}>
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
          </li>
        ))}
      </Dropdown>
    </div>
  );
}

export default SortChange;
