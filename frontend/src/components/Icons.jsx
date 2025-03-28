import React from "react";
import { LuCircleUserRound } from "react-icons/lu";
import { RiHeart2Line } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi2";

function Icons() {
  return (
    <span className="flex text-3xl justify-center gap-x-4">
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
  );
}

export default Icons;
