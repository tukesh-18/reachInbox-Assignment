import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { RiReplyFill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import UserInterface from "./UserInterface.jsx";
import RightSide from "./RightSideBar.jsx";
import MessageContainer from "./MessageContainer.jsx";
import { AiOutlineLoading } from "react-icons/ai";
import ReplyComponent from "./ReplyComponent";
import { setReplyFormVisibility } from "../Actions/actions.jsx";
import DeleteThread from "./DeleteThread.jsx";

const MainGround = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  let replyisOn = useSelector((state) => state.counter.isReplyFormVisible);
  let darkview = useSelector((state) => state.counter.isDarkMode);
  let deletionButton = useSelector((state) => state.counter.pendingDeletionId);
  const dispatch = useDispatch();
  
  // Extract fetch logic to a separate function
  const fetchData = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        "https://hiring.reachinbox.xyz/api/v1/onebox/list",
        {
          headers: {
            Authorization: token,
          },
        }
      );
      const r = res.data.data;
      setData(r);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // Initial fetch
    fetchData();
    
    // Set up polling with a reasonable interval (e.g., every 30 seconds)
    // Only use this if you need real-time updates
    const pollingInterval = 30000; // 30 seconds
    const interval = setInterval(fetchData, pollingInterval);
    
    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, [fetchData]);

  if (loading) {
    return (
      <div
        className={`${
          darkview ? "bg-black" : "bg-white"
        } flex h-screen w-full justify-center items-center`}
      >
        <AiOutlineLoading size={60} className="animate-spin text-[#5B5F66]" />
      </div>
    );
  }
  
  if (error) {
    return (
      <div className={`${darkview ? "bg-black text-white" : "bg-white text-black"} flex h-screen w-full justify-center items-center`}>
        <div className="text-center">
          <p className="text-xl mb-4">Error loading data</p>
          <button 
            onClick={fetchData}
            className="bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] text-white px-4 py-2 rounded-md"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`lg:ml-[79px] mt-20 ${
        darkview ? "bg-black" : "bg-white"
      } relative`}
    >
      <div
        className="grid grid-cols-12 w-full overflow-x-hidden no-scrollbar"
        style={{ height: "calc(100vh - 80px)" }}
      >
        <div className="col-span-3 border border-r-2 overflow-y-auto border-opacity-50 border-y-0 border-x-0 border-slate-500 no-scrollbar">
          <MessageContainer />
        </div>
        <div className="col-span-6 text-white overflow-y-auto no-scrollbar">
          <UserInterface />
        </div>
        <div className="col-span-3 overflow-y-auto">
          <RightSide />
        </div>
      </div>
      <div
        className="cursor-pointer z-20 text-white flex items-center bottom-0 ml-[400px] mb-10 bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] rounded-md px-9 py-2 absolute"
        onClick={() => {
          dispatch(setReplyFormVisibility(1));
        }}
      >
        <RiReplyFill className="mr-2 text-xl" /> Reply
      </div>
      {replyisOn === 1 ? <ReplyComponent /> : null}
      {deletionButton === 1 ? <DeleteThread /> : null}
    </div>
  );
};

export default MainGround;