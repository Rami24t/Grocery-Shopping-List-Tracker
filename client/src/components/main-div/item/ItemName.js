import React, { useContext, memo } from "react";
import { playSFXAudio, typeSFXAudio } from "../../../assets/sfx";
import { Context } from "../../Context";

function ItemName({
  name,
  setName,
  handleBlur,
  handleKeyDown,
  needed,
  darkMode,
}) {
  const { state } = useContext(Context);
  const handleChange = (e) => {
    if (state.settings.sound && e.target.value.length > name.length) {
      playSFXAudio(typeSFXAudio);
    }
    setName(e.target.value);
  };

  return (
    <input
      type="text"
      disabled={true}
      name="name"
      value={name}
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      className={`text-md w-56 sm:w-52 md:w-80 lg:min-w-[59%] p-2.5 m-2 inline-block leading-none rounded-lg bg-no-repeat bg-center bg-cover outline-[#0a0adc99] border focus:border-blue-500 focus:ring-blue-500 filter ${
        darkMode
          ? "text-gray-50 contrast-[111%] hover:contrast-100 focus:contrast-100 bg-blend-darken disabled:bg-blend-multiply border-gray-700 placeholder-gray-400"
          : "text-white contrast-[105%] hover:contrast-125 focus:contrast-125 bg-blend-multiply disabled:bg-blend-darken border-gray-300 placeholder-gray-500"
      } ${!needed ? "line-through" : ""}`}
      title="Item Name"
      style={{
        backgroundColor: `rgba(0,0,19,0.${darkMode ? "7" : "4"})`,
        backgroundImage: `url("https://source.unsplash.com/random/200x40?${name})"`,
      }}
    />
  );
}

export default memo(ItemName);