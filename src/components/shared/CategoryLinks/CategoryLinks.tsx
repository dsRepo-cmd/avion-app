"use client";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils/utils";
import AppLink from "../AppLink/AppLink";
import { ProductCategory } from "@/lib/enums";

interface Props {
  className?: string;
}

function CategoryLinks({ className }: Props) {
  const searchParams = useSearchParams();
  const categoryParams = searchParams.get("category");

  return (
    <ul className={cn(" flex justify-center gap-11", className)}>
      {Object.values(ProductCategory).map((category) => {
        return (
          <li className=" flex justify-center" key={category}>
            <AppLink
              variant="clear"
              href={`/product?category=${category}`}
              className={cn(
                " text-grey hover-hover:hover:underline hover-none:active:underline underline-offset-2",
                category === categoryParams && "underline"
              )}
            >
              {category}
            </AppLink>
          </li>
        );
      })}
    </ul>
  );
}

export default CategoryLinks;
