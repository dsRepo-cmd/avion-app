import { ComponentProps } from "react";
import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/utils";

export interface AppLinkProps
  extends ComponentProps<typeof Link>,
    VariantProps<typeof linkVariants> {
  className?: string;
  children?: React.ReactNode;
}

const linkVariants = cva("text-nowrap duration-300 text-center", {
  variants: {
    variant: {
      clear: "hover-hover:hover:opacity-70 hover-none:active:opacity-70",
      filled:
        "py-4 px-8 text-base hover-hover:hover:opacity-70 hover-none:active:opacity-70",
      "clear-zommed":
        "hover-hover:hover:scale-[1.2] hover-none:active:scale-[1.2]",
    },
    bgColor: {
      black: "bg-darkPrimary text-white",
      light: "bg-buttonLight text-white",
      gray: "bg-lightGrey text-darkPrimary",
      white: "bg-white text-darkPrimary",
      clear: "font-primary",
    },
  },
  defaultVariants: {
    variant: "filled",
    bgColor: "clear",
  },
});

function AppLink({
  children,
  className = "",
  variant = "filled",
  bgColor = "clear",
  ...props
}: AppLinkProps) {
  return (
    <Link
      className={cn(linkVariants({ variant, bgColor, className }))}
      {...props}
    >
      {children}
    </Link>
  );
}

export default AppLink;
