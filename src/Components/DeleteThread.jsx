import React from 'react'
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {setPendingDeletionId, setThreadMessages} from "../Actions/actions.jsx";

const DeleteThread = () => {

     const dispatch = useDispatch();
const selectedThreadId = useSelector((state) => state.counter.threadId);

/**
 * Handles the deletion of a thread
 * @param {Event} e - The click event
 */
const handleDeleteion = async (e) => {
  e.preventDefault();
  
  // Validation - check if a thread is selected
  if (selectedThreadId === -1) {
    console.log("No thread selected. Please select a thread first.");
    return;
  }

  // Get authentication token
  const token = localStorage.getItem("token");
  if (!token) {
    console.error("Authentication token not found");
    return;
  }
  
  try {
    // API call to delete the thread
    const response = await axios.delete(
      `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${selectedThreadId}`,
      {
        headers: { Authorization: token }
      }
    );
    
    // Update state with the response data
    if (response.data && response.data.data) {
      // Update thread data in Redux store
      dispatch(setThreadMessages(response.data.data));
      
      // Reset deletion state
      dispatch(setPendingDeletionId(0));
      
      console.log("Thread deleted successfully");
    }
  } catch (error) {
    // Error handling
    const errorMessage = error.response?.data?.message || "Error deleting thread";
    console.error("Deletion failed:", errorMessage);
  }
};
   

  return (
   <div
  className={`fixed inset-0 w-full h-full flex justify-center items-center bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300`}
>
  <div 
    className={`bg-slate-900 p-10 rounded-xl shadow-2xl border border-slate-700 items-center flex flex-col max-w-md w-full transform transition-all duration-300 ease-in-out`}
  >
    <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-6">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    </div>
    
    <h2 className={`text-3xl font-bold text-white mb-2`}>Are you sure?</h2>
    
    <p className={`text-slate-300 text-center my-6 px-4 leading-relaxed`}>
      This action will permanently delete this email and cannot be undone.
    </p>
    
    <div className={`flex justify-center space-x-4 w-full mt-4`}>
      <button
        className={`bg-slate-800 text-white px-8 py-3 rounded-lg focus:outline-none hover:bg-slate-700 transition-colors duration-200 font-medium flex-1 max-w-[140px] border border-slate-700`}
        onClick={() => {
          dispatch(setPendingDeletionId(0));
        }}
      >
        Cancel
      </button>
      
      <button
        className={`bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-3 rounded-lg focus:outline-none hover:from-red-700 hover:to-red-900 transition-all duration-200 font-medium flex-1 max-w-[140px] shadow-lg shadow-red-900/30`}
        onClick={(e) => {
          handleDeleteion(e);
        }}
      >
        Delete
      </button>
    </div>
  </div>
</div>
  )
}

export default DeleteThread
