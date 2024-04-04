import React from "react";

const Button = ({ buttonStyle }) => {
  return (
    <button
      className={`rounded-full  px-[15px] py-3 font-lato font-bold text-base  border hover:bg-transparent duration-300 ${buttonStyle} `}
    >
      Request a Demo
    </button>
  );
};

export default Button;
