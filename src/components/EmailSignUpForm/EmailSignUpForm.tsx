import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/utils";
import Button from "../Button/Button";

interface Props extends VariantProps<typeof formVariants> {
  className?: string;
}

const formVariants = cva("flex", {
  variants: {
    variant: {
      light: "bg-lightGrey",
      dark: "bg-[#FFFFFF1F] text-white",
    },
  },
  defaultVariants: {
    variant: "light",
  },
});

const inputVariants = cva("grow px-8 py-4 lg:w-[200px]", {
  variants: {
    variant: {
      light: "bg-lightGrey",
      dark: "bg-[#FFFFFF1F] text-white",
    },
  },
  defaultVariants: {
    variant: "light",
  },
});

function EmailSignUpForm({ variant = "light", className = "" }: Props) {
  return (
    <form className={cn(formVariants({ variant }), className)}>
      <input
        className={cn(inputVariants({ variant }))}
        type="text"
        placeholder="your@email.com"
      />
      <Button
        variant="filled"
        bgColor={variant === "light" ? "black" : "white"}
        type="submit"
      >
        Sign up
      </Button>
    </form>
  );
}

export default EmailSignUpForm;
