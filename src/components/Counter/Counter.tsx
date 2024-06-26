"use client";
import { cn } from "@/lib/utils";
import { useState, useEffect, useCallback, type ChangeEvent } from "react";

interface Props {
  value?: number;
  onCountChange?: (count: number) => void;
  className?: string;
  loading?: boolean;
}

function Counter({
  value = 1,
  onCountChange = () => {},
  className,
  loading = false,
}: Props) {
  const [count, setCount] = useState(value);

  useEffect(() => {
    setCount(value);
  }, [value]);

  const increment = useCallback(() => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      setTimeout(() => onCountChange(newCount), 0);
      return newCount;
    });
  }, [onCountChange]);

  const decrement = useCallback(() => {
    setCount((prevCount) => {
      const newCount = Math.max(prevCount - 1, 1);
      setTimeout(() => onCountChange(newCount), 0);
      return newCount;
    });
  }, [onCountChange]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseInt(event.target.value, 10);
    if (!isNaN(inputValue) && inputValue >= 1) {
      setCount(inputValue);

      setTimeout(() => onCountChange(inputValue), 0);
    }
  };

  return (
    <div
      className={cn(
        "flex items-center justify-around max-w-[8rem] bg-white rounded-md",
        className
      )}
    >
      <button
        disabled={loading}
        onClick={decrement}
        className="duration-300 text-grey hover:text-darkPrimary p-3"
      >
        -
      </button>
      <input
        type="text"
        value={count}
        onChange={handleInputChange}
        id="quantity-input"
        aria-label="quantity-input"
        className={cn(
          "flex-shrink-0 border-0 font-primary  text-sm  focus:outline-none focus:ring-0 max-w-[2.5rem] text-center",
          className
        )}
      />
      <button
        disabled={loading}
        onClick={increment}
        className="duration-300 text-grey hover:text-darkPrimary p-3"
      >
        +
      </button>
    </div>
  );
}

export default Counter;
