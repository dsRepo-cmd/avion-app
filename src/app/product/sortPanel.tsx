"use client";
import CheckboxFilter from "@/components/features/CheckboxFilter/CheckboxFilter";
import Sorting from "@/components/features/Sorting/Sorting";

interface Props {
  searchParams: Record<string, any>;
  isMobile?: boolean;
}

const SortPanel = ({ searchParams, isMobile }: Props) => {
  return (
    <div className="flex justify-between self-start items-center w-full p-4">
      <CheckboxFilter isMobile={isMobile} searchParams={searchParams} />
      <Sorting isMobile={isMobile} searchParams={searchParams} />
    </div>
  );
};

export default SortPanel;
