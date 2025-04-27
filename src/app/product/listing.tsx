"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { cn } from "@/lib/utils/utils";
import ListingItem from "../../components/shared/ListingItem/ListingItem";
import Typography from "@/components/shared/Typography/Typography";
import { getProducts } from "@/lib/products";
import type { ProductListing, SearchParams } from "@/types/product";

interface Props {
  searchParams: SearchParams;
}

function Listing({ searchParams }: Props) {
  const [products, setProducts] = useState<ProductListing[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver | null>(null);

  const limit = 12;

  const lastProductRef = useCallback(
    (node: HTMLLIElement | null) => {
      if (isLoading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);

      const newProducts = await getProducts({
        ...searchParams,
        page: page.toString(),
        limit: limit.toString(),
      });

      setProducts((prevProducts) => [...prevProducts, ...newProducts]);
      setHasMore(newProducts.length === limit);
      setIsLoading(false);
    };

    loadProducts();
  }, [page, searchParams]);

  if (!products.length && !isLoading) {
    return (
      <Typography
        className="text-center"
        fontFamily="secondary"
        size="24px"
        tag="h2"
      >
        No products found.
      </Typography>
    );
  }

  return (
    <div className="flex flex-col items-start gap-9">
      <ul
        className={cn(
          "grid grid-cols-4 gap-5 lg:grid-cols-3 lg:self-center md:grid-cols-2 w-full"
        )}
      >
        {products.map((product, index) => {
          if (index === products.length - 1) {
            return (
              <li key={product.id} ref={lastProductRef}>
                <ListingItem product={product} />
              </li>
            );
          } else {
            return (
              <li key={product.id}>
                <ListingItem product={product} />
              </li>
            );
          }
        })}
      </ul>

      {isLoading && (
        <Typography
          className="text-center w-full"
          fontFamily="secondary"
          size="18px"
          tag="p"
        >
          Loading...
        </Typography>
      )}
    </div>
  );
}

export default Listing;
