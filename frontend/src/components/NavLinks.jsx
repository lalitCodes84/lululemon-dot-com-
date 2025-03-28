import React from "react";

function Navlinks() {
  const links = [
    "Women",
    "Men",
    "Bags",
    "Accessories",
    "Shoes",
    "Member Offers",
  ];

  return (
    <div className="flex gap-8 font-bold text-xl">
      {links.map((link, index) => (
        <a
          key={index}
          href=""
          className={` ${link === "Member Offers" ? "text-[#c8102e]" : ""} relative after:content-[''] after:absolute after:left-0 after:bottom-0 
                      after:w-0 after:h-[3px] 
                      after:bg-[#c8102e] after:transition-all after:duration-300
                      hover:after:w-full `}
        >
          {link}
        </a>
      ))}
    </div>
  );
}

export default Navlinks;
