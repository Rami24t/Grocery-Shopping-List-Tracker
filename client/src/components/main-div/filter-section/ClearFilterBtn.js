import React, { useContext } from "react";
import { BsFunnel, BsFunnelFill } from "react-icons/bs";
import { pencilCheckSFXAudio, playSFXAudio } from "../../../assets/sfx";
import { Context } from "../../Context";

function ClearFilterBtn({ filter, setFilter, darkMode }) {
  const { state } = useContext(Context);

  function clearFilter() {
    if (state.settings.sound && filter.length > 0) {
      playSFXAudio(pencilCheckSFXAudio);
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
          <BsFunnelFill
            className={`inline ${darkMode ? "text-gray-100" : "text-gray-800"}`}
          />
          <div
            className={`pointer-events-none inline w-[3px] h-8 rounded-full rotate-45 -translate-x-3 -translate-y-[3px] ${
              darkMode ? "bg-red-400" : "bg-red-800"
            } opacity-75`}
          ></div>
        </>
      ) : (
        <BsFunnel className="inline relative"></BsFunnel>
      )}
    </button>
  );
}

export default React.memo(ClearFilterBtn);
