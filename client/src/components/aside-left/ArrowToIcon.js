import React, { useContext } from "react";
import { BiSolidArrowToTop } from "react-icons/bi";
import {
  toBottomTopSFXAudio,
  slideOutInSFXAudio,
  playSFXAudio,
} from "../../assets/sfx";
import { Context } from "../Context";

const ArrowToIcon = React.memo(({ toBottom, darkMode, shown }) => {
  const { state } = useContext(Context);
  function handleClick(e) {
    e.preventDefault();
    window.scrollTo({
      top: toBottom ? window.document.body.clientHeight : 0,
    });
    if (state.settings.sound) {
      playSFXAudio(toBottomTopSFXAudio, slideOutInSFXAudio);
      setTimeout(() => {
        slideOutInSFXAudio.pause();
      }, 550);
    }
    e.target.style.pointerEvents = "none";
    setTimeout(() => {
      e.target.style.pointerEvents = "";
    }, 800);
  }

  return (
    <a
      title={toBottom ? "Go To Bottom" : "Go To Top"}
      aria-label={toBottom ? "Scroll To Bottom" : "Scroll To Top"}
      href={`${toBottom ? "#footer" : "#app"}`}
      onClick={handleClick}
      className={`text-xl rounded-e-xl  bg-opacity-80 flex items-center justify-center fixed z-40  ${
        shown ? "-left-0.5" : "-left-8"
      } ${
        darkMode
          ? "bg-gray-900 text-gray-400 cursor-pointer hover:text-gray-200  focus:text-gray-200"
          : "bg-gray-400 text-amber-50 font-extrabold hover:bg-gray-500 focus:bg-gray-500"
      } w-7 h-7 transition-all duration-700 ${
        toBottom ? "-scale-y-100 bottom-5" : "top-5"
      } `}
    >
      <BiSolidArrowToTop />
    </a>
  );
});

export default ArrowToIcon;
