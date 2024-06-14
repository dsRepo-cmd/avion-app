import React from "react";
import Divider from "../Divider/Divider";
import Navbar from "../Navbar/Navbar";
import { ProductCategory } from "@/app/product/types";
import Link from "next/link";

function Header() {
  return (
    <header className=" w-full px-4  ">
      <Navbar />
      <Divider />
      <div className=" flex justify-center items-center py-5 md:hidden">
        <ul className=" flex justify-center gap-11">
          {Object.values(ProductCategory).map((category) => (
            <li key={category}>
              <Link
                href={`/product?category=${category}`}
                className=" text-grey"
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
