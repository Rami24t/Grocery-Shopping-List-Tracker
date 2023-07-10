import React from "react";
import "./MenuButton.css";

const MenuButton = ({ showSideNav, setShowSideNav,dark }) => {
  return (
    <div
      onClick={() => setShowSideNav((prev) => !prev)}
     className={`rounded-bl-2xl bg-gray-900 max-h-[60px] overflow-hidden cursor-pointer menu-btn z-50 ${showSideNav ? "open " : ""}`}>
      <div className={`ml-3 icon-left`}></div>
      <div className={`ml-3 icon-right`}></div>
    </div>
  );
};

export default MenuButton;
