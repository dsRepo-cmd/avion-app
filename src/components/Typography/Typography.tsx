import { cn } from "@/lib/utils";

type TagVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
type FontSizes = "14px" | "16px" | "18px" | "20px" | "24px" | "32px" | "36px";
type FontFamily = "primary" | "secondary";
type FontColor = "black" | "white" | "gray" | "light";

interface TypographyProps {
  tag: TagVariant;
  size?: FontSizes;
  fontFamily?: FontFamily;
  color?: FontColor;
  className?: string;
  children: React.ReactNode;
}

const colorClasses: Record<FontColor, string> = {
  black: "text-darkPrimary",
  white: "text-white",
  gray: "text-gray",
  light: "text-textLight",
};
const sizeClasses: Record<FontSizes, string> = {
  "14px": "text-sm",
  "16px": "text-base",
  "18px": "text-lg",
  "20px": "text-xl",
  "24px": "text-2xl",
  "32px": "text-3xl",
  "36px": "text[36px]",
};

const fontFamilyClasses: Record<FontFamily, string> = {
  primary: "font-primary",
  secondary: "font-second",
};

const Typography: React.FC<TypographyProps> = ({
  tag,
  size = "16px",
  fontFamily = "primary",
  color = "black",
  className = "",
  children,
}) => {
  const Tag = tag;
  return (
    <Tag
      className={cn(
        sizeClasses[size],
        fontFamilyClasses[fontFamily],
        colorClasses[color],
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Typography;
