import React from "react";
import butterfly from "../assets/images/hero/butterfly.png";
import { ourBenefits } from "./common/Helper";
import fishtank from "../assets/images/our-benefits/fish-tank.png";

const OurBenefits = () => {
  return (
    <div className="relative lg:pb-[117px] sm:pb-[90px] pb-12">
      <div className="container xl:max-w-[1140px] mx-auto pt-[118px] px-3 xl:px-0 relative z-10">
        <div className="relative w-[300px] mx-auto">
          <h2 className="text-center font-extrabold font-lato text-black lg:text-[40px] sm:text-4xl text-3xl">
            Our{" "}
            <span className="text-[#4A8DC5] lg:text-5xl sm:tex-5xl text-4xl ">
              Benefits
            </span>
          </h2>
          <img
            className="lg:w-[72px] w-[50px] absolute sm:right-8 right-14 top-3  rotate_y_full "
            src={butterfly}
            alt="rainbow-train"
          />
        </div>
        <div className="lg:pt-14 pt-8 flex justify-between flex-wrap max-[540px]:gap-6">
          {ourBenefits.map((value, index) => {
            return (
              <div
                key={index}
                className={`px-[14px] lg:w-[calc(25%-18px)] w-[calc(50%-12px)] max-[540px]:w-full max-[540px]:max-w-[300px] max-[540px]:mx-auto py-7 border border-black border-opacity-20 hover:border-[#56BD84] duration-300 hover:border-opacity-100 rounded-2xl bg-white ${value.margin}`}
              >
                <div className="w-[74px] h-[74px] flex justify-center items-center bg-[#56BD84] bg-opacity-20 rounded-full mx-auto">
                  {value.icon}
                </div>
                <h2 className="pt-[27px] text-center font-lato font-bold text-[18px] text-black pb-1.5">
                  {value.title}
                </h2>
                <p className="font-lato font-normal text-base text-black text-opacity-70 text-center">
                  {value.paragraph}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <img
        className="absolute bottom-0 right-0 lg:w-[140px] w-[100px]"
        src={fishtank}
        alt="fish-tank"
      />
    </div>
  );
};

export default OurBenefits;
