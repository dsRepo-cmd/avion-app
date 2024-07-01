"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { ProductCategory } from "@/app/types";
import { cn } from "@/lib/utils";
import AppLink from "../AppLink/AppLink";

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
                " text-grey hover-hover:hover:underline hover-none:active:underline",
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
