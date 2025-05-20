import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoReload } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import Mail from "./MessageMail.jsx";
import { useSelector } from "react-redux";

const MessageContainer = () => {
    let noOfMessage = useSelector((state) => state.counter.messageCount);
  let darkview = useSelector((state) => state.counter.isDarkMode);
  let data = useSelector((state) => state.counter.messages);
  return (
    <div
  className={`p-6 ${
    darkview 
      ? "text-white border-gray-700 bg-gray-900/30" 
      : "text-gray-800 border-gray-200 bg-white"
  } border-b border-l-0 border-t-0 border-r-0`}
>
  {/* Header with Title and Refresh Button */}
  <div className="flex justify-between items-start mb-6">
    <div className="space-y-1">
      <div className="flex items-center group">
        <h1 className="text-2xl font-semibold text-blue-500 mr-2">All Inbox(s)</h1>
        <IoIosArrowDown 
          className="cursor-pointer text-blue-500 group-hover:text-blue-600 transition-transform duration-200 hover:scale-110" 
          size={24} 
        />
      </div>
      <div className={`flex items-center text-base ${darkview ? "text-gray-300" : "text-gray-700"}`}>
        <span className="font-medium mr-1">{noOfMessage}/25</span>
        <span className="text-gray-500 font-normal">Inboxes selected</span>
      </div>
    </div>
    
    <button 
      className={`
        ${darkview ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"} 
        rounded-md p-2.5 transition-colors duration-200 flex items-center justify-center
        shadow-sm
      `}
      aria-label="Refresh inbox"
      onClick={() => console.log("Refresh clicked")}
    >
      <IoReload
        className={`${darkview ? "text-gray-300" : "text-gray-600"}`}
        size={18}
      />
    </button>
  </div>
  
  {/* Search Bar */}
  <div className="mb-5">
    <div className="relative">
      <input
        placeholder="Search messages..."
        className={`
          w-full py-2.5 pl-10 pr-4 rounded-lg border
          ${darkview 
            ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500" 
            : "bg-gray-50 border-gray-200 text-gray-800 placeholder-gray-400 focus:border-blue-400"
          }
          focus:outline-none focus:ring-1 
          ${darkview ? "focus:ring-blue-500" : "focus:ring-blue-400"}
          transition-colors duration-200
        `}
      />
      <CiSearch className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
    </div>
  </div>
  
  {/* Filter Bar */}
  <div className="flex items-center justify-between mb-6">
    <div className="flex items-center">
      <span
        className={`
          flex items-center justify-center h-7 min-w-7 px-2.5 rounded-full font-semibold text-sm
          ${darkview 
            ? "bg-gray-800 text-blue-400" 
            : "bg-blue-100 text-blue-600"}
        `}
      >
        {noOfMessage}
      </span>
      <span className={`ml-3 font-medium ${darkview ? "text-gray-200" : "text-gray-700"}`}>
        New Replies
      </span>
    </div>
    
    <button 
      className={`
        flex items-center font-medium
        ${darkview ? "text-gray-200" : "text-gray-700"}
        hover:text-blue-500 transition-colors duration-200
      `}
    >
      Newest 
      <FaAngleDown className="ml-2 text-sm" />
    </button>
  </div>
  
  {/* Message List */}
  <div className="space-y-1.5">
    {data.length > 0 ? (
      data.map((e) => (
        <Mail
          key={e.id}
          fromEmail={e.fromEmail}
          subject={e.subject}
          threadId={e.threadId}
        />
      ))
    ) : (
      <div className={`text-center py-8 ${darkview ? "text-gray-400" : "text-gray-500"}`}>
        No messages found
      </div>
    )}
  </div>
</div>
  )
}

export default MessageContainer
