"use client";
import SortChange from "@/features/SortChange/SortChange";
import CheckboxChange from "@/features/CheckboxChange/CheckboxChange";

interface Props {
  searchParams: Record<string, any>;
}

const SortPanel = ({ searchParams }: Props) => {
  return (
    <div className="flex justify-between items-center">
      <CheckboxChange searchParams={searchParams} />
      <SortChange searchParams={searchParams} />
    </div>
  );
};

export default SortPanel;
