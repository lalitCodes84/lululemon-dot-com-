import React from 'react'
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineGiftTop } from "react-icons/hi2";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoIosGlobe } from "react-icons/io";

function HeaderMiddleSection() {
  return (
    
        <div className="flex justify-end gap-4 px-4 text-[14px] bg-white">
                <span className="flex gap-x-2">
                  <SlLocationPin className="text-xl" />
                  <a href="" className="">
                    Store Locator
                  </a>
                </span>
                <span className="flex gap-x-2">
                  <HiOutlineGiftTop className="text-xl" />
                  <a href="">Gift Cards</a>
                </span>
                <span className="flex gap-x-2">
                  <IoMdHelpCircleOutline className="text-xl" />
                  <a href="">Get Help</a>
                </span>
                <span className="flex gap-x-2">
                  <IoIosGlobe className="text-xl" />
                  <a href="">USA</a>
                </span>
              </div>
 
  )
}

export default HeaderMiddleSection