import React from "react";

function AddItemsButton({ showAddItem, setShowAddItem, listIsEmpty, dark }) {
  if(listIsEmpty)
    setShowAddItem(true);
  return (
    <button
      disabled={listIsEmpty}
      onClick={() => setShowAddItem(prev=>!prev)}
      className={` font-semibold transition-all inline-flex items-center justify-between gap-1.5 w-10 relative rounded-lg ${
        !showAddItem
          ? "bg-indigo-700  hover:bg-indigo-600"
          : "bg-red-800  hover:bg-red-700"
      } px-3 py-2 text-xs font-medium text-slate-200 transition focus:outline-none focus:ring hover:text-indigo-100 `}
      type="button"
    >
      {"Add "}
      <div
        className={`font-semibold transition-transform flex text-center items-center justify-center w-3 h-3 ${
          !dark ? "text-gray-800" : "text-white"
        } ${showAddItem ? "rotate-90" : "rotate-0 transform -translate-y-0.5"}`}
      >
        &gt;
      </div>
      {/* <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 border-gray-900">
              {items.length || 0}{" "}
            </div> */}
    </button>
  );
}

export default AddItemsButton;
