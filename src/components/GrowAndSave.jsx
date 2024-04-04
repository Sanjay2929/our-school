import React from "react";
import arrows from "../assets/images/grow-and-save/grow-and-save-arrows.png";
import { growAndSave } from "./common/Helper";

const GrowAndSave = () => {
  return (
    <div>
      <div className="container xl:max-w-[1140px] mx-auto px-3 xl:px-0">
        <h2 className="text-center font-bold font-lato text-black lg:text-[40px] sm:text-4xl text-3xl max-w-[666px] mx-auto pb-[33px]">
          <span className="text-[#CF62CE] font-bold lg:text-5xl sm:tex-5xl text-4xl ">
            Grow and Save
          </span>{" "}
          time With ONE easy-to-use system.
        </h2>
        <img
          className="w-full md:block hidden lg:max-w-[781px] max-w-[580px] mx-auto"
          src={arrows}
          alt="arrows"
        />
        <div className="flex justify-between flex-col gap-10 md:gap-0 md:flex-row">
          {growAndSave.map((value, index) => {
            return (
              <div
                key={index}
                className={`lg:w-[288px] md:w-[230px] max-w-[400px] mx-auto lg:mt-[-120px] md:-mt-20 ${value.style}`}
              >
                <img
                  className="w-[80px] mx-auto md:hidden block"
                  src={value.image}
                  alt="arrow"
                />
                <h2
                  className={`font-bold font-lato lg:text-2xl text-lg text-black ${value.textAlign}`}
                >
                  {value.title}
                </h2>
                <p
                  className={`font-lato text-base text-black opacity-70 font-normal ${value.textAlign}`}
                >
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GrowAndSave;
