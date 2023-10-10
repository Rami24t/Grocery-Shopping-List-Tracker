import { memo, useContext } from "react";
import { AiTwotoneSound } from "react-icons/ai";
import { Context } from "../Context";

function ToggleSoundButton({ handleClick, darkMode, sound = true }) {
  const { state } = useContext(Context);
  const { language } = state.settings;
  const rtlAlignment = language === 2;

  return (
    <button
      onClick={handleClick}
      title={sound ? "Mute" : "Unmute"}
      aria-label="Mute/Unmute"
      type="button"
      className={`group -mt-10 md:-mt-11 float-left px-1 cursor-pointer flex items-center w-9 h-9 justify-center text-xs font-medium border rounded-lg toggle-dark-state-example focus:z-10 focus:ring-2 focus:outline-none 
      ${rtlAlignment ? "mr-5" : "ml-4"}
  ${
    !darkMode
      ? `hover:bg-gray-100 hover:text-blue-800 focus:bg-gray-100 focus:text-blue-800 bg-gray-100 border-gray-200 focus:ring-gray-300 bg-opacity-50 ${
          !sound ? "text-gray-400" : "text-blue-700"
        }`
      : `focus:ring-gray-500 bg-gray-800 border-gray-700 hover:bg-gray-700 hover:text-blue-300 focus:bg-gray-700 focus:text-blue-300 ${
          !sound ? "text-gray-500" : "text-blue-400"
        }`
  }`}
    >
      <AiTwotoneSound
        aria-label="Mute/Unmute"
        className="w-5 h-5"
        style={
          !sound
            ? {
                clipPath: "inset(0% 29% 0% 0%)",
                WebkitClipPath: "inset(0% 29% 0% 0%)",
                MozClipPath: "inset(0% 29% 0% 0%)",
                OClipPath: "inset(0% 29% 0% 0%)",
                MsClipPath: "inset(0% 29% 0% 0%)",
              }
            : ""
        }
      />
      <span aria-label="Mute/Unmute" className="sr-only">
        Mute/Unmute
      </span>
      <label
        aria-label="Mute/Unmute"
        className="relative ml-1 inline-flex items-center cursor-pointer"
      >
        <input
          type="checkbox"
          aria-label="Mute/Unmute"
          checked={sound}
          readOnly={true}
          className="m-0 p-0 sr-only peer"
          name="toggle-sound"
        />
        <div
          className={`m-0 p-0 w-2 h-4 peer-focus:outline-none peer-focus:ring-2 rounded-full peer ${
            darkMode
              ? "peer-focus:ring-blue-800 focus:ring-gray-500 after:bg-gray-500 after:border-gray-600 bg-gray-900 border-gray-800 peer-checked:after:bg-gray-400 group-hover:bg-gray-800 group-focus:bg-gray-800 group-focus:after:bg-gray-400 group-hover:after:bg-gray-400 peer-checked:bg-blue-800"
              : "peer-focus:ring-blue-300 after:bg-white border-gray-200 focus:ring-gray-300 peer-checked:bg-blue-500 bg-blue-400"
          } peer-checked:after:-translate-y-[120%] after:content-[''] after:absolute after:-bottom-[10%] after:left-[-10%] after:border after:rounded-full after:h-2 after:w-2 after:transition-transform`}
        ></div>
      </label>
    </button>
  );
}

export default memo(ToggleSoundButton);
