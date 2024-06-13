import React from "react";
import Divider from "../Divider/Divider";
import Navbar from "../Navbar/Navbar";

const filterTabs = [
  { id: "1", name: "Plant pots" },
  { id: "2", name: "Ceramics" },
  { id: "3", name: "Tables" },
  { id: "4", name: "Chairs" },
  { id: "5", name: "Crockery" },
  { id: "6", name: "Tableware" },
  { id: "7", name: "Cutlery" },
];

function Header() {
  return (
    <header className=" w-full px-4  ">
      <Navbar />
      <Divider />
      <div className=" flex justify-center items-center py-5 md:hidden">
        <ul className=" flex justify-center gap-11">
          {filterTabs.map((tab) => (
            <li key={tab.id}>
              <button className=" text-grey">{tab.name}</button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
