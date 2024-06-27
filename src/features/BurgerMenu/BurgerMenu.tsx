"use client";
import Button from "@/components/Button/Button";
import CategoryLinks from "@/components/CategoryLinks/CategoryLinks";
import Portal from "@/components/Portal/Portal";
import { cn } from "@/lib/utils";
import { useCallback, useEffect, useRef, useState } from "react";

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleNav = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  }, []);

  const closeNav = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleEscapeKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeNav();
      }
    },
    [closeNav]
  );

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (
        menuRef.current &&
        e.target instanceof Node &&
        !menuRef.current.contains(e.target) &&
        !(e.target as HTMLElement).closest("#buttonNavigation")
      ) {
        closeNav();
      }
    },
    [closeNav]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, handleEscapeKey, handleClickOutside]);

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
            " relative w-[16px] h-[16px] mx-auto cursor-pointer transition-transform duration-200 ease-in-out z-50  "
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
          ref={menuRef}
          className={cn(
            " duration-300 flex absolute items-center justify-center left-0 top-[73px] bg-white w-screen p-3  z-40 ",
            isOpen ? " top-[73px]" : " top-[-100%]"
          )}
        >
          <CategoryLinks className=" flex-col  gap-6 " />
        </div>
      </Portal>
    </>
  );
}

export default BurgerMenu;
