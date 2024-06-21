"use client";
import SortChange from "@/features/SortChange/SortChange";
import CheckboxChange from "@/features/CheckboxChange/CheckboxChange";

interface Props {
  searchParams: Record<string, any>;
  isMobile?: boolean;
}

const SortPanel = ({ searchParams, isMobile }: Props) => {
  return (
    <div className="flex justify-between items-center">
      <CheckboxChange isMobile={isMobile} searchParams={searchParams} />
      <SortChange isMobile={isMobile} searchParams={searchParams} />
    </div>
  );
};

export default SortPanel;
