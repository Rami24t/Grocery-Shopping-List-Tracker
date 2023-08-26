import  { memo, useContext } from "react";
import { BiSolidArrowToTop } from "react-icons/bi";
import {
  toBottomTopSFXAudio,
  slideOutInSFXAudio,
  playSFXAudio,
} from "../../assets/sfx";
import { Context } from "../Context";

const ArrowToIcon = memo(({ toBottom, darkMode, shown }) => {
  const { state } = useContext(Context);
  function handleClick(e) {
    window.scrollTo({
      top: toBottom ? window.document.body.clientHeight : 0,
    });
    if (state.settings.sound) {
      playSFXAudio(toBottomTopSFXAudio, slideOutInSFXAudio);
      setTimeout(() => {
        slideOutInSFXAudio.pause();
        slideOutInSFXAudio.currentTime = 3.6;
      }, 550);
    }
    e.target.style.pointerEvents = "none";
    setTimeout(() => {
      e.target.style.pointerEvents = "";
    }, 800);
  }

  return (
    <button
      title={toBottom ? "Go To Bottom" : "Back To Top"}
      aria-label={toBottom ? "Scroll To Bottom" : "Scroll To Top"}
      onClick={handleClick}
      className={`text-2xl rounded-e-2xl  bg-opacity-80 flex items-center justify-center fixed z-40  ${
        shown ? "-left-0.5" : "-left-8"
      } ${
        darkMode
          ? "bg-gray-900 text-gray-400 cursor-pointer hover:text-gray-200  focus:text-gray-200"
          : "bg-gray-400 text-amber-50 font-extrabold hover:bg-gray-500 focus:bg-gray-500"
      } w-8 h-8 transition-all duration-700 ${
        toBottom ? "-scale-y-100 bottom-5" : "top-5"
      } `}
    >
      <BiSolidArrowToTop />
    </button>
  );
});

export default ArrowToIcon;
