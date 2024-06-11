import React from "react";
import SearchIcon from "@/assets/search.svg";
import CartIcon from "@/assets/shopping-cart.svg";
import UserAvatarIcon from "@/assets/user-avatar.svg";
import Typography from "../Typography/Typography";

function Navbar() {
  return (
    <nav className=" flex justify-between items-center py-5">
      <div>
        <button title="search">
          <SearchIcon />
        </button>
      </div>

      <Typography fontFamily="secondary" size="24px" tag="h3" color="black">
        Avion
      </Typography>

      <div className=" flex gap-4">
        <button title="cart">
          <CartIcon />
        </button>

        <button title="user-avatar">
          <UserAvatarIcon />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
