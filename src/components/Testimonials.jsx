import React, { useState } from "react";
import aeroplane from "../assets/images/testimonials/aeroplane.png";
import { testimonialsReviews } from "./common/Helper";
import { DoubleComma } from "./common/Icons";

const Testimonials = () => {
  const [reviewVisible, setReviewVisible] = useState(0);
  return (
    <div className="lg:pb-[271px] pb-[200px] relative pt-10">
      <div className="container xl:max-w-[1140px] mx-auto px-3 xl:px-0">
        <h2 className="text-center font-normal font-lato text-black lg:text-[40px] sm:text-4xl text-3xl">
          Our{" "}
          <span className="text-[#56BD84] font-bold lg:text-5xl sm:tex-5xl text-4xl ">
            Testimonials
          </span>
        </h2>
        <p className="text-base font-lato font-normal text-black max-w-[636px] mx-auto text-center pt-2.5 opacity-70 pb-[118px]">
          Maecenas amet amet vitae sed ac morbi pharetra vel. Adipiscing commodo
          in integer cursus lectus sit nulla. Pellentesque gravida accumsan
          natoque.
        </p>
        {testimonialsReviews.map((value, index) => {
          return (
            <div
              className={`lg:max-w-[511px] max-w-[450px] flex mx-auto border-4 ${
                value.borderColor
              } lg:py-4 py-2 pb-3  pe-3 rounded-2xl gap-4 justify-between items-center flex-col sm:flex-row relative lg:h-[200px] sm:h-[160px] ${
                reviewVisible === index ? "block" : "hidden"
              }`}
            >
              <div className="lg:w-[148px] w-[110px] min-w-[100px] lg:ms-[-74px] sm:-ms-[55px]">
                <img
                  className="w-full"
                  src={value.image}
                  alt={value.username}
                />
              </div>
              <div className="pt-[14px] lg:max-w-[400px] max-w-[340px] relative">
                <p className="font-lato font-normal lg:text-xl text-base text-black text-opacity-80 relative z-10 lg:min-h-[112px] min-h-[74px] sm:text-start text-center">
                  {value.review}
                </p>
                <p className="sm:text-end text-center font-lato text-[22px] font-semibold text-black">
                  {value.username}
                </p>
                <span className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/4 z-0 sm:block hidden">
                  <DoubleComma />
                </span>
              </div>
            </div>
          );
        })}
      </div>
      {testimonialsReviews.map((value, index) => {
        return (
          <img
            onMouseEnter={() => setReviewVisible(index)}
            onMouseLeave={() => setReviewVisible(0)}
            className={`absolute cursor-pointer hover:scale-110 duration-300 ${value.imageStye}`}
            src={value.image}
            alt={value.username}
          />
        );
      })}
      <img
        className="absolute lg:top-0 -top-10 left-0 w-[130px] sm:block hidden"
        src={aeroplane}
        alt="aeroplane"
      />
    </div>
  );
};

export default Testimonials;
