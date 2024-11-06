import CategoryLinks from "@/components/shared/CategoryLinks/CategoryLinks";
import Divider from "../../shared/Divider/Divider";
import Navbar from "../Navbar/Navbar";

async function Header() {
  return (
    <header id="header" className=" w-full px-4 relative  ">
      <Navbar />

      <Divider />

      <div className=" flex justify-center items-center py-5 md:hidden">
        <CategoryLinks />
      </div>
    </header>
  );
}

export default Header;
