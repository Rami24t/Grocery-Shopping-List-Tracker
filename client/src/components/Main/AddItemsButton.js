import React from 'react'

function AddItemsButton({ showAddItem, setShowAddItem }) {
    return (
      <button
        onClick={() => setShowAddItem(!showAddItem)}
        className={`transition-all inline-flex items-center justify-between gap-1.5 w-10 relative rounded-lg
      ${
        !showAddItem
          ? "bg-indigo-700  hover:bg-indigo-600"
          : "bg-red-800  hover:bg-red-700"
      } px-3 py-2 text-xs font-medium text-slate-200 transition focus:outline-none focus:ring
       hover:text-indigo-100
      `}
        type="button"
      >
        {showAddItem ? "Close " : "Add "}
        <div className={`transition-transform flex text-center items-center justify-center w-3 h-3 text-gray-800 dark:text-white ${showAddItem ? "rotate-90" : "rotate-0"}`}>
          &gt;
        </div>
        {/* <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
              {items.length || 0}{" "}
            </div> */}
      </button>
    );
  }


export default AddItemsButton