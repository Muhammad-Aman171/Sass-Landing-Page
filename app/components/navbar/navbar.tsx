import React from "react";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import { DM_Sans } from "@next/font/google";
import "./navbar.scss";

import Logo from "@/public/assets/Logo.png";
import Button from "../button/button";


const dm_sans = DM_Sans({
    subsets: ["latin"],
    weight: "400"
})

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="heading">
        <Image src={Logo} alt="img does not show" className="w-[3vw] h-[4vh]  " />
        <h1>whitepace</h1>
      </div>
      <div className="pages-name">
        <span>
          <p className={`${dm_sans.className} font-extrathin`}>Product</p>
          <FaAngleDown className={` ml-3 `}/>
        </span>
        <span>
          <p className={`${dm_sans.className} font-extrathin`}>Solutions</p>
          <FaAngleDown className="ml-3"/>
        </span>
        <span>
          <p className={`${dm_sans.className} font-extrathin`}>Resources</p>
          <FaAngleDown className="ml-3"/>
        </span>
        <span>
          <p className={`${dm_sans.className} font-extrathin`}>Pricing</p>
          <FaAngleDown className="ml-3"/>
        </span>
        <div className="buttons">
            <button className="navbar-button">Login</button>
            <Button/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
