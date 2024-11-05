import { cn } from "@/lib/utils/utils";

function ListingSkeleton() {
  return (
    <div className="flex flex-col items-start gap-9 w-full">
      {/* Skeleton for product list */}
      <ul
        className={cn(
          "grid  grid-cols-4 gap-5 lg:grid-cols-3 lg:self-center md:grid-cols-2 w-full"
        )}
      >
        {Array.from({ length: 12 }).map((_, index) => (
          <li
            className=" duration-300 flex flex-col gap-2 h-full w-full hover-hover:hover:scale-[1.04] hover-none:active:scale-[1.04]"
            key={index}
          >
            <div
              className="animate-pulse bg-lightGrey w-full rounded"
              style={{
                aspectRatio: "305 / 375",
                maxWidth: "100%",
                height: "auto",
              }}
            ></div>
            <div className="h-[28px] w-full bg-lightGrey rounded animate-pulse "></div>
            <div className="h-[28px] w-full bg-lightGrey rounded animate-pulse "></div>
          </li>
        ))}
      </ul>

      {/* Skeleton for pagination */}
      <div className="relative flex h-[56px] w-full">
        <div className="absolute left-0 top-0 h-10 w-20 bg-lightGrey rounded animate-pulse"></div>
        <div className="absolute right-0 top-0 h-10 w-20 bg-lightGrey rounded animate-pulse"></div>
      </div>
    </div>
  );
}

export default ListingSkeleton;
