import LinkedinIcon from "@/assets/linkedin.svg";
import FacebookIcon from "@/assets/facebook.svg";
import InstagramIcon from "@/assets/instagram.svg";
import SkypeIcon from "@/assets/skype.svg";
import TwitterIcon from "@/assets/twitter.svg";
import PinterestIcon from "@/assets/pinterest.svg";

export const footer = {
  menu: {
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
  },

  categories: {
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
  },

  ourCompany: {
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
  },

  joinUs: {
    title: "Join our mailing list",
    button: "Sign up",
  },

  copyright: "Copyright 2022 Avion LTD",

  socialLinks: [
    {
      id: "17",
      title: "Linkedin",
      href: "#",
      icon: LinkedinIcon,
    },
    {
      id: "18",
      title: "Facebook",
      href: "#",
      icon: FacebookIcon,
    },
    {
      id: "19",
      title: "Instagram",
      href: "#",
      icon: InstagramIcon,
    },
    {
      id: "20",
      title: "Skype",
      href: "#",
      icon: SkypeIcon,
    },
    {
      id: "21",
      title: "Twitter",
      href: "#",
      icon: TwitterIcon,
    },
    {
      id: "22",
      title: "Pinterest",
      href: "#",
      icon: PinterestIcon,
    },
  ],
};
