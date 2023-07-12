import React from "react";
import { BsPlusCircle } from "react-icons/bs";

function AddItems({ handleAdd, dark }) {

  function handleClick() {
    return (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.currentTarget.previousSibling.focus();
    };
  }
  
  function onEnter() {
    return (e) => e.key === "Enter" && handleAdd(e);
  }

  return (
    <section className={`w-80 mx-auto mt-4 mb-5 pl-3 pt-3 pb-5 add-item border rounded-lg ${dark?'bg-gray-900 border-gray-700 text-white':'bg-gray-50 border-gray-300'} shadow-sm `}>
      <label
        htmlFor="new-item"
        className={`block mb-2 text-sm font-medium ${!dark?'text-gray-900':'text-white'} `}
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
          className={` ${dark?'placeholder-gray-400 text-white border-gray-600 bg-gray-700 bg-opacity-70 ':'text-gray-900 border-gray-300 bg-gray-50 '} inline-block p-4 border rounded-lg sm:text-md focus:ring-blue-500 focus:border-blue-500  `}
          onKeyDown={onEnter()}
        />
        <button
        title="Add Item"
          className={`${dark?'hover:text-white':'hover:text-gray-900'} inline-block p-3 text-center text-gray-500  `}
          onClick={handleClick()}
        >
          {(
            <BsPlusCircle className={`${dark?' active:ring-gray-700 text-gray-200 border-gray-600 hover:text-gray-100 opacity-70 ':'text-gray-900 border-gray-200 active:ring-gray-200 hover:text-blue-700 '} w-8 h-8 mx-auto  active:outline-none rounded-full border active:z-10 active:ring-2  
            `} />
          )}
        </button>
      </div>
    </section>
  );
}

export default AddItems;
