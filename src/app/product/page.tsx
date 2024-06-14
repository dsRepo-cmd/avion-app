"use client";

import Listings from "@/components/Listings/Listings";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ProductListing } from "./types";

function Products() {
  const [products, setProducts] = useState<ProductListing[]>([]);
  const searchParams = useSearchParams();

  const category = searchParams.get("category");
  console.log(category);

  const fetchProducts = async (category: string) => {
    try {
      const res = await fetch(`/api/product?category=${category}`);
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching stories:", error);
    }
  };

  useEffect(() => {
    if (category) fetchProducts(category);
  }, [category]);

  if (!products) null;

  return (
    <main className="flex  flex-col items-center justify-between  max-w-[1440px] m-auto">
      <Listings title="Products" products={products} />
    </main>
  );
}

export default Products;
