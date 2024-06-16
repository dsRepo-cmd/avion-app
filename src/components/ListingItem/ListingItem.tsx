import Image from "next/image";
import Typography from "../Typography/Typography";
import Link from "next/link";
import { ProductListing } from "@/app/product/types";
import { Key } from "react";

interface Props {
  product: ProductListing;
}

function ListingItem({ product }: Props) {
  return (
    <>
      <li>
        <Link
          className=" duration-300 flex flex-col gap-2 h-full w-full hover:scale-[1.04]"
          href={`/product/${product._id}`}
        >
          <Image
            src={product.imageSrc}
            alt={product.name}
            className=" w-full h-full"
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
