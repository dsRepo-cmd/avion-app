import { cn } from "@/lib/utils";
import React, { ButtonHTMLAttributes } from "react";

type ButtonVariant = "clear" | "filled";
type BackgroundColors = "black" | "light" | "clear";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  variant?: ButtonVariant;
  bgColor?: BackgroundColors;
}

const variantClasses: { [key in ButtonVariant]: string } = {
  clear: "",
  filled: "py-4 px-8 text-base text-white ",
};

const bgColorClasses: { [key in BackgroundColors]: string } = {
  black: "bg-darkPrimaryk",
  light: "bg-buttonLight",
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
        " duration-300 hover:opacity-70",
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
