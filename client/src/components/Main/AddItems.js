import { memo, useState, useContext } from "react";
import { BsPlusCircle } from "react-icons/bs";
import {
  writingSFXAudio,
  editClickSFXAudio,
  typeSFXAudio,
  playSFXAudio,
} from "../../assets/sfx";
import { Context } from "../Context/Context";
import { addItemsText } from "../../data/text";

function AddItems({ handleAdd, showAddItem, darkMode }) {
  const [value, setValue] = useState("");
  const { state, dispatch } = useContext(Context);
  const setInfo = (info) => dispatch({ type: "SET_INFO", payload: info });
  const { sound, language } = state.settings;
  const rtlAlignment = language === 2;
  const title = addItemsText["TITLE"][language];
  const infoFocused = addItemsText["INFO_FOCUSED"][language];
  const infoCancelled = addItemsText["INFO_CANCELLED"][language];
  const infoTyping = addItemsText["INFO_TYPING"][language];
  const placeholder = addItemsText["PLACEHOLDER"][language];
  const buttonTitle = addItemsText["BUTTON_TITLE"][language];

  const handleClick = (e) => {
    e.stopPropagation();
    e.currentTarget.previousSibling.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleBlur(e);
    else if (e.key === "Escape") {
      setValue("");
      e.target.value = "";
      e.target.blur();
      setInfo(infoCancelled);
    }
  };

  const handleFocus = () => {
    sound && playSFXAudio(editClickSFXAudio, writingSFXAudio);
    setInfo(infoFocused);
  };

  const handleBlur = (e) => {
    writingSFXAudio.pause();
    setInfo("");
    handleAdd(e.target.value.trim());
    setValue("");
  };

  const handleChange = (e) => {
    if (sound && e.target.value.length > value.length)
      playSFXAudio(typeSFXAudio);
    setInfo(infoTyping);
    setValue(e.target.value);
  };

  return (
    <section
      className={`overflow-hidden transition-all duration-500 ${
        !showAddItem
          ? "w-0 h-0 p-0 border-0 scale-0 opacity-50"
          : `w-80 pt-3 pb-5 shadow-sm mb-5 ${
              rtlAlignment ? "pl-1 pr-3" : "pr-1 pl-3"
            }`
      } mt-4 max-w-max mx-auto add-item border rounded-lg ${
        darkMode
          ? "bg-gray-950 border-gray-800 text-white"
          : "bg-slate-50 bg-opacity-40 border-slate-300 text-gray-600"
      }  `}
    >
      <label
        htmlFor="new-item"
        className={`block mb-2 text-sm font-medium ${
          !darkMode ? "text-orange-900" : "text-white"
        } `}
      >
        <h3 className="text-center text-lg">{title}</h3>
      </label>
      <div
        className={`flex justify-center items-center gap-0 ${
          rtlAlignment && "flex-row-reverse"
        }`}
      >
        <input
          onChange={handleChange}
          value={value}
          name="new-item"
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          type="text"
          id="new-item"
          autoComplete="on"
          className={` ${rtlAlignment && "text-right"}
          mx-0 transition-transform scale-95 focus:scale-100 w-full
           ${
             darkMode
               ? "focus:border-blue-500 focus:ring-blue-500 placeholder-gray-400 text-white border-gray-600 bg-gray-700 bg-opacity-70 "
               : "focus:ring-blue-300  focus:border-blue-300 placeholder-gray-400 bg-gray-50 bg-opacity-80 border-gray-300 text-gray-800"
           } inline-block p-4 border rounded-lg sm:text-md outline-[#0a0adc99]`}
          onKeyDown={handleKeyDown}
        />
        <button
          title={buttonTitle}
          aria-label={buttonTitle}
          className={`${
            darkMode
              ? "hover:text-white focus:text-white"
              : "hover:text-gray-900 focus:text-gray-900"
          } inline-block p-3 text-center text-gray-500`}
          onClick={handleClick}
        >
          <BsPlusCircle
            className={`${
              darkMode
                ? "text-gray-100 border-gray-800 bg-blue-700 hover:bg-blue-600 hover:text-gray-50 active:ring-blue-500 focus:bg-blue-600 focus:text-gray-50 focus:ring-blue-500 opacity-70"
                : "text-gray-100 border-gray-200 bg-blue-500 hover:bg-blue-600  hover:text-gray-200 active:ring-blue-400 focus:ring-blue-500"
            } w-8 h-8 mx-auto rounded-full border active:ring-2 inline-flex items-center justify-center font-medium focus:ring-2 active:scale-110 transition-transform duration-200`}
          />
        </button>
      </div>
    </section>
  );
}

export default memo(AddItems);
