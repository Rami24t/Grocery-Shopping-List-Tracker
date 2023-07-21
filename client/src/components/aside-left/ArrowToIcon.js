import React from "react";
import { BiSolidArrowToTop } from "react-icons/bi";
import {
  linkClickSFXAudio,
  navLinkClickSFXAudio,
  buttonClickSFXAudio,
  buttonClickSFXAudio2,
  slideOutInSFXAudio,
} from "../../utils/sfx";

const ArrowToIcon = React.memo(({ toBottom, dark, shown }) => (
  <a
    href={`${toBottom ? "#footer" : "#app"}`}
    onClick={(e) => {
      e.stopPropagation();
      e.target.style.pointerEvents = "none";
      setTimeout(() => {
        e.target.style.pointerEvents = "";
      }, 800);
      buttonClickSFXAudio.currentTime = 0;
      buttonClickSFXAudio.play();
      slideOutInSFXAudio.currentTime = 0;
      slideOutInSFXAudio.play();
      setTimeout(() => {
        slideOutInSFXAudio.pause();
        slideOutInSFXAudio.currentTime = 0;
      }, 550);
    }}
    className={`text-xl rounded-e-xl bg-gray-900 bg-opacity-80 flex items-center justify-center fixed z-40  ${
      shown ? "-left-0.5" : "-left-8"
    } ${
      dark
        ? "text-gray-400 cursor-pointer hover:text-gray-200 "
        : "text-gray-500  hover:text-gray-900"
    } w-7 h-7 transition-all duration-700 ${
      toBottom ? "-scale-y-100 top-5" : "bottom-5"
    } `}
  >
    <BiSolidArrowToTop />
  </a>
));

export default ArrowToIcon;
