import DeliveryIcon from "@/assets/delivery.svg";
import CheckmarkIcon from "@/assets/checkmark-outline.svg";
import PurchaseIcon from "@/assets/purchase.svg";
import SproutIcon from "@/assets/sprout.svg";

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
      icon: <DeliveryIcon />,
    },
    {
      id: "2",
      title: "Made by true artisans",
      text: "Handmade crafted goods made with real passion and craftmanship",
      icon: <CheckmarkIcon />,
    },
    {
      id: "3",
      title: "Unbeatable prices",
      text: "For our materials and quality you won’t find better prices anywhere",
      icon: <PurchaseIcon />,
    },
    {
      id: "4",
      title: "Recycled packaging",
      text: "We use 100% recycled packaging to ensure our footprint is manageable",
      icon: <SproutIcon />,
    },
  ],
};

export const homeEmailSignUp = {
  title: "Join the club and get the benefits",
  text: "Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more",
};

export const homeInfo = {
  title: "From a studio in London to a global brand with over 400 outlets",
  texts: [
    "When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.",
    "Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.",
  ],

  button: "Get in touch",
};
