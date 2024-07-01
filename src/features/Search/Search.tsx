import SearchIcon from "@/assets/search.svg";
import XIcon from "@/assets/x.svg";
import Button from "@/components/Button/Button";
import Icon from "@/components/Icon/Icon";
import Portal from "@/components/Portal/Portal";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";

function Search() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleSearch = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
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
        !(e.target as HTMLElement).closest("#buttonSearch")
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

  const handleSearchChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const query = e.target.value;
      const params = new URLSearchParams({ query }).toString();
      router.push(`/product/?${params}`);
    },
    [router]
  );

  return (
    <div>
      <Button
        id="buttonSearch"
        title="Search"
        variant="clear"
        bgColor="clear"
        onClick={toggleSearch}
      >
        {isOpen ? (
          <Icon
            className="duration-200 hover-hover:hover:scale-[1.2] hover-none:active:scale-[1.2] active:scale-[1]"
            width={16}
            height={16}
            Svg={XIcon}
          />
        ) : (
          <Icon
            className="duration-200 hover-hover:hover:scale-[1.2] hover-none:active:scale-[1.2] active:scale-[1]"
            width={16}
            height={16}
            Svg={SearchIcon}
          />
        )}
      </Button>

      <Portal mountId="header">
        <div
          ref={menuRef}
          className={cn(
            " duration-300 flex absolute items-center justify-center left-0 top-[73px] bg-white w-screen px-10 py-[11px]  z-40 ",
            isOpen ? " top-[73px]" : " top-[-100%]"
          )}
        >
          <input
            type="search"
            name="search"
            onChange={handleSearchChange}
            id="search"
            placeholder="Search"
            className={cn(
              "peer block px-8 py-2 w-full bg-transparent  appearance-none  focus:ring-0 border border-borderGrey rounded-sm "
            )}
          />
        </div>
      </Portal>
    </div>
  );
}

export default Search;
