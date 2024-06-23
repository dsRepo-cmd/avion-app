import { ProductListing, SearchParams } from "@/app/product/types";

import AppLink from "../AppLink/AppLink";
import { cn } from "@/lib/utils";
import ListingItem from "../ListingItem/ListingItem";

interface Props {
  products: ProductListing[];
  currentPage?: string;
  limit?: string;
  searchParams?: SearchParams;
}

function Listing({ products, currentPage, limit = "12", searchParams }: Props) {
  const createPaginationLink = (page: number) => {
    const params = new URLSearchParams({
      ...searchParams,
      page: page.toString(),
      limit: limit.toString(),
    });
    return `?${params.toString()}`;
  };

  return (
    <div className="flex flex-col items-start gap-9  ">
      <ul
        className={cn(
          "grid  grid-cols-4 gap-5 lg:grid-cols-3 lg:self-center md:grid-cols-2"
        )}
      >
        {products.map((product) => (
          <ListingItem key={product._id} product={product} />
        ))}
      </ul>

      <div className=" relative flex h-[56px]  w-full">
        {Number(currentPage) > 1 && (
          <AppLink
            className=" absolute left-0 top-0   "
            bgColor="gray"
            variant="filled"
            href={createPaginationLink(Number(currentPage) - 1)}
          >
            <button>Previous</button>
          </AppLink>
        )}

        {Number(limit) === products.length && (
          <AppLink
            className=" absolute right-0 top-0 "
            bgColor="gray"
            variant="filled"
            href={createPaginationLink(Number(currentPage) + 1)}
          >
            Next
          </AppLink>
        )}
      </div>
    </div>
  );
}

export default Listing;
