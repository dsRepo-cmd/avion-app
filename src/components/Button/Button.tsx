import { cn } from "@/lib/utils";
import React, { ButtonHTMLAttributes } from "react";

type ButtonVariant = "clear" | "filled";
type BackgroundColor = "black" | "light" | "clear" | "gray" | "white";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  variant?: ButtonVariant;
  bgColor?: BackgroundColor;
}

const variantClasses: { [key in ButtonVariant]: string } = {
  clear: "",
  filled: "py-4 px-8 text-base  ",
};

const bgColorClasses: { [key in BackgroundColor]: string } = {
  black: "bg-darkPrimary text-white",
  light: "bg-buttonLight text-white",
  gray: "bg-lightGrey text-darkPrimary",
  white: " bg-white text-darkPrimary",
  clear: "",
};

function Button({
  children,
  className = "",
  variant = "filled",
  bgColor = "black",
  ...props
}: Props) {
  return (
    <button
      className={cn(
        " text-nowrap duration-300  text-center disabled:opacity-70 ",
        "hover-hover:hover:opacity-70 hover-none:active:opacity-70",
        variantClasses[variant],
        bgColorClasses[bgColor],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
