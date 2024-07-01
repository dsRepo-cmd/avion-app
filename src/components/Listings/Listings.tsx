import { cn } from "@/lib/utils";
import Container from "@/components/Container/Container";
import Typography from "@/components/Typography/Typography";
import AppLink from "../AppLink/AppLink";
import ListingItem from "../ListingItem/ListingItem";
import type { ProductListing } from "@/types/product";

interface Props {
  title?: string;
  products: ProductListing[];
  href?: string;
}

function Listings({ title = "", products, href }: Props) {
  return (
    <Container>
      <div className="flex flex-col items-start gap-9  ">
        <Typography fontFamily="secondary" size="32px" tag="h2">
          {title}
        </Typography>
        <ul
          className={cn(
            "grid grid-cols-4  gap-5 lg:grid lg:grid-cols-2 lg:self-center"
          )}
        >
          {products.map((product) => (
            <ListingItem key={product.id} product={product} />
          ))}
        </ul>

        {href && (
          <AppLink
            className=" self-center lg:w-full"
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
