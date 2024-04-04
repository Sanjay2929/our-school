import React, { useState } from "react";
import logo from "../assets/images/header/logo.png";
import { navLinks } from "./common/Helper";
import { Cross, NavMenu } from "./common/Icons";
import Button from "./common/Button";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const navbarToggle = () => {
    setShowNav(!showNav);
    document.body.classList.add("overflow-hidden");
  };
  const hideNavbar = () => {
    setShowNav(false);
    document.body.classList.remove("overflow-hidden");
  };
  return (
    <div className="py-[30px] px-3">
      <div className="container xl:max-w-[1190px] mx-auto flex justify-between items-center px-[21px] py-[18px] rounded-full shadow-[0px_8px_23px_0px_#0000001F]">
        <a className="relative z-50" href="/">
          <img
            className="md:max-w-[184px] max-w-[150px] w-full"
            src={logo}
            alt="logo"
          />
        </a>
        <ul
          className={`flex gap-[15px] items-center lg:flex-row flex-col lg:min-h-0 min-h-screen w-full lg:w-auto bg-white lg:bg-transparent lg:static fixed top-0 justify-center z-40 duration-300 ${
            showNav ? "left-0" : "-left-full"
          }`}
        >
          {navLinks.map((value, index) => {
            return (
              <li key={index}>
                <a
                  onClick={hideNavbar}
                  href={value.url}
                  className="text-base text-black text-opacity-70 font-normal font-lato hover:text-[#4A8DC5] hover:text-opacity-100 duration-300 text_stroke"
                >
                  {value.title}
                </a>
              </li>
            );
          })}
          <li className="sm:hidden">
            {/* <button
              onClick={hideNavbar}
              className="rounded-full text-white bg-[#56BD84] px-[15px] py-3 font-lato font-bold text-base block sm:hidden border-[#56BD84] border hover:bg-transparent hover:text-[#56BD84] duration-300"
            >
              Request a Demo
            </button> */}
            <Button buttonStyle="hover:text-[#56BD84] text-white bg-[#56BD84] border-[#56BD84] block sm:hidden" />
          </li>
        </ul>
        <div className="flex items-center gap-5">
          {/* <button className="rounded-full text-white bg-[#56BD84] px-[15px] py-3 font-lato font-bold text-base sm:block hidden border-[#56BD84] border hover:bg-transparent hover:text-[#56BD84] duration-300"> */}
          {/* Request a Demo */}
          {/* </button> */}
          <Button buttonStyle="hover:text-[#56BD84] text-white bg-[#56BD84] border-[#56BD84] sm:block hidden" />
          <div onClick={navbarToggle} className="lg:hidden block relative z-50">
            {showNav ? <Cross /> : <NavMenu />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
