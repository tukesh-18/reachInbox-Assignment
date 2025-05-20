import React from 'react'
import { IoIosSend } from "react-icons/io";
import mail from "../assets/CenterPart/email.png";
import { IoMailOpen } from "react-icons/io5";
import { useSelector } from "react-redux";
const RightSideBar = () => {
    let darkview = useSelector((state) => state.counter.isDarkMode);
  return (
   <div
  className={`h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent border-l-2 ${
    darkview ? "bg-black border-[#33383F]" : "bg-white border-[#E0E0E0]"
  }`}
>
  {/* Lead Details Section */}
  <div className="px-4">
    <h2
      className={`${
        darkview ? "text-white bg-[#23272C]" : "text-black bg-[#ECEFF3]"
      } rounded-lg py-3 px-4 font-medium my-5 shadow-sm`}
    >
      Lead Details
    </h2>
    
    <div
      className={`${
        darkview ? "text-white" : "text-[#637381]"
      } px-4 my-8 space-y-6`}
    >
      {/* Name */}
      <div className="flex justify-between text-sm items-center">
        <div className="font-medium">Name</div>
        <div className={`${darkview ? "text-[#B9B9B9]" : ""}`}>
          Orlando
        </div>
      </div>
      
      {/* Contact No */}
      <div className="flex justify-between text-sm items-center">
        <div className="font-medium">Contact No</div>
        <a 
          href="tel:+54-9062827869" 
          className={`${darkview ? "text-[#B9B9B9]" : ""} hover:underline`}
        >
          +54-9062827869
        </a>
      </div>
      
      {/* Email ID */}
      <div className="flex justify-between text-sm items-center">
        <div className="font-medium">Email ID</div>
        <a 
          href="mailto:orlando@gmail.com" 
          className={`${darkview ? "text-[#B9B9B9]" : ""} hover:underline`}
        >
          orlando@gmail.com
        </a>
      </div>
      
      {/* LinkedIn */}
      <div className="flex justify-between text-sm items-center">
        <div className="font-medium">LinkedIn</div>
        <a 
          href="https://linkedin.com/in/timvadde/" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`${darkview ? "text-[#B9B9B9]" : ""} hover:underline truncate max-w-[150px]`}
        >
          linkedin.com/in/timvadde/
        </a>
      </div>
      
      {/* Company Name */}
      <div className="flex justify-between text-sm items-center">
        <div className="font-medium">Company Name</div>
        <div className={`${darkview ? "text-[#B9B9B9]" : ""}`}>
          Reachinbox
        </div>
      </div>
    </div>
  </div>

  {/* Activities Section */}
  <div className="px-4">
    <h2
      className={`rounded-lg py-3 px-4 font-medium shadow-sm ${
        darkview ? "text-white bg-[#23272C]" : "text-black bg-[#ECEFF3]"
      }`}
    >
      Activities
    </h2>

    <div className="my-8 px-2">
      <h3 className={`font-medium text-base ${darkview ? "text-white" : "text-black"}`}>
        Campaign Name
      </h3>
      
      <div
        className={`my-4 text-sm ${
          darkview ? "text-white" : "text-black"
        }`}
      >
        <span className="font-medium">3 Steps</span> | <span className="italic">5 Days in Sequence</span>
      </div>
      
      <div className="space-y-6 mt-6">
        {/* Step 1 */}
        <div className="flex items-center py-2 hover:bg-opacity-10 hover:bg-gray-500 rounded-lg px-2 transition-colors">
          <div className="flex-shrink-0">
            <img
              src={mail}
              alt="Email icon"
              className={`p-2 w-12 h-12 rounded-full object-contain ${
                darkview ? "bg-[#23272C]" : "bg-[#EEF1F4]"
              }`}
            />
          </div>
          <div className={`ml-6 space-y-1 ${darkview ? "text-white" : "text-black"}`}>
            <div className="font-medium">Step 1: Email</div>
            <div className="text-[#B9B9B9] text-sm flex items-center">
              <IoIosSend className="mr-2" /> 
              <span>Sent <time dateTime="2025-02-03">5th, May</time></span>
            </div>
          </div>
        </div>
        
        {/* Step 2 */}
        <div className="flex items-center py-2 hover:bg-opacity-10 hover:bg-gray-500 rounded-lg px-2 transition-colors">
          <div className="flex-shrink-0">
            <img
              src={mail}
              alt="Email icon"
              className={`p-2 w-12 h-12 rounded-full object-contain ${
                darkview ? "bg-[#23272C]" : "bg-[#EEF1F4]"
              }`}
            />
          </div>
          <div className={`ml-6 space-y-1 ${darkview ? "text-white" : "text-black"}`}>
            <div className="font-medium">Step 2: Email</div>
            <div className="text-[#B9B9B9] text-sm flex items-center">
              <IoMailOpen className="mr-2 text-yellow-500" /> 
              <span>Open <time dateTime="2025-02-05">6th, May</time></span>
            </div>
          </div>
        </div>
        
        {/* Step 3 */}
        <div className="flex items-center py-2 hover:bg-opacity-10 hover:bg-gray-500 rounded-lg px-2 transition-colors">
          <div className="flex-shrink-0">
            <img
              src={mail}
              alt="Email icon"
              className={`p-2 w-12 h-12 rounded-full object-contain ${
                darkview ? "bg-[#23272C]" : "bg-[#EEF1F4]"
              }`}
            />
          </div>
          <div className={`ml-6 space-y-1 ${darkview ? "text-white" : "text-black"}`}>
            <div className="font-medium">Step 3: Email</div>
            <div className="text-[#B9B9B9] text-sm flex items-center">
              <IoMailOpen className="mr-2 text-yellow-500" /> 
              <span>Open <time dateTime="2025-02-05">7th, May</time></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default RightSideBar
