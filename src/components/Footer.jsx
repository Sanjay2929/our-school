import React from "react";
import logo from "../assets/images/footer/logo.png";
import app_store from "../assets/images/footer/app-store.png";
import google_play from "../assets/images/footer/google-play.png";
import { footerLinks } from "./common/Helper";

const Footer = () => {
  return (
    <div className="bg-black pt-[90px]">
      <div className="container xl:max-w-[1140px] mx-auto px-3 xl:px-0 pb-[52px] flex justify-between gap-14 md:flex-nowrap flex-wrap">
        <div className="lg:w-[405px] md:w-[350px]">
          <a href="/">
            <img className="w-[278px]" src={logo} alt="logo" />
          </a>
          <p className="pt-[30px] pb-[35px] leading-normal font-lato font-normal text-base text-white opacity-80">
            A premium alternative to big childcare business products, Our School
            Hangout is a comprehensive solution for preschool management.
          </p>
          <div className="flex items-center gap-5">
            <img
              className="lg:max-h-[52px] max-h-[44px]"
              src={app_store}
              alt="app store"
            />
            <img
              className="lg:max-h-[52px] max-h-[44px]"
              src={google_play}
              alt="google play"
            />
          </div>
        </div>
        <div className="flex md:max-w-[410px] w-full justify-between flex-wrap gap-5">
          {footerLinks.map((value, index) => {
            return (
              <ul key={index} className="min-w-[110px]">
                <li className="font-lato font-semibold text-lg text-white sm:mb-6 mb-3 relative after:absolute after:-bottom-2 after:left-0 after:w-full after:h-1 after:bg-[#56BD84] inline-block ">
                  {value.heading}
                </li>
                {value.links.map((value, index) => {
                  return (
                    <li key={index}>
                      <a
                        className="text-sm text-white font-lato opacity-80 hover:opacity-100 duration-300 hover:text-[#4A8DC5] font-normal leading-[34px] text-nowrap"
                        href={value.url}
                      >
                        {value.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
      </div>
      <div className="border-t border-white border-opacity-40 py-[21px]">
        <p className="text-center font-lato font-normal text-base text-white opacity-80">
          Copyright 2022 by Our Hangouts, LLC
        </p>
      </div>
    </div>
  );
};

export default Footer;
