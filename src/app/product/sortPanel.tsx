"use client";

import CheckboxFilter from "@/features/CheckboxFilter/CheckboxFilter";
import SortFilter from "@/features/SortFilter/SortFilter";

interface Props {
  searchParams: Record<string, any>;
  isMobile?: boolean;
}

const SortPanel = ({ searchParams, isMobile }: Props) => {
  return (
    <div className="flex justify-between items-center">
      <CheckboxFilter isMobile={isMobile} searchParams={searchParams} />
      <SortFilter isMobile={isMobile} searchParams={searchParams} />
    </div>
  );
};

export default SortPanel;
