import {
  type HTMLInputTypeAttribute,
  type InputHTMLAttributes,
  useState,
} from "react";
import { cn } from "@/lib/utils/utils";

import Button from "../Button/Button";
import EyeIcon from "../../icons/EyeIcon";
import EyeHideIcon from "../../icons/EyeHideIcon";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  className?: string;
  error?: string;
  password?: boolean;
  type?: HTMLInputTypeAttribute;
}

function Input({
  name,
  label = "",
  className,
  error,
  password,
  type = "text",
  ...props
}: Props) {
  const [isHide, setHide] = useState(password);
  const EyeSvg = isHide ? <EyeIcon size={20} /> : <EyeHideIcon size={20} />;

  const onChangeView = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setHide(!isHide);
    console.log(EyeIcon, isHide);
  };

  return (
    <div className="relative z-0 w-full my-3">
      <input
        type={isHide ? "password" : "text"}
        name={name}
        id={name}
        className={cn(
          "peer block px-8 py-4 w-full bg-transparent  appearance-none  focus:ring-0 ",
          error && "text-error  outline-[#f44336]",
          className
        )}
        placeholder=" "
        {...props}
      />
      <label
        htmlFor={name}
        className={cn(
          "absolute pointer-events-none  px-1 text-[#999999] duration-300 transform -translate-y-10 scale-75 top-4 left-2 z-50 origin-[0]  peer-focus:text-[black] peer-placeholder-shown:left-[28px]   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:left-0 peer-focus:-translate-y-10 ",

          error && " text-error peer-focus:text-error"
        )}
      >
        {label}
      </label>
      {password && (
        <Button
          variant="clear"
          type="button"
          bgColor="clear"
          className=" duration-200 absolute right-7 top-[18px]"
          onClick={onChangeView}
        >
          {EyeSvg}
        </Button>
      )}
      {error && <div className="text-error text-sm mt-1 ms-1">{error}</div>}
    </div>
  );
}

export default Input;
