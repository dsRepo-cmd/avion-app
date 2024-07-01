import type { Link } from "@/types/types";

interface LinksList {
  title: string;
  links: Link[];
}

export const menu: LinksList = {
  title: "Menu",
  links: [
    {
      id: "1",
      title: "New arrivals",
      href: "/product?sortBy=dateAdded",
    },
    {
      id: "2",
      title: "Best sellers",
      href: "/product?SortBy=views",
    },
    {
      id: "3",
      title: "Recently viewed",
      href: "/product?SortBy=views",
    },
    {
      id: "4",
      title: "Popular this week",
      href: "/product?SortBy=views",
    },
    {
      id: "5",
      title: "All products",
      href: "/product",
    },
  ],
};
export const categories: LinksList = {
  title: "Categories",
  links: [
    {
      id: "9",
      title: "Plant pots",
      href: "/product?category=Plant%20pots",
    },
    {
      id: "6",
      title: "Ceramics",
      href: "/product?category=Ceramics",
    },
    {
      id: "7",
      title: "Tables",
      href: "/product?category=Tables",
    },
    {
      id: "8",
      title: "Homeware",
      href: "/product?category=Homeware",
    },
    {
      id: "10",
      title: "Chairs",
      href: "/product?category=Chairs",
    },
    {
      id: "11",
      title: "Tableware",
      href: "/product?category=Tableware",
    },
  ],
};
export const ourCompany: LinksList = {
  title: "Our company",
  links: [
    {
      id: "12",
      title: "About us",
      href: "/about",
    },
    {
      id: "13",
      title: "Vacancies",
      href: "/",
    },
    {
      id: "14",
      title: "Contact us",
      href: "/",
    },
    {
      id: "15",
      title: "Privacy",
      href: "/",
    },
    {
      id: "16",
      title: "Returns policy",
      href: "/",
    },
  ],
};
export const joinUs = "Join our mailing list";
export const copyright = "Copyright 2022 Avion LTD";
