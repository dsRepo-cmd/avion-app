"use client";
import { cn } from "@/lib/utils/utils";
import React, { useState } from "react";

type Props = {
  onCountChange?: (count: number) => void;
  className?: string;
  loading?: boolean;
};

const Counter: React.FC<Props> = ({
  onCountChange = () => {},
  className,
  loading = false,
}: Props) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    onCountChange(newCount);
  };

  const decrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    onCountChange(newCount);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCount = parseInt(event.target.value, 10);
    if (!isNaN(newCount)) {
      setCount(newCount);
      onCountChange(newCount);
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
};

export default Counter;
