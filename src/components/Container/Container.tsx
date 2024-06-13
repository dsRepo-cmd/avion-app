import { cn } from "@/lib/utils";
import React from "react";

type BackgroundColor = "white" | "dark" | "light";

interface Props {
  children: React.ReactNode;
  bgColor?: BackgroundColor;
}

const bgColorClasses: Record<BackgroundColor, string> = {
  white: "bg-white",
  dark: "bg-darkPrimary",
  light: "bg-lightGrey",
};

function Container({ children, bgColor = "white" }: Props) {
  return (
    <div
      className={cn(
        " flex  flex-col justify-between p-20 w-full h-full lg:p-0 ",
        bgColorClasses[bgColor]
      )}
    >
      {children}
    </div>
  );
}

export default Container;
