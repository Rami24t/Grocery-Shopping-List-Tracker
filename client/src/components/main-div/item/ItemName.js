import React from "react";
import { playSFXAudio, typeSFXAudio } from "../../../assets/sfx";

function ItemName({
  name,
  setName,
  handleBlur,
  handleKeyDown,
  needed,
  darkMode,
}) {
  const handleChange = (e) => {
    if (name.length < e.target.value.length) {
      playSFXAudio(typeSFXAudio);
    }
    setName(e.target.value.trim());
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
      className={`w-56 sm:w-52 md:w-80 lg:min-w-[59%] border text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 ${
        !needed && " line-through "
      } m-2 inline-block leading-none ${
        darkMode
          ? "hover:contrast-100 bg-blend-darken disabled:bg-blend-multiply contrast-[111%] border-gray-700 placeholder-gray-400 text-gray-50"
          : "contrast-[105%] hover:contrast-125  disabled:bg-blend-darken bg-blend-multiply text-white border-gray-300 placeholder-gray-500"
      } bg-no-repeat bg-center bg-cover filter focus:filter-none`}
      readOnly={true}
      title="item name"
      style={{
        backgroundColor: `rgba(0,0,19,0.${darkMode ? "7" : "4"})`,
        backgroundImage: `url("https://source.unsplash.com/random/200x40?${name})"`,
      }}
    />
  );
}

export default ItemName;
