import React from "react";
import AppLink from "../AppLink/AppLink";
import { ProductCategory } from "@/app/product/types";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}
function CategoryLinks({ className }: Props) {
  return (
    <ul className={cn(" flex justify-center gap-11", className)}>
      <li>
        <AppLink variant="clear" href={"/product"} className=" text-grey">
          All products
        </AppLink>
      </li>
      {Object.values(ProductCategory).map((category) => (
        <li className=" flex justify-center" key={category}>
          <AppLink
            variant="clear"
            href={`/product?category=${category}`}
            className=" text-grey "
          >
            {category}
          </AppLink>
        </li>
      ))}
    </ul>
  );
}

export default CategoryLinks;
