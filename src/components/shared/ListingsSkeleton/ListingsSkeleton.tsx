import { cn } from "@/lib/utils/utils";
import Container from "../Container/Container";
import Skeleton from "../Skeleton/Skeleton";

function ListingsSkeleton() {
  return (
    <Container>
      <div className="flex flex-col items-start gap-9 ">
        <Skeleton className="h-9 w-48" />

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
              <Skeleton
                className="w-full"
                style={{
                  aspectRatio: "305 / 375",
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
              <Skeleton className="h-[28px] w-full " />
              <Skeleton className="h-[28px] w-full " />
            </li>
          ))}
        </ul>

        <Skeleton className="self-center h-14 w-36  lg:w-full" />
      </div>
    </Container>
  );
}

export default ListingsSkeleton;
