import React from "react";
import Logo from "../assets/companylogo.png";

const Header = () => {
  return (
    <div className="bg-black border-b border-[#25262B] fixed top-0 left-0 right-0 text-white h-16 w-full flex items-center justify-center z-50 shadow-sm">
      <div className="hover:scale-105 transition-transform duration-200 ease-in-out">
        <img 
          src={Logo} 
          alt="logo" 
          className="h-10 object-contain filter brightness-0 invert" 
        />
      </div>
    </div>
  );
};

export default Header;