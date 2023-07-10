import React from "react";

export function ResetButton({ items, handleClear, handleReset, dark }) {
  return (
    <button
      onClick={items.length ? handleClear : handleReset}
      className={`font-semibold transition-all inline-flex items-center justify-between gap-1.5 w-10 relative rounded-lg
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
        className={`aspect-square rounded-full p-[3px] bg-indigo-500 transition-transform flex text-center items-center justify-center min-w-[12px] min-h-[12px] font-bold ${
          dark ? "border-gray-700 text-gray-50" : "border-white text-gray-800"
        } ${
          !items.length ? "rotate-90" : "rotate-0"
        } absolute inline-flex items-center justify-center text-xs font-bold text-white  border-2 rounded-full -top-2 -right-2`}
      >
        {items.length || "O"}
      </div>
    </button>
  );
}
