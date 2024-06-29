import React, { FC } from "react";
import { cn } from "@/lib/utils";

interface Props extends React.SVGProps<SVGSVGElement> {
  className?: string;
  Svg: FC<React.SVGProps<SVGSVGElement>>;
  title?: string;
  filled?: boolean;
}

const Icon = ({
  Svg,
  width = "30",
  height = "30",
  className,
  ...props
}: Props) => {
  return (
    <Svg
      className={cn(className)}
      width={width}
      height={height}
      {...props}
      onClick={undefined}
    />
  );
};

export default Icon;
