import React from 'react'
import deletet from "../assets/CenterPart/delete.png";
import edit from "../assets/CenterPart/edit.png";
import maill from "../assets/CenterPart/markunread_mailbox.png";
import person_remove from "../assets/CenterPart/person_remove.png";
import watch_later from "../assets/CenterPart/watch_later.png";
import {setPendingDeletionId} from "../Actions/actions.jsx";
import { useDispatch, useSelector } from "react-redux";
const DeleteDropdown = () => {

  const darkTheme = useSelector((state) => state.counter.isDarkMode);
      const dispatch = useDispatch();

  return (
    <div className="absolute top-10 z-30 right-0">
  <div
    className={`flex cursor-pointer flex-col w-[210px] rounded-xl border ${
      darkTheme ? "bg-gray-900 text-gray-100 border-gray-600" : "bg-gray-50 text-gray-800 border-gray-300"
    } shadow-md overflow-hidden`}
  >
    <div className="flex items-center p-2.5 hover:bg-opacity-10 hover:bg-gray-500 transition-colors duration-200">
      <img src={maill} className="h-4 mt-0.5 mr-3" alt="Mail icon" /> 
      <span className="text-sm">Mark as Read</span>
    </div>
    <div className="flex items-center p-2.5 hover:bg-opacity-10 hover:bg-gray-500 transition-colors duration-200">
      <img src={edit} className="h-4 mt-0.5 mr-3" alt="Edit icon" /> 
      <span className="text-sm">Edit Lead</span>
    </div>
    <div className="flex items-center p-2.5 hover:bg-opacity-10 hover:bg-gray-500 transition-colors duration-200">
      <img src={person_remove} className="h-4 mt-0.5 mr-3" alt="Remove icon" /> 
      <span className="text-sm">Remove Lead</span>
    </div>
    <div className="flex items-center p-2.5 hover:bg-opacity-10 hover:bg-gray-500 transition-colors duration-200">
      <img src={watch_later} className="h-4 mt-0.5 mr-3" alt="Clock icon" /> 
      <span className="text-sm">Set Reminder</span>
    </div>
    <div
      className="flex items-center p-2.5 hover:bg-red-500 hover:bg-opacity-10 transition-colors duration-200"
      onClick={() => {
        dispatch(setPendingDeletionId(1));
      }}
    >
      <img src={deletet} className="h-4 mt-0.5 mr-3" alt="Delete icon" /> 
      <span className="text-sm">Delete</span>
    </div>
  </div>
</div>
  )
}

export default DeleteDropdown
