import React from "react";
import Logo from "./Logo.jsx";
import Icons from "./Icons.jsx";
import Navlinks from "./Navlinks";
import SearchBar from "./Searchbar";

function Navbar() {
  return (
    <div className="sticky top-0 z-50 flex items-center bg-white w-full h-22">
      <Logo />
      <Navlinks />
      <SearchBar />
      <Icons />
    </div>
  );
}

export default Navbar;
