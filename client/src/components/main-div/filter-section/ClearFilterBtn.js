import React from "react";
import { BsFunnel, BsFunnelFill } from "react-icons/bs";

function ClearFilterBtn({filter, setFilter}) {

  function clearFilter() {
    setFilter("");
  }

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

export default ClearFilterBtn;