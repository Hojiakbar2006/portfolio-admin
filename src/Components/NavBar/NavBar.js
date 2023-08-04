import React from "react";
import "./NavBar.css";
import menuBtn from "../../Assets/Icons/menuBtn.png";
import message from "../../Assets/Icons/message.png";
// import { useDispatch, useSelector } from "react-redux";
// import { acAlert } from "../../Redux/Alert";

export function NavBar({ setOpenNav, setOpenApp }) {
  // const dispatch = useDispatch();
  // const alert = useSelector((state)=>state.alert)
  return (
    <div id="AppBar">
      <button className="menuBtn" onClick={() => setOpenNav(true)}>
        <img src={menuBtn} alt="" />
      </button>
      <div className="itemCard">
        <label className="Search">
          <input type="text" placeholder="Search" />
        </label>
        <img
          className="messageBtn"
          width="40px"
          src={message}
          alt=""
          onClick={() => setOpenApp(true)}
        />
      </div>
    </div>
  );
}
