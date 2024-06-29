import SearchIcon from "@/assets/search.svg";
import Dropdown from "@/components/Dropdown/Dropdown";
import Icon from "@/components/Icon/Icon";
import Input from "@/components/Input/Input";
import { useRouter } from "next/navigation";
import { ChangeEvent, useCallback } from "react";

function Search() {
  const router = useRouter();

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
      <Dropdown
        className=" w-[300px]"
        position="bottomStart"
        trigger={
          <Icon
            className="duration-200 hover-hover:hover:scale-[1.2] hover-none:active:scale-[1.2] active:scale-[1]"
            width={16}
            height={16}
            Svg={SearchIcon}
          />
        }
      >
        <div className=" p-2">
          <Input
            onChange={handleSearchChange}
            label="Search"
            aria-label="Search"
            name="search"
            type="search"
          />
        </div>
      </Dropdown>
    </div>
  );
}

export default Search;
