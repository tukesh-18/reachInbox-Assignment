import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {setCurrentRoute} from "../Actions/actions.jsx";
import homeD from "../assets/HomeD.png";
import mailD from "../assets/mailD.png";
import boxL from "../assets/boxL.png";
import planeD from "../assets/planeD.png";
import statD from "../assets/StatisticD.png";
import searchD from "../assets/searchD.png";
import menuD from "../assets/menuD.png";
import boxD from "../assets/boxD.png";
import logoAtDark from "../assets/onlylogodark.png";
import logoAtLight from "../assets/onlylogolight.png";
const SideBar = () => {

     const [selectedItem, setSelectedItem] = useState("/"); // Initialize with the default path
  const dispatch = useDispatch();
  const handleMenuItemClick = (path) => {
    setSelectedItem(path);
    dispatch(setCurrentRoute(path));
  };
  const darkview = useSelector((state) => state.counter.isDarkMode);
  const noOfmessage = useSelector((state) => state.counter.messageCount);


  return (
   <div className="relative hidden lg:block">
  <div
    className={`${
      darkview ? "bg-[#101113] border-[#343A40]" : "bg-white border-slate-500"
    } overflow-hidden no-scrollbar border-r-2 left-0 top-0 fixed h-screen w-[79px] flex flex-col justify-between items-center py-6`}
  >
    <div className="flex flex-col items-center gap-8">
      <img
        src={darkview ? logoAtDark : logoAtLight}
        className="cursor-pointer h-9 rounded-xl object-left overflow-visible"
        alt="Logo"
      />

      <div className="text-[#AEAEAE] space-y-6">
        <div
          className={`flex justify-center p-2 ${
            selectedItem === "/" ? "bg-gray-500 rounded-md" : ""
          } cursor-pointer hover:bg-gray-500 hover:rounded-md transition-colors duration-200`}
          onClick={() => handleMenuItemClick("/")}
          aria-label="Home"
        >
          <img src={homeD} className="h-6" alt="Home" />
        </div>
        
        {darkview && (
          <div
            className={`flex justify-center p-2 ${
              selectedItem === "/search" ? "bg-gray-500 rounded-md" : ""
            } cursor-pointer hover:bg-gray-500 hover:rounded-md transition-colors duration-200`}
            onClick={() => handleMenuItemClick("/search")}
            aria-label="Search"
          >
            <img src={searchD} className="h-5" alt="Search" />
          </div>
        )}
        
        <div
          className={`flex justify-center p-2 ${
            selectedItem === "/mail" ? "bg-gray-500 rounded-md" : ""
          } cursor-pointer hover:bg-gray-500 hover:rounded-md transition-colors duration-200`}
          onClick={() => handleMenuItemClick("/mail")}
          aria-label="Mail"
        >
          <img src={mailD} className="h-5" alt="Mail" />
        </div>
        
        <div
          className={`flex justify-center p-2 ${
            selectedItem === "/send" ? "bg-gray-500 rounded-md" : ""
          } cursor-pointer hover:bg-gray-500 hover:rounded-md transition-colors duration-200`}
          onClick={() => handleMenuItemClick("/send")}
          aria-label="Send"
        >
          <img src={planeD} className="h-5" alt="Send" />
        </div>
        
        <div
          className={`flex justify-center p-2 ${
            selectedItem === "/stack" ? "bg-gray-500 rounded-md" : ""
          } cursor-pointer hover:bg-gray-500 hover:rounded-md transition-colors duration-200`}
          onClick={() => handleMenuItemClick("/stack")}
          aria-label="Stack"
        >
          <img src={menuD} className="h-5" alt="Stack" />
        </div>
        
        <div
          className={`flex justify-center p-2 relative ${
            selectedItem === "/inbox" ? "bg-gray-500 rounded-md" : ""
          } cursor-pointer hover:bg-gray-500 hover:rounded-md transition-colors duration-200`}
          onClick={() => handleMenuItemClick("/inbox")}
          aria-label="Inbox"
        >
          {noOfmessage > 0 && (
            <div className="absolute -right-1 -top-1 h-5 w-5 rounded-full bg-red-600 text-white text-xs flex items-center justify-center">
              {noOfmessage}
            </div>
          )}
          <img src={darkview ? boxD : boxL} className="h-5" alt="Inbox" />
        </div>
        
        <div
          className={`flex justify-center p-2 ${
            selectedItem === "/stacks" ? "bg-gray-500 rounded-md" : ""
          } cursor-pointer hover:bg-gray-500 hover:rounded-md transition-colors duration-200`}
          onClick={() => handleMenuItemClick("/stacks")}
          aria-label="Stacks"
        >
          <img src={statD} className="h-5" alt="Stacks" />
        </div>
      </div>
    </div>
    
    <div className="bg-green-500 p-2 rounded-full text-white font-medium">
      K K
    </div>
  </div>
</div>
  )
}

export default SideBar
