"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Typography from "@/components/shared/Typography/Typography";
import Dropdown from "@/components/shared/Dropdown/Dropdown";
import ArrowUpIcon from "@/components/icons/ArrowUpIcon";
import useIsMobile from "@/lib/useIsMobile";
import { cn } from "@/lib/utils/utils";
import { SortBy, SortOrder } from "@/lib/enums";

interface Props {
  searchParams: Record<string, any>;
  isMobile?: boolean;
}
function Sorting({ searchParams, isMobile }: Props) {
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
        tag="span"
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
          <div className=" w-full" key={sortBy}>
            <button
              className={cn(
                "grid grid-cols-2 w-full items-start justify-items-start gap-3 p-3 hover:bg-lightGrey ",
                sortBy === currentSortBy && "bg-lightGrey"
              )}
              onClick={() => handleSortChange(sortBy)}
            >
              <Typography
                className=" text-base"
                tag="span"
                size="16px"
                fontFamily="primary"
              >
                {sortBy}
              </Typography>
              {sortBy === currentSortBy && (
                <span className="justify-self-end">
                  {sortOrder === SortOrder.asc ? (
                    <ArrowUpIcon size={18} />
                  ) : (
                    <ArrowUpIcon size={18} className="rotate-180" />
                  )}
                </span>
              )}
            </button>
          </div>
        ))}
      </Dropdown>
    </div>
  );
}

export default Sorting;
