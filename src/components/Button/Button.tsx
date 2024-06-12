import { cn } from "@/lib/utils";
import React, { ButtonHTMLAttributes } from "react";

type ButtonVariant = "clear" | "filled";
type BackgroundColor = "black" | "light" | "clear" | "gray";

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
  black: "bg-darkPrimaryk text-white",
  light: "bg-buttonLight text-white",
  gray: "bg-lightGrey text-darkPrimary",
  clear: "",
};

function Button({
  children,
  className = "",
  variant = "filled",
  bgColor = "clear",
  ...props
}: Props) {
  return (
    <button
      className={cn(
        " duration-300 hover:opacity-70 ",
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
