import React from "react";
import Logo from "./Logo.jsx";
import Icons from "./Icons.jsx";
import NavLinks from "./Navlinks.jsx";
import SearchBar from "./Searchbar.jsx";

function Navbar() {
  return (
    <div className="sticky top-0 z-50 flex items-center bg-white w-full h-22">
      <Logo />
      <NavLinks />
      <SearchBar />
      <Icons />
    </div>
  );
}

export default Navbar;
