import React from "react";
import { BsFunnel, BsFunnelFill } from "react-icons/bs";

function FilterSection({ filter,setFilter, handleChangeFilter, items, dark }) {
  return (
    items.length > 1 && (
      <section className="relative w-96 mx-auto my-1 text-center">
        <label htmlFor="filter" className="sr-only">
          Filter Items
        </label>
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className={`w-5 h-5 ${dark? " text-gray-400 ":" text-gray-500"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="filter"
          name="filter"
          value={filter}
          onChange={handleChangeFilter}
          className={`w-64 border text-sm rounded-lg focus:ring-blue-500  focus:border-blue-500 block pl-10 p-2.5 ${!dark?"bg-gray-50 border-gray-300 text-gray-900":"placeholder-gray-400 bg-gray-700 border-gray-600 text-white"}`}
          placeholder={`Search ${items.length} Items`}
        />
        <button 
        onClick={()=>setFilter('')}
        className="absolute inset-y-0 left-80 flex items-center pr-3">
        {filter.length > 0 ? <BsFunnelFill className="inline" /> : 
          <BsFunnel className="inline" />
        }
          </button>
      </section>
    )
  );
}

export default FilterSection;