import { cn } from "@/lib/utils/utils";
import { CSSProperties, HTMLAttributes, memo } from "react";

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  aspectRatio?: string;
}

function Skeleton(props: SkeletonProps) {
  const { className, aspectRatio } = props;

  const styles: CSSProperties = {
    aspectRatio,
  };

  return (
    <div
      className={cn(
        "max-w-full shadow-custom bg-borderGrey overflow-hidden animate-pulse ",
        className
      )}
      style={styles}
    />
  );
}

export default memo(Skeleton);
