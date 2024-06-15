import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps } from "react";

type AppLinkVariant = "clear" | "filled";
type BackgroundColor = "black" | "light" | "clear" | "gray" | "white";

interface Props extends ComponentProps<typeof Link> {
  className?: string;
  children?: React.ReactNode;
  variant?: AppLinkVariant;
  bgColor?: BackgroundColor;
}

const variantClasses: { [key in AppLinkVariant]: string } = {
  clear: "",
  filled: "py-4 px-8 text-base  ",
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
        " text-nowrap duration-300 hover:opacity-70 text-center ",
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
