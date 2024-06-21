import { Menu, MenuButton, MenuItems, Transition } from "@headlessui/react";
import Typography from "@/components/Typography/Typography";
import Icon from "@/components/Icon/Icon";
import DownIcon from "@/assets/chevron-down.svg";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  children: ReactNode;
  className?: string;
}

const DropdownCustom = ({ title, children, className }: Props) => {
  return (
    <Menu>
      <MenuButton className={"flex gap-4 py-3 items-center px-6"}>
        <Typography color="black" size="16px" fontFamily="secondary" tag="h5">
          {title}
        </Typography>
        <Icon width={9} Svg={DownIcon} />
      </MenuButton>

      <Transition
        enter="transition ease-out duration-150"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <MenuItems
          className={cn("rounded-lg bg-white", className)}
          anchor="bottom end"
        >
          {children}
        </MenuItems>
      </Transition>
    </Menu>
  );
};

export default DropdownCustom;
