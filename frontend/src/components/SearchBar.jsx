import React from "react";
import { IoSearch } from "react-icons/io5";

function SearchBar() {
  return (
    <span className="border-2 mx-10 flex items-center h-14 w-[45vw] rounded">
      <IoSearch className="ml-4 size-6" />
      <input type="text" className="" placeholder="  Search" />
    </span>
  );
}

export default SearchBar;
