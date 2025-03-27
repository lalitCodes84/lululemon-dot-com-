import React from "react";

const Button = ({ onClick, label, className }) => {
  return (
    <button
      className={`className="absolute right-14 bottom-[-120px] bg-white text-black cursor-pointer py-4 px-6 font-bold rounded border-2 hover:bg-black hover:text-white hover:border-black" ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
