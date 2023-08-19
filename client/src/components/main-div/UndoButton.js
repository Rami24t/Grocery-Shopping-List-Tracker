import React, { memo } from "react";
import { GiReturnArrow } from "react-icons/gi";

const UndoButton = ({ darkMode, handleUndo }) => {
  return (
    <div className="relative">
      <button
        title="undo"
        className={`group absolute -top-4 right-1 text-xl rounded-full p-1.5 ${
          darkMode
            ? "text-violet-300 hover:text-violet-200 border-violet-300 hover:border-violet-200 bg-violet-950 hover:bg-violet-900 hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-opacity-60 focus:border-violet-600"
            : " text-violet-800 hover:text-violet-900 border-violet-200 border bg-violet-200 hover:bg-violet-200 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-300"
        } transition duration-300 ease-in-out active:scale-90`}
        onClick={()=>handleUndo()}
      >
        <GiReturnArrow className="rotate-180 -scale-x-100 transition-transform group-active:rotate-90 group-hover:rotate-90 group-hover:-scale-x-75 group-active:-scale-x-75 : " />
      </button>
    </div>
  );
};

export default memo(UndoButton);
