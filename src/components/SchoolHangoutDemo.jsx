import React from "react";
import capterra_star from "../assets/images/school-hangout/capterra-stars.png";
import left_decoration from "../assets/images/school-hangout/left-bottom-plain.png";
import right_decoration from "../assets/images/school-hangout/right-bottom-robot.png";
import Button from "./common/Button";

const SchoolHangoutDemo = () => {
  return (
    <div className="bg-hangout-black-wave  bg_full bg-cover pb-5 px-3 mt-[127px] ">
      <div className="container relative xl:max-w-[1140px] px-3 xl:px-0 mx-auto rounded-2xl bg-hangout-bg-blue bg-cover pt-10 pb-[38px] flex flex-col items-center -mt-20">
        <h3 className="max-w-[523px] mx-auto text-center font-lato font-bold md:text-[30px] text-2xl text-white leading-[120%] pb-[26px]">
          Learn how Our School Hangout saves time Request a Demo today!
        </h3>
        <img className="w-[173px] mb-10" src={capterra_star} alt="stars" />
        <Button buttonStyle="hover:text-white text-[#4A8DC5] bg-white border-white !px-[25px]" />
        <img
          className="w-[95px] absolute left-[11px] bottom-[14px] sm:block hidden"
          src={left_decoration}
          alt="plain-earth"
        />
        <img
          className="w-[95px] absolute right-[11px] bottom-[14px] sm:block hidden"
          src={right_decoration}
          alt="robot"
        />
      </div>
    </div>
  );
};

export default SchoolHangoutDemo;
