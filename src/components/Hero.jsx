import React from "react";
import butterfly from "../assets/images/hero/butterfly.png";
import Button from "./common/Button";

const Hero = () => {
  return (
    <div className="container xl:max-w-[1140px] flex flex-col items-center mx-auto pt-[84px] px-3 relative z-10">
      <div className="relative">
        <h1 className="font-lato font-bold xl:text-[73px] md:text-[50px] sm:text-4xl text-3xl text-black !leading-none text-center ">
          Simplified, Streamlined
        </h1>
        <img
          className="sm:w-[66px] w-10 absolute left-2 top-1 -translate-x-full -translate-y-2/3"
          src={butterfly}
          alt="butterfly"
        />
      </div>
      <h2 className="font-lato font-bold xl:text-[61px] md:text-[50px] sm:text-4xl text-3xl text-black !leading-none pt-2 pb-[14px] text-center">
        Preschool Management
      </h2>
      <p className="font-lato font-normal lg:text-xl sm:text-lg text-base text-black text-opacity-70 max-w-[681px] text-center pb-[31px] px-4 lg:px-0">
        Spend less time juggling administrative tasks and more time growing your
        preschool with Our School Hangout.
      </p>
      <Button buttonStyle="hover:text-[#4A8DC5] text-white bg-[#4A8DC5] border-[#4A8DC5] !px-[25px]" />
    </div>
  );
};

export default Hero;
