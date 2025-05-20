import React from 'react'
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";
import MainGround from "./Components/MainGround.jsx";
import TopSide from "./Components/Topside.jsx";
import SideBar from './Components/SideBar.jsx';
import CenterComponent from "./Components/CenterComponent.jsx";
import "./index.css"
const App = () => {
  const selectedurl = useSelector((state) => state.counter.currentRoute);
  const Navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);

  const token = queryParams.get("token");
  const localStorageToken = localStorage.getItem("token");
   useEffect(() => {
    if (!token && !localStorageToken) {
      Navigate("/login");
    } else {
      if (token) {
        localStorage.setItem("token", `Bearer ${token}`);
      }
    }
  }, [token, localStorageToken]);

  return (
   <div>
      <TopSide />
      <SideBar />
      {selectedurl === "/inbox" ? <MainGround /> : <CenterComponent />}
    </div>
  )
}

export default App
