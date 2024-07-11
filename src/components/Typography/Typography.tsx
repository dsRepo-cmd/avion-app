import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/utils";

type TagVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

interface TypographyProps extends VariantProps<typeof typographyVariants> {
  tag: TagVariant;
  className?: string;
  children: React.ReactNode;
}

const typographyVariants = cva("", {
  variants: {
    size: {
      "14px": "text-sm",
      "16px": "text-base",
      "18px": "text-lg",
      "20px": "text-xl",
      "24px": "text-2xl",
      "32px": "text-3xl",
      "36px": "text-[36px] text-3xl",
    },
    fontFamily: {
      primary: "font-primary",
      secondary: "font-second",
    },
    color: {
      black: "text-darkPrimary",
      white: "text-white",
      gray: "text-gray",
      light: "text-textLight",
    },
  },
  defaultVariants: {
    size: "16px",
    fontFamily: "primary",
    color: "black",
  },
});

const Typography: React.FC<TypographyProps> = ({
  tag,
  size,
  fontFamily,
  color,
  className = "",
  children,
}) => {
  const Tag = tag;
  return (
    <Tag
      className={cn(typographyVariants({ size, fontFamily, color }), className)}
    >
      {children}
    </Tag>
  );
};

export default Typography;
