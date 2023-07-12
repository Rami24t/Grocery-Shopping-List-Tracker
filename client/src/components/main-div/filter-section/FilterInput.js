import React from "react";

function FilterInput({filter, handleChangeFilter, items, dark}) {
  function onEnter(e) {
    if (e.key === "Enter") e.target.blur();
  }

  return (
    <input
      type="text"
      id="filter"
      name="filter"
      value={filter}
      onChange={handleChangeFilter}
      onKeyDown={onEnter}
      className={`w-64 border text-sm rounded-lg focus:ring-blue-500  focus:border-blue-500 block pl-10 p-2.5 ${!dark
          ? "bg-gray-50 border-gray-300 text-gray-900"
          : "placeholder-gray-400 bg-gray-700 bg-opacity-70 border-gray-600 text-white"}`}
      placeholder={`Search ${items} Items`} />
  );
}

export default FilterInput;