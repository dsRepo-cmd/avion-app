import { cn } from "@/lib/utils";
import Button from "../Button/Button";

type VariantForm = "light" | "dark";

interface Props {
  variant?: VariantForm;
  className?: string;
}

const variantClasses: { [key in VariantForm]: string } = {
  light: " bg-lightGrey",
  dark: " ",
};

function EmailSignUpForm({ variant = "light", className = "" }: Props) {
  return (
    <form className={cn(" flex", className)}>
      <input
        className={cn(
          " bg-[#FFFFFF1F] text-white grow px-8 py-4  lg:w-[200px]",
          variantClasses[variant]
        )}
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
