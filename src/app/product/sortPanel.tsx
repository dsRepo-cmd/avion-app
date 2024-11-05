import CheckboxFilter from "@/components/features/CheckboxFilter/CheckboxFilter";
import Sorting from "@/components/features/Sorting/Sorting";
import { isMobile } from "@/lib/isMobile/isMobile";
import { headers } from "next/headers";

interface Props {
  searchParams: Record<string, any>;
}

const SortPanel = ({ searchParams }: Props) => {
  const userAgent = headers().get("user-agent") || "";
  const mobileCheck = isMobile(userAgent);

  return (
    <div className="flex justify-between self-start items-center w-full p-4">
      <CheckboxFilter isMobile={mobileCheck} searchParams={searchParams} />
      <Sorting isMobile={mobileCheck} searchParams={searchParams} />
    </div>
  );
};

export default SortPanel;
