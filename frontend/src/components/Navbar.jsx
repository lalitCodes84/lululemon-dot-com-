import React from "react";
import { IoSearch } from "react-icons/io5";
import { LuCircleUserRound } from "react-icons/lu";
import { RiHeart2Line } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi2";

function Navbar() {
  return (
    <div className="sticky top-0 z-50 flex items-center bg-white w-full h-22">
      <img src="lululemon-Logo.png" className="scale-75" alt="" />
      <div className="flex gap-8 font-bold text-xl">
        <a href="">Women</a>
        <a href="">Men</a>
        <a href="">Bags</a>
        <a href="">Accessories</a>
        <a href="">Shoes</a>
        <a href="" className="text-[#c8102e]">Member Offers</a>
      </div>
      <span className="border-2 mx-10 flex items-center h-14 w-72 rounded">
        <IoSearch className="ml-4 size-6" />
        <input type="text" className="" placeholder="  Serach" />
      </span>
      <span className="flex text-3xl justify-center gap-x-4 ">
        <a href="">
          <LuCircleUserRound />
        </a>
        <a href="">
          <RiHeart2Line />
        </a>
        <a href="">
          <HiOutlineShoppingBag />
        </a>
      </span>
    </div>
  );
}

export default Navbar;
