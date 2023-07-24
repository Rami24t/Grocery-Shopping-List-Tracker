import React from "react";

function ResetButton({ items, handleClear, handleReset, darkMode }) {
  return (
    <button
      onClick={(e)=>{
        items.length ? handleClear(e) : handleReset(e);
        e.target.disabled = true;
        setTimeout(() => {
          e.target.disabled = false;
        }, 900);
      }}
      className={`font-semibold transition-all w-10 relative rounded-lg
      ${
        !items.length
          ? "bg-indigo-700  hover:bg-indigo-600"
          : "bg-red-800  hover:bg-red-700"
      } px-3 py-2 text-xs font-medium text-slate-200 transition focus:outline-none focus:ring
       hover:text-indigo-100
      `}
      type="button"
    >
      {items.length ? "Clear" : "Reset"}
      <div
        className={`aspect-square rounded-full px-[3px] py-[2px] pt-[5px] bg-indigo-500 transition-transform flex text-center items-center justify-center min-w-[12px] min-h-[12px] font-bold ${
          darkMode ? "border-gray-800 text-gray-50" : "border-white text-gray-800"
        } ${
          !items.length ? "rotate-90" : "rotate-0"
        } absolute flex items-center justify-center text-xs font-bold text-white  border-2 rounded-full -top-2 -right-2`}
      >
        {items.length || "O"}
      </div>
    </button>
  );
}

export default React.memo(ResetButton);