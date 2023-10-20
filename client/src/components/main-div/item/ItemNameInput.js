import { useState, useContext, memo, useEffect } from "react";
import {
  playSFXAudio,
  correctOrAddSFXAudio,
  editClickSFXAudio,
  writingSFXAudio,
  typeSFXAudio,
} from "../../../assets/sfx";
import { Context } from "../../Context";
import { itemNameText } from "../../../data/text";

function ItemNameInput({ item, updateItem, darkMode }) {
  const { state, dispatch } = useContext(Context);
  const { sound, language } = state.settings;
  const rtlAlignment = language === 2;
  const setInfo = (info) => {
    dispatch({ type: "SET_INFO", payload: info });
  };

  const title = itemNameText.TITLE[language];
  const infoEditCancelled = itemNameText.INFO_EDIT_CANCELLED[language];
  const infoEditing = itemNameText.INFO_EDITING[language];
  const infoItemUpdated = itemNameText.INFO_ITEM_UPDATED[language];
  const placeholder = itemNameText.PLACEHOLDER[language];

  const needed = item.need;
  const [name, setName] = useState(item.name);
  useEffect(() => {
    setName(item.name);
  }, [item.name]);

  const handleChange = (e) => {
    if (sound && e.target.value.length > name.length) {
      playSFXAudio(typeSFXAudio);
    }
    setName(e.target.value);
  };

  const handleUpdate = (e) => {
    writingSFXAudio.pause();
    writingSFXAudio.currentTime = 0;
    const value = e.target.value.trim();
    if (value === "") {
      e.target.value = item.name;
      setName(item.name);
      // setInfo("Edit cancelled");
      setInfo(infoEditCancelled);
      return;
    }
    if (item.name === value) {
      // setInfo("Edit cancelled");
      setInfo(infoEditCancelled);
      return;
    }
    setName(value);
    updateItem(item, { name: value });
    sound && playSFXAudio(correctOrAddSFXAudio);
    // setInfo("Item updated");
    setInfo(infoItemUpdated);
  };

  const handleFocus = (e) => {
    sound && playSFXAudio(editClickSFXAudio, writingSFXAudio);
    // setInfo(`Editing ${item.name.match(/.*?[\w]+/)}...`);
    setInfo(`${!rtlAlignment ? infoEditing : ''} ${item.name.match(/.*?[\w]+/)}... ${rtlAlignment ? infoEditing : ''}`);
  };

  const handleBlur = (e) => {
    e.target.disabled = true;
    handleUpdate(e);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.target.blur();
    } else if (e.key === "Escape") {
      e.target.value = item.name;
      setName(item.name);
      e.target.blur();
    }
  };

  return (
    <input
      type="text"
      disabled={true}
      name="item-name"
      autoComplete="on"
      value={name}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      className={`text-md w-56 sm:w-52 md:w-80 lg:min-w-[59%] p-2.5 m-2 inline-block leading-none rounded-lg bg-no-repeat bg-center bg-cover outline-[#0a0adc99] border focus:border-blue-500 focus:ring-blue-500 filter ${
        darkMode
          ? "text-gray-50 contrast-[111%] hover:contrast-100 focus:contrast-100 bg-blend-darken disabled:bg-blend-multiply border-gray-700 placeholder-gray-400"
          : "text-white contrast-[105%] hover:contrast-125 focus:contrast-125 bg-blend-multiply disabled:bg-blend-darken border-gray-300 placeholder-gray-500"
      } ${!needed ? "line-through" : ""}`}
      title={title}
      placeholder={placeholder}
      style={{
        backgroundColor: `rgba(0,0,19,0.${darkMode ? "7" : "4"})`,
        backgroundImage: `url("https://source.unsplash.com/random/200x40?${name})"`,
      }}
    />
  );
}

export default memo(ItemNameInput);
