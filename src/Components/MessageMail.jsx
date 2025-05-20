import React from 'react'
import greenCircle from "../assets/CenterPart/greenCircle.png";
import { IoIosSend } from "react-icons/io";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {setSelectedThreadId, setThreadMessages} from "../Actions/actions.jsx";
const MessageMail = ({selectedThreadId, fromEmail, subject}) => {
    const darkView = useSelector((state) => state.counter.isDarkMode);
const dispatch = useDispatch();
const currentThreadId = useSelector((state) => state.counter.selectedThreadId);

// Helper function to truncate text
const trimDown = (subject, wordCount) => {
  const words = subject.split(" ");
  return words.length > wordCount 
    ? words.slice(0, wordCount).join(" ") + "..."
    : subject;
};

// Fetch thread data from API
const fetchThreadData = async (id) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${id}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    
    const threadData = response.data.data;
    if (threadData && threadData.length > 0) {
      dispatch(setThreadMessages(threadData));
    }
  } catch (error) {
    console.error("Error fetching thread data:", error);
    dispatch(setThreadMessages([]));
  }
};

// Handle thread selection
const handleThreadSelection = () => {
  // If clicking the already selected thread, deselect it
  if (selectedThreadId === currentThreadId) {
    dispatch(setSelectedThreadId(-1));
    dispatch(setThreadMessages([]));
    return;
  }
  
  // Otherwise, select the new thread and fetch its data
  dispatch(setSelectedThreadId(selectedThreadId));
  fetchThreadData(selectedThreadId);
};
  return (
    <>
  <div
    className={`${
      darkView ? "border-[#ffffff25]" : "border-[#8b8b8b64]"
    } py-3 border-t-2`}
    onClick={handleThreadSelection}
  >
    <div className={`relative ${currentThreadId === selectedThreadId ? "" : ""}`}>
      {currentThreadId === selectedThreadId && (
        <div className="absolute -left-6 -top-3 h-[110px] w-[8px] bg-[#5C7CFA]"></div>
      )}
      <div className="flex justify-between">
        <div
          className={`text-lg font-normal ${
            darkView ? "text-white" : "text-black"
          }`}
        >
          {fromEmail}
        </div>
        <div
          className={`${
            darkView
              ? "text-[#FCFCFC66]"
              : "text-[#919EAB] font-thin pr-3"
          }`}
        >
          Mar 7
        </div>
      </div>
      <div
        className={`font-normal ${
          darkView ? "text-[#E1E0E0] " : "text-gray-600"
        }`}
      >
        {trimDown(subject, 7)}
      </div>
      <div className="flex mt-2">
        <div
          className={`${
            darkView ? "bg-[#222426]" : "bg-[#F0F0F0] "
          } text-[#57E0A6] text-sm flex items-center px-3 py-1 rounded-2xl`}
        >
          <img src={greenCircle} className="mr-1 h-3 text-lg" alt="Status" />
          Interested
        </div>
        <div
          className={`text-sm ml-2 flex items-center ${
            darkView
              ? "text-[#FFFFFF] bg-[#222426]"
              : "text-black bg-[#F0F0F0]"
          } px-3 py-1 rounded-2xl `}
        >
          <IoIosSend className="mr-1 text-lg" />
          Campaign Name
        </div>
      </div>
    </div>
  </div>
</>
  )
}

export default MessageMail
