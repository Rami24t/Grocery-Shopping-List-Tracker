import React from "react";

function ResetButton({ items, handleClear, handleReset, darkMode }) {
  return (
    <button
      title="Reset items to default"
      aria-label="Reset items to default"
      onClick={(e) => {
        items.length ? handleClear(e) : handleReset(e);
        e.target.disabled = true;
        setTimeout(() => {
          e.target.disabled = false;
        }, 900);
      }}
      className={`${
        darkMode
          ? "text-slate-200 hover:text-slate-100"
          : "text-slate-100 hover:text-slate-50"
      } font-semibold transition-all w-10 relative rounded-lg
      ${
        !items.length
          ? darkMode
            ? "bg-indigo-700  hover:bg-indigo-600"
            : "bg-indigo-600  hover:bg-indigo-700"
          : darkMode
          ? "bg-red-800  hover:bg-red-700"
          : "bg-red-600  hover:bg-red-700"
      } px-3 py-2 text-xs font-medium transition focus:outline-none focus:ring`}
      type="button"
    >
      {items.length ? "Clear" : "Reset"}
      <div
        className={`aspect-square rounded-full px-[3px] py-[2px] pt-[5px] transition-transform flex text-center items-center justify-center min-w-[12px] min-h-[12px] font-bold ${
          darkMode
            ? "border-gray-800 text-gray-50 bg-indigo-500 "
            : "bg-indigo-200 border-indigo-100 text-gray-700"
        } ${
          !items.length ? "rotate-90" : "rotate-0"
        } absolute flex items-center justify-center text-xs font-bold border-2 rounded-full -top-2 -right-2`}
      >
        {items.length || "O"}
      </div>
    </button>
  );
}

export default React.memo(ResetButton);
