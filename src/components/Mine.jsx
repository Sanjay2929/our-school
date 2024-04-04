import React from "react";
import rainbow from "../assets/images/mine/rainbow-train.png";
import { mineSchoolList } from "./common/Helper";
import decoration_left from "../assets/images/mine/deco-left.png";

const Mine = () => {
  return (
    <div className="relative lg:pb-[162px] pb-[100px] pt-20">
      <div className="container xl:max-w-[1140px] mx-auto px-3 xl:px-0 relative z-10">
        <div className="relative lg:w-[250px] w-[200px] mx-auto">
          <h2 className="text-center font-extrabold font-lato text-black lg:text-5xl sm:text-4xl text-3xl lg:pb-[52px] pb-8">
            <span className="text-[#CF62CE] lg:text-[60px] sm:tex-5xl text-4xl ">
              Mine
            </span>{" "}
            are:
          </h2>
          <img
            className="lg:w-[150px] w-[100px] absolute lg:right-16 right-10 lg:top-5 top-2 translate-x-full -translate-y-full"
            src={rainbow}
            alt="rainbow-train"
          />
        </div>
        <div className="flex md:gap-6 gap-4 flex-wrap md:flex-nowrap justify-center">
          {mineSchoolList.map((value, index) => {
            return (
              <div
                key={index}
                className={`lg:p-[21px] p-3 md:w-auto w-[calc(50%-8px)] max-[500px]:w-[100%] max-w-[364px]  rounded-2xl bg-[${value.color}] `}
              >
                <img src={value.images} alt={value.alt} />
                <h3 className="pt-[22px] font-lato font-bold lg:text-2xl text-lg text-white text-center xl:px-9">
                  {value.heading}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
      <img
        className="absolute left-0 bottom-0 w-[200px]"
        src={decoration_left}
        alt="machines"
      />
    </div>
  );
};

export default Mine;
