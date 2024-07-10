import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/utils";

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  className?: string;
  children?: React.ReactNode;
}

const buttonVariants = cva(
  "text-nowrap duration-300 text-center disabled:opacity-70 hover-hover:hover:opacity-70 hover-none:active:opacity-70",
  {
    variants: {
      variant: {
        clear: "",
        filled: "py-4 px-8 text-base",
      },
      bgColor: {
        black: "bg-darkPrimary text-white",
        light: "bg-buttonLight text-white",
        gray: "bg-lightGrey text-darkPrimary",
        white: "bg-white text-darkPrimary",
        clear: "",
      },
    },
    defaultVariants: {
      variant: "filled",
      bgColor: "black",
    },
  }
);

function Button({
  children,
  className = "",
  variant = "filled",
  bgColor = "black",
  ...props
}: Props) {
  return (
    <button
      className={cn(buttonVariants({ variant, bgColor, className }))}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
