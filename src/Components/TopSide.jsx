import React from "react";
import { toggleDarkMode } from "../Actions/actions.jsx";
import { useSelector, useDispatch } from "react-redux";
import darkcircle from "../assets/Ellipse 2938.png";
import sun from "../assets/light_mode.png";
import moon from "../assets/dark_mode.png";
import whitecircle from "../assets/whitecircle.png";
import { IoIosArrowDown } from "react-icons/io";

const TopSide = () => {
  const darkview = useSelector((state) => state.counter.isDarkMode);
  const dispatch = useDispatch();
  return (
    <div
      className={`fixed ${
        darkview ? `bg-[#343A40] border-slate-500` : "bg-white border-slate-500"
      } border border-t-0 border-r-0 flex text-sm top-0 right-0 h-[80px] items-center fixed w-screen lg:w-[95%]`}
    >
      <div
        className={`text-xl ml-6 font-medium ${
          darkview ? "text-[#FFFFFF]" : "text-slate-800"
        }`}
      >
        Onebox
      </div>

      <div className="ml-auto mr-6 flex">
        <button
          className=""
          onClick={() => {
            dispatch(toggleDarkMode());
          }}
        >
          <div
            className={`h-6 w-12 rounded-3xl ${
              darkview ? "" : "bg-[#DEDEDE] "
            } border border-slate-500 grid grid-cols-2`}
          >
            <div className="p-1">
              {darkview ? <img src={darkcircle} /> : <img src={moon} />}
            </div>
            <div className="p-1">
              {darkview ? <img src={sun} /> : <img src={whitecircle} />}
            </div>
          </div>
        </button>
        <div
          className={`${
            darkview ? "text-white" : "text-black"
          } mr-3 font-normal text-lg ml-4 flex`}
        >
          <p>Tim's Workspace </p>
          <IoIosArrowDown className="my-1 ml-1" size={20} />
        </div>
      </div>
    </div>
  );
};

export default TopSide;
