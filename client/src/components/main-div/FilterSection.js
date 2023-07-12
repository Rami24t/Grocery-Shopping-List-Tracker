import React from "react";
import { BsFunnel, BsFunnelFill } from "react-icons/bs";
import { SvgSearch } from "./SvgSearch";

function FilterSection({ filter, setFilter, handleChangeFilter, items, dark }) {
  if (items.length <= 1) return null;

  function onEnter(e) {
    if (e.key === "Enter") e.target.blur();
  }
  function clearFilter() {
    setFilter("");
  }

  function FilterInput() {
    return (
      <input
        type="text"
        id="filter"
        name="filter"
        value={filter}
        onChange={handleChangeFilter}
        onKeyDown={onEnter}
        className={`w-64 border text-sm rounded-lg focus:ring-blue-500  focus:border-blue-500 block pl-10 p-2.5 ${
          !dark
            ? "bg-gray-50 border-gray-300 text-gray-900"
            : "placeholder-gray-400 bg-gray-700 bg-opacity-70 border-gray-600 text-white"
        }`}
        placeholder={`Search ${items.length} Items`}
      />
    );
  }
  function ClearFilterBtn() {
    return (
      <button
        onClick={clearFilter}
        className="font-bold text-xl absolute inset-y-0 left-80 flex items-center pr-3"
      >
        {filter.length > 0 ? (
          <>
            <BsFunnelFill className="inline text-gray-100" />{" "}
            <div className="pointer-events-none inline w-[3px] h-8 rounded-full rotate-45 -translate-x-3 -translate-y-[3px] bg-red-400 opacity-75 "></div>
          </>
        ) : (
          <BsFunnel className="inline relative "></BsFunnel>
        )}
      </button>
    );
  }
  return (
    <section className="me-auto -ms-5 sm:mx-auto relative max-w-max my-1 text-center flex items-center">
      <label htmlFor="filter" className="sr-only">
        Filter Items
      </label>
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <SvgSearch dark={dark} />
      </div>
      <FilterInput />
      <ClearFilterBtn />
    </section>
  );
}

export default React.memo(FilterSection);