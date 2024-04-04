import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import layer_waves from "../assets/images/hero/blue-layer-waves.png";

const Header = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <img className="w-full xl:mt-[-200px]" src={layer_waves} alt="waves" />
    </div>
  );
};

export default Header;
