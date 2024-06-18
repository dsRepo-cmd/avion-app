"use client";
import { cn } from "@/lib/utils";
import { useState, useEffect, useCallback, ChangeEvent } from "react";

interface Props {
  value?: number;
  onCountChange?: (count: number) => void;
  className?: string;
}

function Counter({ value = 1, onCountChange = () => {}, className }: Props) {
  const [count, setCount] = useState(value);

  useEffect(() => {
    setCount(value);
  }, [value]);

  const increment = useCallback(() => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      onCountChange(newCount);
      return newCount;
    });
  }, [onCountChange]);

  const decrement = useCallback(() => {
    setCount((prevCount) => {
      const newCount = Math.max(prevCount - 1, 1);
      onCountChange(newCount);
      return newCount;
    });
  }, [onCountChange]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseInt(event.target.value, 10);
    if (!isNaN(inputValue) && inputValue >= 1) {
      setCount(inputValue);
      onCountChange(inputValue);
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
        className={cn(
          "flex-shrink-0 text-gray-900 dark:text-white border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center",
          className
        )}
      />
      <button
        onClick={increment}
        className="duration-300 text-grey hover:text-darkPrimary p-3"
      >
        +
      </button>
    </div>
  );
}

export default Counter;
