import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps } from "react";

type AppLinkVariant = "clear" | "filled" | "clear-zommed";
type BackgroundColor = "black" | "light" | "clear" | "gray" | "white";

interface Props extends ComponentProps<typeof Link> {
  className?: string;
  children?: React.ReactNode;
  variant?: AppLinkVariant;
  bgColor?: BackgroundColor;
}

const variantClasses: { [key in AppLinkVariant]: string } = {
  clear: "hover-hover:hover:opacity-70 hover-none:active:opacity-70",
  filled:
    "py-4 px-8 text-base  hover-hover:hover:opacity-70 hover-none:active:opacity-70",
  "clear-zommed": "hover-hover:hover:scale-[1.2] hover-none:active:scale-[1.2]",
};

const bgColorClasses: { [key in BackgroundColor]: string } = {
  black: "bg-darkPrimary text-white",
  light: "bg-buttonLight text-white",
  gray: "bg-lightGrey text-darkPrimary",
  white: " bg-white text-darkPrimary",
  clear: "font-primary ",
};

function AppLink({
  children,
  className = "",
  variant = "filled",
  bgColor = "clear",

  ...props
}: Props) {
  return (
    <Link
      className={cn(
        " text-nowrap duration-300 text-center ",

        variantClasses[variant],
        bgColorClasses[bgColor],
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

export default AppLink;
