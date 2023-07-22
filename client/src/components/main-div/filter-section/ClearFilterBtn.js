import React from "react";
import { BsFunnel, BsFunnelFill } from "react-icons/bs";
import { pencilCheckSFXAudio } from "../../../utils/sfx";

function ClearFilterBtn({ filter, setFilter }) {
  function clearFilter() {
    if (filter.length > 0) {
      pencilCheckSFXAudio.currentTime = 0;
      pencilCheckSFXAudio.play();
    }
    setFilter("");
  }

  return (
    <button
      onClick={clearFilter}
      className=" font-bold text-xl flex items-center p-2 ms-0.5"
    >
      {filter.length > 0 ? (
        <>
          <BsFunnelFill className="inline text-gray-100" />
          <div className="pointer-events-none inline w-[3px] h-8 rounded-full rotate-45 -translate-x-3 -translate-y-[3px] bg-red-400 opacity-75 "></div>
        </>
      ) : (
        <BsFunnel className="inline relative "></BsFunnel>
      )}
    </button>
  );
}

export default React.memo(ClearFilterBtn);
