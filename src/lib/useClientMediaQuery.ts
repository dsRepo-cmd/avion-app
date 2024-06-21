"use client";

import { useEffect, useState } from "react";
import { mediaQueries } from "./mediaQueries";
import { MediaQueryKey } from "@/app/product/types";

export function useClientMediaQuery(queryKey: MediaQueryKey) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const query = mediaQueries[queryKey];
    const mediaQueryList = window.matchMedia(query);

    const handleMatchChange = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    mediaQueryList.addEventListener("change", handleMatchChange);
    setMatches(mediaQueryList.matches);

    return () => {
      mediaQueryList.removeEventListener("change", handleMatchChange);
    };
  }, [queryKey]);

  return matches;
}
