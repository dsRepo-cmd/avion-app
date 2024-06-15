import { ProductListing, SearchParams } from "@/app/product/types";
import Container from "@/components/Container/Container";
import Typography from "@/components/Typography/Typography";
import Image from "next/image";
import Link from "next/link";
import AppLink from "../AppLink/AppLink";

interface Props {
  title?: string;
  products: ProductListing[];
  currentPage?: number;
  limit?: number;
  searchParams?: SearchParams;
  href?: string;
  isPegination?: boolean;
}

function Listings({
  title = "",
  products,
  currentPage,
  limit = 12,
  searchParams,
  isPegination = false,
  href,
}: Props) {
  const createPaginationLink = (page: number) => {
    const params = new URLSearchParams({
      ...searchParams,
      page: page.toString(),
      limit: limit.toString(),
    });
    return `?${params.toString()}`;
  };

  return (
    <Container>
      <div className="flex flex-col items-start gap-9 lg:py-12 lg:px-6">
        <Typography fontFamily="secondary" size="32px" tag="h2">
          {title}
        </Typography>
        <ul className="grid grid-cols-4 gap-5 lg:grid lg:grid-cols-2 lg:self-center">
          {products.map((product) => (
            <li key={product._id}>
              <Link
                className="flex flex-col gap-2"
                href={`/product/${product._id}`}
              >
                <Image
                  src={product.imageSrc}
                  alt={product.name}
                  width={305}
                  height={375}
                />

                <Typography fontFamily="secondary" size="20px" tag="h4">
                  {product.name}
                </Typography>

                <Typography fontFamily="primary" size="18px" tag="p">
                  £{product.price}
                </Typography>
              </Link>
            </li>
          ))}
        </ul>

        {isPegination && (
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
        )}
        {href && (
          <AppLink
            className=" self-center"
            bgColor="gray"
            variant="filled"
            href={href}
          >
            View more
          </AppLink>
        )}
      </div>
    </Container>
  );
}

export default Listings;
