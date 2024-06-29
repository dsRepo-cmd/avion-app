"use client";
import CheckboxFilter from "@/features/CheckboxFilter/CheckboxFilter";
import Sorting from "@/features/Sorting/Sorting";

interface Props {
  searchParams: Record<string, any>;
  isMobile?: boolean;
}

const SortPanel = ({ searchParams, isMobile }: Props) => {
  return (
    <div className="flex justify-between items-center">
      <CheckboxFilter isMobile={isMobile} searchParams={searchParams} />
      <Sorting isMobile={isMobile} searchParams={searchParams} />
    </div>
  );
};

export default SortPanel;
