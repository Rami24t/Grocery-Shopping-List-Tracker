import React, { useState, memo } from "react";
import { GiReturnArrow } from "react-icons/gi";

const UndoButton = ({ darkMode, handleUndo, disabled = true }) => {
  const [isCoolDown, setIsCoolDown] = useState(false);

  const handleClick = () => {
    if (!isCoolDown) {
      handleUndo();
      setIsCoolDown(true);
      setTimeout(() => {
        setIsCoolDown(false);
      }, 600);
    }
  };

  return (
    <div className="relative">
      <button
        disabled={disabled}
        title={disabled ? "Nothing to undo" : "Click to Undo"}
        aria-label={disabled ? "Nothing to undo" : "Click to Undo"}
        className={`transition duration-300 ease-in-out group absolute -top-4 right-1 rounded-full ${
          isCoolDown || disabled
            ? "opacity-90 cursor-default"
            : "active:scale-90"
        } ${
          darkMode
            ? `border-violet-800 border ${
                !disabled
                  ? "text-violet-300 hover:text-violet-200 hover:border-violet-700 hover:bg-violet-900 hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-violet-600 focus:ring-opacity-60 bg-violet-950"
                  : "text-violet-400 bg-slate-900"
              }`
            : `border-violet-200 border bg-violet-100 ${
                !disabled
                  ? "text-violet-800 hover:text-violet-900 hover:bg-white  hover:border-violet-50 focus:bg-violet-100 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-200"
                  : "text-violet-600"
              }`
        } ${!disabled ? "text-xl p-1.5" : "p-1 text-lg"}`}
        onClick={handleClick}
      >
        <GiReturnArrow
          className={
            !disabled
              ? "rotate-180 -scale-x-100 transition-transform group-active:rotate-90 group-hover:rotate-90 group-hover:-scale-x-75 group-active:-scale-x-75 : "
              : ""
          }
        />
      </button>
    </div>
  );
};

export default memo(UndoButton);
