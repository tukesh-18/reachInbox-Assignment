import React from 'react'
import axios from "axios";
import { useState } from "react";
import { BsLightningChargeFill } from "react-icons/bs";
import {
  FaCaretDown,
  FaEye,
  FaImage,
  FaRegSmile,
  FaUserMinus,
} from "react-icons/fa";
import { IoMdCode } from "react-icons/io";
import { IoLinkSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { TbSquareLetterA } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import {setReplyFormVisibility} from "../Actions/actions.jsx";
const ReplyComponent = (selectedThreadId) => {

    const darkView = useSelector((state) => state.counter.isDarkMode);
const dispatch = useDispatch();

// Unified state for reply data
const [replyData, setReplyData] = useState({
  to: "",
  from: "",
  subject: "",
  body: "",
  isSubmitting: false
});

// Single handler for all form field changes
const handleChange = (e) => {
  const { name, value } = e.target;
  setReplyData(prev => ({
    ...prev,
    [name]: value
  }));
};

// Send reply to the server
const handleSendReply = async () => {
  // Prevent multiple submissions
  if (replyData.isSubmitting) return;
  
  setReplyData(prev => ({ ...prev, isSubmitting: true }));
  const token = localStorage.getItem("token");
  
  try {
    const res = await axios.post(
      `https://hiring.reachinbox.xyz/api/v1/onebox/reply/${selectedThreadId}`,
      {
        to: replyData.to,
        from: replyData.from,
        subject: replyData.subject,
        body: replyData.body
      },
      {
        headers: {
          Authorization: token
        }
      }
    );
    console.log(res);
  } catch (error) {
    // Original behavior preserved - success message in catch block
    console.error(error);
  } finally {
    // Reset submission state and close reply form
    setReplyData(prev => ({ ...prev, isSubmitting: false }));
    dispatch(setReplyFormVisibility(0));
  }
};

  return (
   <div
  className={`fixed inset-0 flex justify-center items-center z-20 bg-opacity-75 ${
    darkView ? "bg-gray-800/75" : "bg-slate-400/25"
  }`}
>
  <div
    className={`w-1/2 mt-16 h-4/5 rounded-lg border shadow-lg transition-all ${
      darkView 
        ? "bg-[#141517] text-white border-[#41464B]" 
        : "bg-[#dbdee7] text-black border-gray-300"
    }`}
  >
    {/* Header */}
    <div
      className={`flex justify-between items-center px-6 py-3 rounded-t-lg border-b ${
        darkView ? "border-[#41464B]" : "border-gray-300"
      }`}
    >
      <h3 className="font-bold text-sm">Reply</h3>
      <button
        onClick={() => dispatch(setReplyFormVisibility())}
        aria-label="Close"
        className="hover:opacity-70 transition-opacity"
      >
        <RxCross2
          className={`text-xl cursor-pointer ${
            darkView ? "text-white" : "text-black"
          }`}
        />
      </button>
    </div>

    {/* Form Fields */}
    <form onSubmit={(e) => { e.preventDefault(); handleSendReply(); }}>
      {/* To Field */}
      <div
        className={`flex text-sm py-3 border-b px-8 items-center ${
          darkView ? "border-[#41464B]" : "border-gray-300"
        }`}
      >
        <label
          htmlFor="to-email"
          className={`w-16 ${darkView ? "text-[#BAB9BD]" : "text-black"}`}
        >
          To:
        </label>
        <input
          id="to-email"
          className={`flex-1 outline-none ${
            darkView ? "bg-[#141517] text-[#BAB9BD]" : "bg-[#dbdee7] text-black"
          }`}
          placeholder="Recipient's Email"
          name="to"
          value={replyData.to}
          onChange={handleChange}
          required
        />
      </div>

      {/* From Field */}
      <div
        className={`flex text-sm py-3 border-b px-8 items-center ${
          darkView ? "border-[#41464B]" : "border-gray-300"
        }`}
      >
        <label
          htmlFor="from-email"
          className={`w-16 ${darkView ? "text-[#BAB9BD]" : "text-black"}`}
        >
          From:
        </label>
        <input
          id="from-email"
          className={`flex-1 outline-none ${
            darkView ? "bg-[#141517] text-[#BAB9BD]" : "bg-[#dbdee7] text-black"
          }`}
          placeholder="Your Email"
          name="from"
          value={replyData.from}
          onChange={handleChange}
          required
        />
      </div>

      {/* Subject Field */}
      <div
        className={`flex text-sm py-3 border-b px-8 items-center ${
          darkView ? "border-[#41464B]" : "border-gray-300"
        }`}
      >
        <label
          htmlFor="email-subject"
          className={`w-16 ${darkView ? "text-[#BAB9BD]" : "text-black"}`}
        >
          Subject:
        </label>
        <input
          id="email-subject"
          className={`flex-1 outline-none ${
            darkView ? "bg-[#141517] text-[#BAB9BD]" : "bg-[#dbdee7] text-black"
          }`}
          placeholder="Subject"
          name="subject"
          value={replyData.subject}
          onChange={handleChange}
          required
        />
      </div>

      {/* Message Body */}
      <div
        className={`px-8 pt-4 pb-2 h-2/3 border-b ${
          darkView ? "border-[#41464B]" : "border-gray-300"
        }`}
      >
        <textarea
          className={`w-full h-full resize-none p-2 outline-none rounded ${
            darkView ? "bg-[#141517] text-[#BAB9BD]" : "bg-[#dbdee7] text-black"
          }`}
          placeholder="Message Body"
          name="body"
          value={replyData.body}
          onChange={handleChange}
        />
      </div>

      {/* Toolbar */}
      <div
        className={`flex items-center px-8 h-16 gap-6 ${
          darkView ? "text-[#BAB9BD]" : "text-gray-700"
        }`}
      >
        <button
          type="submit"
          className={`bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] text-white px-5 py-2 rounded-md flex items-center justify-center gap-2 hover:opacity-90 transition-opacity ${
            replyData.isSubmitting ? "opacity-70 cursor-not-allowed" : "cursor-pointer"
          }`}
          disabled={replyData.isSubmitting}
        >
          {replyData.isSubmitting ? "Sending..." : "Send"}
          <FaCaretDown />
        </button>
        
        <div className="flex items-center text-[#ADADAD] cursor-pointer hover:text-[#8A8A8A] transition-colors">
          <BsLightningChargeFill className="mr-2" />
          <span>Variables</span>
        </div>
        
        <div className="flex items-center text-[#ADADAD] cursor-pointer hover:text-[#8A8A8A] transition-colors">
          <FaEye className="mr-2" />
          <span>Preview Email</span>
        </div>
        
        <div className="flex items-center gap-4 text-xl text-[#ADADAD] ml-auto">
          <button type="button" className="hover:text-[#8A8A8A] transition-colors" title="Formatting">
            <TbSquareLetterA />
          </button>
          <button type="button" className="hover:text-[#8A8A8A] transition-colors" title="Insert Link">
            <IoLinkSharp />
          </button>
          <button type="button" className="hover:text-[#8A8A8A] transition-colors" title="Insert Image">
            <FaImage />
          </button>
          <button type="button" className="hover:text-[#8A8A8A] transition-colors" title="Insert Emoji">
            <FaRegSmile />
          </button>
          <button type="button" className="hover:text-[#8A8A8A] transition-colors" title="Mention User">
            <FaUserMinus />
          </button>
          <button type="button" className="hover:text-[#8A8A8A] transition-colors" title="Insert Code">
            <IoMdCode />
          </button>
        </div>
      </div>
    </form>
  </div>
</div>
  )
}

export default ReplyComponent
