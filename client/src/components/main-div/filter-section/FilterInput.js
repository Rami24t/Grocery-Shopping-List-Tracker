import React, { useContext } from "react";
import {
  writingSFXAudio,
  editClickSFXAudio,
  playSFXAudio,
} from "../../../assets/sfx";
import { Context } from "../../Context";

function FilterInput({ filter, handleChangeFilter, items, darkMode }) {
  const { state } = useContext(Context);

  function onEnter(e) {
    if (e.key === "Enter") e.target.blur();
  }
  function handleFocus() {
    state.settings.sound && playSFXAudio(editClickSFXAudio, writingSFXAudio);
  }
  function handleBlur() {
    writingSFXAudio.pause();
    writingSFXAudio.currentTime = 0;
  }
  function handleChange(e) {
    handleChangeFilter(e.target.value);
  }

  return (
    <input
      type="text"
      id="filter"
      name="filter"
      value={filter}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={onEnter}
      className={`scroll-mt-3 outline-[#0a0adc99] ms-0.5 w-56 md:w-64 lg:w-80 border text-sm rounded-lg block pl-7 p-2.5 ${
        !darkMode
          ? "focus:ring-blue-300  focus:border-blue-300 placeholder-gray-400 bg-gray-50 bg-opacity-80 border-gray-300 text-gray-800"
          : "focus:ring-blue-500  focus:border-blue-500 placeholder-gray-400 bg-gray-700 bg-opacity-70 border-gray-600 text-white"
      }`}
      placeholder={`Start typing to filter ${items} items ...`}
    />
  );
}

export default React.memo(FilterInput);
