"use client";

import { FC, ReactNode, useCallback, useEffect, useRef, useState } from "react";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import DownIcon from "@/assets/chevron-down.svg";
import { cn } from "@/lib/utils";
import Link from "next/link";

export interface DropdownItem {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
  id: string;
  svg?: FC<React.SVGProps<SVGSVGElement>>;
}

type Position = "bottom" | "bottomStart" | "bottomEnd" | "right";

interface Props {
  items?: DropdownItem[];
  trigger: ReactNode;
  isDownIcon?: boolean;
  className?: string;
  children?: ReactNode;
  classTrigger?: string;
  position?: Position;
}

const positionClasses: { [key in Position]: string } = {
  bottom: "",
  bottomStart: "top-10 left-0",
  bottomEnd: "top-10  right-0",
  right: "left-10 top-[-16px]",
};

const Dropdown: FC<Props> = ({
  items,
  trigger,
  isDownIcon = false,
  className = "",
  children,
  classTrigger,
  position = "bottomEnd",
}) => {
  const [isOpen, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleOpen = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const closeDropdown = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeDropdown]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeDropdown();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeDropdown]);

  const itemClassName = "w-full p-3 text-left hover:bg-lightGrey";
  const disabledClassName = "opacity-50 cursor-not-allowed";
  const enabledClassName = "cursor-pointer";

  return (
    <div ref={dropdownRef} className="relative">
      <Button
        className={cn("flex items-center gap-3 font-second", classTrigger)}
        variant="clear"
        bgColor="white"
        onClick={toggleOpen}
      >
        {trigger}
        {isDownIcon && <Icon width={8} height={8} Svg={DownIcon} />}
      </Button>

      <div
        className={cn(
          "duration-200 absolute z-20  bg-white rounded-lg overflow-hidden shadow-lg",
          isOpen
            ? "scale-100 opacity-100"
            : "scale-75 opacity-0 pointer-events-none",
          positionClasses[position],
          className
        )}
      >
        <ul>
          {items?.map((item) => {
            const content = (
              <button
                type="button"
                disabled={item.disabled}
                onClick={item.onClick}
                className={cn(
                  itemClassName,
                  item.disabled ? disabledClassName : enabledClassName
                )}
              >
                <div className="flex gap-5 items-center">
                  {item.svg && <Icon Svg={item.svg} width={16} height={16} />}
                  {item.content}
                </div>
              </button>
            );

            if (item.href) {
              return (
                <li key={item.id} className="flex flex-col">
                  <Link href={item.href}>{content}</Link>
                </li>
              );
            }

            return (
              <li key={item.id} className="flex flex-col w-full">
                {content}
              </li>
            );
          })}
          {children}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
