"use client";
import Button from "@/components/Button/Button";
import CategoryLinks from "@/components/CategoryLinks/CategoryLinks";
import Portal from "@/components/Portal/Portal";
import { cn } from "@/lib/utils";
import { useCallback, useState } from "react";

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      <Button
        id="buttonNavigation"
        title="navigation"
        onClick={toggleNav}
        variant="clear"
        bgColor="white"
      >
        <div
          className={
            " relative w-[16px] h-[16px] mx-auto cursor-pointer transition-transform duration-200 ease-in-out  "
          }
        >
          <span
            className={cn(
              "block absolute   h-[2px] w-full bg-darkPrimary rounded-md transition-transform duration-[0.225s] ease-in-out ",
              isOpen ? "top-[7px] rotate-[135deg]" : "top-0 left-0"
            )}
          ></span>
          <span
            className={cn(
              "block transition-all  absolute h-[2px] w-full bg-darkPrimary rounded-md  duration-[0.225s] ease-in-out",
              isOpen ? " opacity-0 left-[-16px] top-[4px]" : "top-[4px] left-0"
            )}
          ></span>
          <span
            className={cn(
              "block transition-all  absolute h-[2px] w-full bg-darkPrimary rounded-md  duration-[0.225s] ease-in-out",
              isOpen ? " opacity-0 left-[-16px] top-[8px]" : "top-[8px] left-0"
            )}
          ></span>
          <span
            className={cn(
              "block  absolute h-[2px] w-full bg-darkPrimary  rounded-md transition-transform duration-[0.225s] ease-in-out",
              isOpen ? "top-[7px] rotate-[-135deg]" : "top-[12px] left-0"
            )}
          ></span>
        </div>
      </Button>

      <Portal>
        <div
          className={cn(
            " duration-300 flex absolute items-center justify-center left-0 top-[73px] bg-white w-screen p-3  z-50 ",
            isOpen ? " left-0 " : " left-[100%]"
          )}
        >
          <CategoryLinks className=" flex-col  gap-4 " />
        </div>
      </Portal>
    </>
  );
}

export default BurgerMenu;
