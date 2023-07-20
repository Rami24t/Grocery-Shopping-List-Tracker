import React from "react";
import "./MenuButton.scss";
import { linkClickSFXAudio, navLinkClickSFXAudio, slideOutInSFXAudio } from "../../utils/sfx";

const MenuButton = React.memo(({ showSideNav, setShowSideNav, dark }) => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        e.target.style.pointerEvents = "none";
        setTimeout(() => {
          e.target.style.pointerEvents = "";
        }, 800);
        navLinkClickSFXAudio.currentTime = 0;
        navLinkClickSFXAudio.play();
        if (showSideNav) {
          slideOutInSFXAudio.currentTime = 0;
          slideOutInSFXAudio.play();
          setTimeout(() => {
            slideOutInSFXAudio.pause();
            slideOutInSFXAudio.currentTime = 3.5;
          }, 800);
        } else {
          linkClickSFXAudio.currentTime = 0;
        linkClickSFXAudio.play();
          slideOutInSFXAudio.currentTime = 3.5;
          slideOutInSFXAudio.play();
        }
        setShowSideNav((prev) => !prev);
        }}
      className={`rounded-bl-2xl bg-gray-950 bg-opacity-80 max-h-[60px] overflow-hidden cursor-pointer menu-btn z-50 ${
        showSideNav ? "open " : ""
      }`}
    >
      <div className={`ml-3 icon-left`}></div>
      <div className={`ml-3 icon-right`}></div>
    </div>
  );
});

export default MenuButton;
