import { cn } from "@/lib/utils";

type TagVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
type FontSizes = "14px" | "16px" | "24px" | "32px";
type FontFamilies = "primary" | "secondary";
type FontColors = "black" | "white" | "gray";

interface TypographyProps {
  tag: TagVariants;
  size?: FontSizes;
  fontFamily?: FontFamilies;
  color?: FontColors;
  className?: string;
  children: React.ReactNode;
}

const colorClasses: Record<FontColors, string> = {
  black: "text-darkPrimary",
  white: "text-white",
  gray: "text-gray",
};
const sizeClasses: Record<FontSizes, string> = {
  "14px": "text-sm",
  "16px": "text-base",
  "24px": "text-2xl",
  "32px": "text-3xl",
};

const fontFamilyClasses: Record<FontFamilies, string> = {
  primary: "font-primary",
  secondary: "font-second",
};

const Typography: React.FC<TypographyProps> = ({
  tag,
  size = "16px",
  fontFamily = "primary",
  className,
  children,
}) => {
  const Tag = tag;
  return (
    <Tag
      className={cn(
        " font-second text-sm",
        sizeClasses[size],
        fontFamilyClasses[fontFamily],
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Typography;
