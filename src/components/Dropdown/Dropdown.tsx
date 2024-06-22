"use client";
import { FC, ReactNode, useCallback, useState } from "react";
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
interface Props {
  items?: DropdownItem[];
  trigger: ReactNode;
  isDownIcon?: boolean;
  className?: string;
  customIstems?: ReactNode;
}
function Dropdown({
  items,
  trigger,
  isDownIcon = false,
  className = "",
  customIstems,
}: Props) {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <div className=" relative">
      <Button
        className=" flex items-center gap-2"
        variant="clear"
        bgColor="white"
        onClick={toggleOpen}
      >
        {trigger} {isDownIcon && <Icon width={8} height={8} Svg={DownIcon} />}
      </Button>

      <div
        className={cn(
          " duration-200 absolute top-10 right-0 bg-white rounded-lg overflow-hidden",
          isOpen ? " scale-75 opacity-0" : " scale-100 opacity-100",
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
                className={cn(" w-full   p-3 hover:bg-lightGrey")}
              >
                <div className=" flex gap-5 items-center ">
                  {item.svg && <Icon Svg={item.svg} width={16} height={16} />}
                  {item.content}
                </div>
              </button>
            );

            if (item.href) {
              return (
                <Link key={item.id} href={item.href}>
                  {content}
                </Link>
              );
            }
            return (
              <li className=" flex flex-col" key={item.id}>
                {content}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
