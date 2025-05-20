import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {setMessageCount, setMessages} from "../Actions/actions.jsx";
import message from "../assets/CenterPart/message.png";
import {useEffect} from "react";
import axios from "axios"
const CenterComponent = () => {

    const darkTheme = useSelector((state) => state.counter.isDarkMode);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            console.log("Center Components is renders/Called");
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get("https://hiring.reachinbox.xyz/api/v1/onebox/list", {
                    headers: {
                        Authorization: token,
                    },
                });

                const { data } = response.data;
                console.log("center Component", data.length, data);

                dispatch(setMessageCount(data.length));
                dispatch(setMessages(data));
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [dispatch]);

    return (
       <div className="min-h-screen w-full">
  <div className={`
    ${darkTheme ? "bg-gray-900 text-white" : "bg-gradient-to-br from-[#F8FAFC] to-[#ECEFF3] text-gray-800"}
    flex justify-center items-center h-screen transition-colors duration-300
  `}>
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto max-w-md text-center">
      <div className="mb-6 transform hover:scale-105 transition-transform duration-300">
        <img 
          src={message} 
          alt="Empty inbox" 
          className="w-32 h-32 object-contain"
        />
      </div>
      <h1 className={`
        text-2xl md:text-3xl font-semibold mb-6
        ${darkTheme ? "text-white" : "text-gray-800"}
      `}>
        It's the beginning of a legendary sales pipeline
      </h1>
      <p className={`
        text-lg
        ${darkTheme ? "text-gray-400" : "text-gray-600"}
      `}>
        When you have inbound E-mails you'll see them here
      </p>
      <div className="mt-8">
        <button className={`
          px-5 py-2 rounded-lg shadow-md font-medium transition-all duration-200
          ${darkTheme 
            ? "bg-blue-600 hover:bg-blue-700 text-white" 
            : "bg-blue-500 hover:bg-blue-600 text-white"}
        `}>
          Check inbox
        </button>
      </div>
    </div>
  </div>
</div>
    )
}

export default CenterComponent
