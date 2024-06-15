"use client";
import { memo, useState, useCallback, ChangeEvent } from "react";

interface Props {}
function Counter({}: Props) {
  const [count, setCount] = useState(1);

  const increment = useCallback(
    () => setCount((prevCount) => prevCount + 1),
    []
  );
  const decrement = useCallback(
    () => setCount((prevCount) => Math.max(prevCount - 1, 0)),
    []
  );

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 1) {
      setCount(value);
    }
  };

  return (
    <div className="flex items-center justify-around max-w-[8rem] bg-white p-3 shadow-sm rounded-md">
      <button
        onClick={increment}
        className=" duration-300 text-borderGrey hover:text-darkPrimary"
      >
        +
      </button>
      <input
        type="text"
        value={count}
        onChange={handleInputChange}
        id="quantity-input"
        className="flex-shrink-0 text-gray-900 dark:text-white border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center"
      />
      <button
        onClick={decrement}
        className=" duration-300 text-borderGrey hover:text-darkPrimary"
      >
        -
      </button>
    </div>
  );
}

export default memo(Counter);
