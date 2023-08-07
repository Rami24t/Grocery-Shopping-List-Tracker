import React, { useContext } from "react";
import "./MenuButton.scss";
import { Context } from "../Context";
import {
  linkClickSFXAudio,
  navLinkClickSFXAudio,
  playSFXAudio,
  slideOutInSFXAudio,
} from "../../assets/sfx";

const MenuButton = React.memo(({ showSideNav, setShowSideNav, darkMode }) => {
  const { state, dispatch } = useContext(Context);
  const sound = state.settings.sound;
  const setInfo = (info) => dispatch({ type: "SET_INFO", payload: info });
  const menuButtonBgColor = darkMode
    ? "bg-black bg-gradient-to-l from-gray-950"
    : "bg-gray-50";
  const iconColor = darkMode ? "#a0a0ad" : "#667";
  const iconStyle = {
    "--color": iconColor,
  };
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        e.target.style.pointerEvents = "none";
        setTimeout(() => {
          e.target.style.pointerEvents = "";
        }, 800);
        if (sound) {
          playSFXAudio(navLinkClickSFXAudio);
          if (showSideNav) {
            playSFXAudio(slideOutInSFXAudio);
            setInfo("Menu closed");
            setTimeout(() => {
              slideOutInSFXAudio.pause();
              slideOutInSFXAudio.currentTime = 3.5;
            }, 800);
          } else {
            playSFXAudio(linkClickSFXAudio);
            setInfo("Menu is now open");
            slideOutInSFXAudio.currentTime = 3.5;
            slideOutInSFXAudio.play();
          }
        }
        setShowSideNav((prev) => !prev);
      }}
      className={`rounded-bl-2xl ${menuButtonBgColor}  bg-opacity-80 max-h-[60px] overflow-hidden cursor-pointer menu-btn z-50 ${
        showSideNav ? "open " : ""
      }`}
    >
      <div className={`ml-3 icon-left`} style={iconStyle}></div>
      <div className={`ml-3 icon-right`} style={iconStyle}></div>
    </div>
  );
});

export default MenuButton;
