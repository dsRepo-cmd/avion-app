import { cn } from "@/lib/utils/utils";
import Container from "../Container/Container";

function ListingsSkeleton() {
  return (
    <Container>
      <div className="flex flex-col items-start gap-9 ">
        <div className="h-9 w-48 bg-lightGrey rounded animate-pulse"></div>
        {/* Skeleton for product list */}
        <ul
          className={cn(
            "grid  grid-cols-4 gap-5 lg:grid-cols-3 lg:self-center md:grid-cols-2 w-full"
          )}
        >
          {Array.from({ length: 4 }).map((_, index) => (
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

        <div className="self-center h-14 w-36 bg-lightGrey rounded animate-pulse lg:w-full"></div>
      </div>
    </Container>
  );
}

export default ListingsSkeleton;
