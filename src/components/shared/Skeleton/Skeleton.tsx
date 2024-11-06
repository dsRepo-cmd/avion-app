import { CSSProperties, HTMLAttributes, memo } from "react";
import { cn } from "@/lib/utils/utils";

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: CSSProperties;
}

function Skeleton(props: SkeletonProps) {
  const { className, style } = props;

  return (
    <div
      className={cn("bg-lightGrey rounded animate-pulse", className)}
      style={style}
    ></div>
  );
}

export default memo(Skeleton);
