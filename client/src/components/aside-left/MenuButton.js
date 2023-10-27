import { useContext, useEffect, memo } from "react";
import "./MenuButton.scss";
import { Context } from "../Context";
import {
  linkClickSFXAudio,
  navLinkClickSFXAudio,
  playSFXAudio,
  slideOutInSFXAudio,
  slideOutSFXAudio,
} from "../../assets/sfx";
import { menuButtonText } from "../../data/text";

const MenuButton = memo(({ showSideNav, setShowSideNav, darkMode }) => {
  useEffect(() => {
    slideOutSFXAudio.playbackRate = 1.7;
  }, []);
  const { state, dispatch } = useContext(Context);
  const { sound, language } = state.settings;

  const title = showSideNav
    ? menuButtonText.TITLE_CLOSE[language]
    : menuButtonText.TITLE_OPEN[language];
  const info = showSideNav
    ? menuButtonText.INFO_CLOSED[language]
    : menuButtonText.INFO_OPENED[language];

  const setInfo = (info) => dispatch({ type: "SET_INFO", payload: info });
  const menuButtonBgColor = darkMode
    ? "bg-black bg-gradient-to-l from-gray-950"
    : "bg-yellow-100";
  const iconColor = darkMode ? "#a0a0ad" : "#f59e0b";
  const iconStyle = {
    "--color": iconColor,
  };
  return (
    <button
      type="button"
      title={title}
      aria-label={menuButtonText.LABEL[language]}
      onClick={(e) => {
        e.stopPropagation();
        e.target.style.pointerEvents = "none";
        setTimeout(() => {
          e.target.style.pointerEvents = "";
        }, 800);
        setInfo(info);
        if (sound) {
          playSFXAudio(navLinkClickSFXAudio);
          if (showSideNav) {
            playSFXAudio(slideOutSFXAudio);
            slideOutInSFXAudio.currentTime = 3.6;
          } else {
            playSFXAudio(linkClickSFXAudio);
            try {
              slideOutInSFXAudio.currentTime = 3.6;
              slideOutInSFXAudio.play();
            } catch (err) {
              console.log(err);
            }
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
    </button>
  );
});

export default MenuButton;
