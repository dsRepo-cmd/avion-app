import { InputHTMLAttributes } from "react";
import Typography from "../Typography/Typography";
import { cn } from "@/lib/utils";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: () => void;
  className?: string;
}

function CheckBox({ value, onChange, className, ...props }: Props) {
  return (
    <div className="flex items-center gap-3 m-3" key={value}>
      <input
        className={cn(
          "relative float-left h-[1rem] w-[1rem] appearance-none rounded-sm border border-solid border-[#dcdcdc] outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white",
          className
        )}
        type="checkbox"
        id={value}
        value={value}
        name={value}
        onChange={onChange}
        {...props}
      />
      <label
        onChange={onChange}
        className="inline-block pl-[0.15rem] hover:cursor-pointer text-nowrap"
        htmlFor={value}
      >
        <Typography color="black" size="16px" fontFamily="primary" tag="p">
          {value}
        </Typography>
      </label>
    </div>
  );
}

export default CheckBox;
