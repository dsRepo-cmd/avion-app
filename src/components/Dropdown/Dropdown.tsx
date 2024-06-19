import { FC, ReactNode } from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import Icon from "../Icon/Icon";
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

type AnchorProps =
  | "bottom"
  | "bottom end"
  | "bottom start"
  | "left"
  | "left end"
  | "left start"
  | "right"
  | "right end"
  | "right start"
  | "top"
  | "top end"
  | "top start";

interface Props {
  trigger: ReactNode;
  items: DropdownItem[];
  anchor?: AnchorProps;
}
export default function Dropdown({ trigger, items, anchor = "bottom" }: Props) {
  return (
    <Menu>
      <MenuButton>{trigger}</MenuButton>

      <Transition
        enter="transition ease-out duration-75"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <MenuItems className={"  bg-lightGrey rounded-lg  "} anchor={anchor}>
          {items.map((item) => {
            const content = ({ active }: { active: boolean }) => (
              <button
                type="button"
                disabled={item.disabled}
                onClick={item.onClick}
                className={cn(" w-full   p-3", active && " bg-borderDark")}
              >
                <div className=" flex gap-5 items-center ">
                  {item.svg && <Icon Svg={item.svg} width={16} height={16} />}
                  {item.content}
                </div>
              </button>
            );

            if (item.href) {
              return (
                <MenuItem
                  as={Link}
                  href={item.href}
                  disabled={item.disabled}
                  key={item.id}
                >
                  {content}
                </MenuItem>
              );
            }

            return (
              <MenuItem key={item.id} disabled={item.disabled}>
                {content}
              </MenuItem>
            );
          })}
        </MenuItems>
      </Transition>
    </Menu>
  );
}
