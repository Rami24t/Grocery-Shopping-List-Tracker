import React from "react";
import { BiSolidArrowToTop } from "react-icons/bi";
import {
  toBottomTopSFXAudio,
  slideOutInSFXAudio,
  playSFXAudio,
} from "../../utils/sfx";

const ArrowToIcon = React.memo(({ toBottom, darkMode, shown }) => {
  function handleClick(e) {
      e.preventDefault();
      window.scrollTo({
        top: toBottom ? window.document.body.clientHeight : 0,
      });
      playSFXAudio(toBottomTopSFXAudio, slideOutInSFXAudio);
        setTimeout(() => {
          slideOutInSFXAudio.pause();
        }, 550);
        e.target.style.pointerEvents = "none";
        setTimeout(() => {
          e.target.style.pointerEvents = "";
        }, 800);
    }

  return (
    <a
      href={`${toBottom ? "#footer" : "#app"}`}
      onClick={handleClick}
      className={`text-xl rounded-e-xl  bg-opacity-80 flex items-center justify-center fixed z-40  ${
        shown ? "-left-0.5" : "-left-8"
      } ${
        darkMode
          ? "bg-gray-900 text-gray-400 cursor-pointer hover:text-gray-200 "
          : "bg-gray-400 text-white font-extrabold hover:bg-gray-500"
      } w-7 h-7 transition-all duration-700 ${
        toBottom ? "-scale-y-100 top-5" : "bottom-5"
      } `}
    >
      <BiSolidArrowToTop />
    </a>
  );
});

export default ArrowToIcon;
