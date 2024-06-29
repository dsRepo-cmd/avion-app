import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

function Page({ children, className, ...props }: Props) {
  return (
    <main
      className={cn(
        "flex  flex-col items-center justify-between w-full  max-w-[1440px]",
        className
      )}
      {...props}
    >
      {children}
    </main>
  );
}

export default Page;
