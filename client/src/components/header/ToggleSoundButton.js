import React from "react";
import { AiTwotoneSound } from "react-icons/ai";

function ToggleSoundButton({ handleClick, darkMode, sound = true }) {
  return (
    <button
      onClick={handleClick}
      type="button"
      className={`-mt-10 md:-mt-11 float-left ml-4 px-1 cursor-pointer flex items-center w-9 h-9 justify-center text-xs font-medium border rounded-lg toggle-dark-state-example focus:z-10 focus:ring-2 focus:outline-none 
  ${
    !darkMode
      ? `hover:bg-gray-100 hover:text-blue-800 bg-gray-100 border-gray-200 focus:ring-gray-300 ${
          !sound ? "text-gray-400" : "text-blue-700"
        }`
      : "focus:ring-gray-500 bg-gray-800 text-gray-400 border-gray-700 hover:text-gray-100 hover:bg-gray-700"
  }`}
    >
      <AiTwotoneSound
        className="w-5 h-5"
        style={
          !sound
            ? {
                clipPath: "inset(0% 100% 0% 71%)",
                WebkitClipPath: "inset(0% 100% 0% 71%)",
                MozClipPath: "inset(0% 100% 0% 71%)",
                OClipPath: "inset(0% 100% 0% 71%)",
                MsClipPath: "inset(0% 100% 0% 71%)",
              }
            : ""
        }
      />
      <span className="sr-only">Toggle dark/light mode</span>
      <label className="relative ml-1 inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={sound}
          readOnly={true}
          className="m-0 p-0 sr-only peer"
        />
        <div
          className={`m-0 p-0 w-2 h-4 peer-focus:outline-none peer-focus:ring-2 rounded-full peer ${
            darkMode
              ? "peer-focus:ring-blue-800 focus:ring-gray-500 after:bg-gray-500 after:border-gray-600 bg-gray-900 border-gray-800 peer-checked:after:bg-gray-400 hover:bg-gray-800 peer-checked:bg-blue-900"
              : "peer-focus:ring-blue-300 after:bg-white border-gray-200 focus:ring-gray-300 peer-checked:bg-blue-500 bg-blue-400"
          } peer-checked:after:-translate-y-[120%] after:content-[''] after:absolute after:-bottom-[10%] after:left-[-10%] after:border after:rounded-full after:h-2 after:w-2 after:transition-transform`}
        ></div>
      </label>
    </button>
  );
}

export default React.memo(ToggleSoundButton);
