import React from "react";
import "./MenuButton.css";

const MenuButton = ({ showSideNav }) => {
  console.log("shoiuzdsyxcgh: ", showSideNav);
  return (
      <div
        className={` menu-btn z-50 ${showSideNav ? "open" : ""}`}
      >
        <div className={`icon-left`}></div>
        <div className={`icon-right`}></div>
      </div>
  );
};

export default MenuButton;
