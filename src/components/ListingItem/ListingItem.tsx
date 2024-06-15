import Image from "next/image";
import Typography from "../Typography/Typography";
import Link from "next/link";
import { ProductListing } from "@/app/product/types";

interface Props {
  product: ProductListing;
  key: string;
}

function ListingItem({ product, key }: Props) {
  return (
    <>
      <li key={key}>
        <Link className="flex flex-col gap-2" href={`/product/${product._id}`}>
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
    </>
  );
}

export default ListingItem;
