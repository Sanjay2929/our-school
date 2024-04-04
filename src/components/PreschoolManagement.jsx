import React from "react";
import preschool from "../assets/images/preschool-management/circle-preschool.png";
import { preschoolManagement } from "./common/Helper";
import { RightDirectionArrow } from "./common/Icons";
import top_left_circle from "../assets/images/preschool-management/top-left-circles.png";
import top_right_circle from "../assets/images/preschool-management/top-right-circles.png";
import bottom_right_decoration from "../assets/images/preschool-management/bottom-right-decoration.png";

const PreschoolManagement = () => {
  return (
    <div className="bg-preschool-wave bg-center bg_full py-[90px] bg-cover relative">
      <div className="container xl:max-w-[1140px] mx-auto flex lg:justify-between justify-center items-center lg:flex-nowrap flex-wrap px-3 xl:px-0 relative z-10">
        <div className="min-[1400px]:w-[calc(50%+90px)] lg:w-1/2 w-full min-[1400px]:ms-[-100px] lg:max-w-[661px] max-w-[500px]">
          <img className="w-full" src={preschool} alt="preschool" />
        </div>
        <div className="lg:w-1/2 lg:max-w-[517px] py-10 xl:ps-0 lg:ps-10">
          <h2 className="font-lato font-black text-white xl:text-[40px] md:text-4xl text-3xl  pb-4">
            Our{" "}
            <span className="xl:text-5xl md:text-[40px] text-4xl">"ABC's"</span>{" "}
            of Effective Preschool Management:
          </h2>
          {preschoolManagement.map((value, index) => {
            return (
              <div
                key={index}
                className="flex items-center sm:gap-[35px] gap-5 py-4"
              >
                <div className="md:min-w-[80px] md:h-[80px] min-w-[70px] h-[70px] rounded-full flex justify-center items-center bg-white">
                  {value.icon}
                </div>
                <div>
                  <h3 className="pb-1.5 font-lato font-bold md:text-2xl text-xl text-white">
                    {value.title}
                  </h3>
                  <p className="font-lato text-base font-normal text-white">
                    {value.paragraph}
                  </p>
                </div>
              </div>
            );
          })}
          <a
            className="pt-1.5 text-white font-lato font-bold text-xl md:ms-[115px] sm:ms-[105px] ms-[90px] flex items-center gap-[9px] group"
            href="/"
          >
            Learn More
            <span className="group-hover:ps-1 duration-300">
              <RightDirectionArrow />
            </span>
          </a>
        </div>
      </div>
      <img
        className="absolute top-[87px] left-0 w-[115px]"
        src={top_left_circle}
        alt="circles"
      />
      <img
        className="absolute top-0 right-0 w-[260px]"
        src={top_right_circle}
        alt="circles"
      />
      <img
        className="absolute bottom-[110px] right-0 xl:w-[200px] w-24 lg:block hidden"
        src={bottom_right_decoration}
        alt="circles"
      />
    </div>
  );
};

export default PreschoolManagement;
