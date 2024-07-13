import type { HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/utils";

interface Props
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  children: React.ReactNode;
  className?: string;
}

const containerVariants = cva(
  "flex flex-col justify-between p-14 w-full h-full lg:px-6 lg:py-12",
  {
    variants: {
      bgColor: {
        white: "bg-white",
        dark: "bg-darkPrimary",
        light: "bg-lightGrey",
      },
    },
    defaultVariants: {
      bgColor: "white",
    },
  }
);

function Container({ children, bgColor, className, ...props }: Props) {
  return (
    <div className={cn(containerVariants({ bgColor }), className)} {...props}>
      {children}
    </div>
  );
}

export default Container;
