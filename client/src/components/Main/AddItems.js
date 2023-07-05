import React from "react";
import { BsPlusSquare, BsFillPlusSquareFill } from "react-icons/bs";

function AddItems({ handleAdd }) {
  return (
    <section 
    className="w-92 mx-auto mt-3 mb-5 pt-3 pb-5 add-item dark:bg-gray-900 dark:border-gray-700 dark:text-white bg-gray-50 border border-gray-300 rounded-lg shadow-sm">
      <label
        htmlFor="new-item"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        <h3 className="text-center text-lg">Add Items</h3>
      </label>
      <div className="flex justify-center items-center gap-0">
        <input
          name="new-item"
          placeholder="New Item"
          onBlur={handleAdd}
          type="text"
          id="new-item"
          className="inline-block p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onKeyDown={(e) => e.key === "Enter" && handleAdd(e)}
        />
        <button
          className="inline-block p-3 text-center text-gray-500 hover:text-gray-900 dark:hover:text-white"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            e.currentTarget.previousSibling.focus();
          }}
        >
          {(
            <BsPlusSquare className="w-8 h-8 mx-auto text-gray-900 active:outline-none rounded-full border border-gray-200 hover:text-blue-700 active:z-10 active:ring-2 active:ring-gray-200 dark:active:ring-gray-700 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white" />
          ) || <BsFillPlusSquareFill /> ||
            "+"}
        </button>
      </div>
    </section>
  );
}

export default AddItems;
