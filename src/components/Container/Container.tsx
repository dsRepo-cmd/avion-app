import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";

type BackgroundColor = "white" | "dark" | "light";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  bgColor?: BackgroundColor;
  className?: string;
}

const bgColorClasses: Record<BackgroundColor, string> = {
  white: "bg-white",
  dark: "bg-darkPrimary",
  light: "bg-lightGrey",
};

function Container({
  children,
  bgColor = "white",
  className,
  ...props
}: Props) {
  return (
    <div
      className={cn(
        " flex  flex-col justify-between p-14 w-full h-full lg:px-6 lg:py-12 ",
        bgColorClasses[bgColor],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Container;
