import { cn } from "@/lib/utils/utils";
import AppLink from "../../components/shared/AppLink/AppLink";
import ListingItem from "../../components/shared/ListingItem/ListingItem";
import type { SearchParams } from "@/types/product";
import { getProducts } from "@/lib/products";
import Typography from "@/components/shared/Typography/Typography";

interface Props {
  searchParams: SearchParams;
}

async function Listing({ searchParams }: Props) {
  const { page = "1", limit = "12" } = searchParams;
  const products = await getProducts({ ...searchParams, page, limit });

  const createPaginationLink = (page: number) => {
    const params = new URLSearchParams({
      ...searchParams,
      page: page.toString(),
      limit: limit.toString(),
    });
    return `?${params.toString()}`;
  };

  if (!products.length) {
    return (
      <Typography
        className=" text-center"
        fontFamily="secondary"
        size="24px"
        tag="h2"
      >
        No products found.
      </Typography>
    );
  }

  return (
    <div className="flex flex-col items-start gap-9  ">
      <ul
        className={cn(
          "grid  grid-cols-4 gap-5 lg:grid-cols-3 lg:self-center md:grid-cols-2 w-full"
        )}
      >
        {products.map((product) => (
          <ListingItem key={product.id} product={product} />
        ))}
      </ul>

      <div className=" relative flex h-[56px]  w-full">
        {Number(page) > 1 && (
          <AppLink
            className=" absolute left-0 top-0   "
            bgColor="gray"
            variant="filled"
            href={createPaginationLink(Number(page) - 1)}
          >
            Previous
          </AppLink>
        )}

        {Number(limit) === products.length && (
          <AppLink
            className=" absolute right-0 top-0 "
            bgColor="gray"
            variant="filled"
            href={createPaginationLink(Number(page) + 1)}
          >
            Next
          </AppLink>
        )}
      </div>
    </div>
  );
}

export default Listing;
