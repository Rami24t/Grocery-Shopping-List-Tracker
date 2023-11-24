import { memo, useContext } from "react";
import {
  writingSFXAudio,
  editClickSFXAudio,
  playSFXAudio,
} from "../../../assets/sfx";
import { Context } from "../../Context/Context";
import { filterInputText } from "../../../data/text";

function FilterInput({ filter, handleChangeFilter, items, darkMode }) {
  const { state, dispatch } = useContext(Context);
  const { language } = state.settings;
  const infoFilterCleared = filterInputText.INFO_FILTER_CLEARED[language];
  const infoFocused = filterInputText.INFO_FOCUSED[language];
  const placeholder = filterInputText.PLACEHOLDER[language].replace(
    "{items}",
    items
  );
  const title = filterInputText.TITLE[language];
  const rtlAlignment = language === 2;

  const setInfo = (info) => dispatch({ type: "SET_INFO", payload: info });
  function handleKeyDown(e) {
    if (e.key === "Enter") e.target.blur();
    else if (e.key === "Escape") {
      handleChangeFilter("");
      e.target.blur();
      setInfo(infoFilterCleared);
    }
  }
  function handleFocus() {
    state.settings.sound && playSFXAudio(editClickSFXAudio, writingSFXAudio);
    setInfo(infoFocused);
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
      autoComplete="on"
      value={filter}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      className={`scroll-mt-3 outline-[#0a0adc99] ms-0.5 w-56 md:w-64 lg:w-80 border text-sm rounded-lg block p-2.5
      ${rtlAlignment ? "text-end pr-8" : "pl-7"}
       ${
         !darkMode
           ? "focus:ring-blue-300  focus:border-blue-300 placeholder-gray-400 bg-gray-50 bg-opacity-80 border-gray-300 text-gray-800"
           : "focus:ring-blue-500  focus:border-blue-500 placeholder-gray-400 bg-gray-700 bg-opacity-70 border-gray-600 text-white"
       }`}
      title={title}
      placeholder={placeholder}
    />
  );
}

export default memo(FilterInput);
