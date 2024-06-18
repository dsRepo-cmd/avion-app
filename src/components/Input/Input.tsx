import { cn } from "@/lib/utils";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  className?: string;
  error?: string;
}

function Input({ name, label, className, error, ...props }: Props) {
  return (
    <div className="relative z-0 w-full my-3">
      <input
        name={name}
        className={cn(
          "peer block px-8 py-4 w-full bg-transparent  appearance-none  focus:ring-0 ",
          error && "text-error  outline-[#f44336]"
        )}
        placeholder=" "
        {...props}
      />
      <label
        htmlFor={name}
        className={cn(
          "absolute  px-1 text-[#999999] duration-300 transform -translate-y-10 scale-75 top-4 left-2 z-50 origin-[0]  peer-focus:text-[black] peer-placeholder-shown:left-[28px]   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:left-0 peer-focus:-translate-y-10 ",
          className,
          error && " text-error peer-focus:text-error"
        )}
      >
        {label}
      </label>
      {error && <div className="text-error text-sm mt-1 ms-1">{error}</div>}
    </div>
  );
}

export default Input;
