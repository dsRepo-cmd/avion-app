export const homeHero = {
  title: "The furniture brand for the future, with timeless designs",
  button: "View collection",
  text: "A new era in eco friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors and a beautiful way to display things digitally using modern web technologies.",
  imgSrc: "/hero-image.png",
};

export const homeFeatures = {
  title: "What makes our brand different",
  features: [
    {
      id: "1",
      title: "Next day as standard",
      text: "Order before 3pm and get your order the next day as standard",
      iconSrc: "/delivery.svg",
    },
    {
      id: "2",
      title: "Made by true artisans",
      text: "Handmade crafted goods made with real passion and craftmanship",
      iconSrc: "/checkmark-outline.svg",
    },
    {
      id: "3",
      title: "Unbeatable prices",
      text: "For our materials and quality you won’t find better prices anywhere",
      iconSrc: "/purchase.svg",
    },
    {
      id: "4",
      title: "Recycled packaging",
      text: "We use 100% recycled packaging to ensure our footprint is manageable",
      iconSrc: "/sprout.svg",
    },
  ],
};

export interface Product {
  id: string;
  name: string;
  price: string;
  photoSrc: string;
  isPhotoBig?: boolean;
}

export interface ListingData {
  title: string;

  products: Product[];
  link: string;
}

export const homeListingsNew: ListingData = {
  title: "New ceramics",

  products: [
    {
      id: "1",
      name: "The Dandy chair",
      price: "£250",
      photoSrc: "/dandy-chair.png",
    },
    {
      id: "2",
      name: "Rustic Vase Set",
      price: "£155",
      photoSrc: "/vase-set.png",
    },
    {
      id: "3",
      name: "The Silky Vase",
      price: "£155",
      photoSrc: "/silky-vase.png",
    },
    {
      id: "4",
      name: "The Lucy Lamp",
      price: "£155",
      photoSrc: "/lucy-lamp.png",
    },
  ],
  link: "/",
};

export const homeListingsPopular: ListingData = {
  title: "Our popular products",

  products: [
    {
      id: "5",
      name: "The Poplar suede sofa",
      price: "£980",
      photoSrc: "/suede-sofa.png",
      isPhotoBig: true,
    },
    {
      id: "1",
      name: "The Dandy chair",
      price: "£250",
      photoSrc: "/dandy-chair.png",
    },
    {
      id: "6",
      name: "The Dandy chair",
      price: "£250",
      photoSrc: "/retro-chair.png",
    },
  ],
  link: "/",
};

export const homeEmailSignUp = {
  title: "Join the club and get the benefits",
  text: "Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more",
};
