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
      className={`ms-0.5 w-56 md:w-64 lg:w-80 border text-sm rounded-lg focus:ring-blue-500  focus:border-blue-500 block pl-7 p-2.5 ${!dark
          ? "bg-gray-50 border-gray-300 text-gray-900"
          : "placeholder-gray-400 bg-gray-700 bg-opacity-70 border-gray-600 text-white"}`}
      placeholder={`Start typing to filter ${items} items ...`} />
  );
}

export default React.memo(FilterInput);