import SearchIcon from "@/assets/search.svg";
import Dropdown from "@/components/Dropdown/Dropdown";
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
        trigger={<SearchIcon />}
      >
        <div className=" p-4 bg-lightGrey ">
          <Input onChange={handleSearchChange} label="Search" name="search" />
        </div>
      </Dropdown>
    </div>
  );
}

export default Search;
