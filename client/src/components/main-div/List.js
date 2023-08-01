import React, { useContext } from "react";
import Item from "./item/Item";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import {
  listCloseOpenSFXAudio,
  openListorClearSFXAudio,
  playSFXAudio,
} from "../../assets/sfx";
import { Context } from "../Context";

function List({
  title,
  items,
  filteredItems,
  showItems,
  setShowItems,
  handleDelete,
  handleToggle,
  updateItem,
  darkMode,
}) {
  const { state } = useContext(Context);
  const { sound } = state.settings;

  return (
    <article>
      <h3
        className={`flex justify-between min-w-[154px] items-center gap-2 max-w-max mx-auto cursor-pointer font-bold ${
          items[0].need
            ? darkMode
              ? "text-orange-600 hover:text-orange-500"
              : "text-red-600 hover:text-red-700"
            : darkMode
            ? "text-teal-400 hover:text-teal-300"
            : "text-green-700 hover:text-green-800"
        }`}
        onClick={(e) => {
          e.target.style.pointerEvents = "none";
          setTimeout(() => {
            e.target.style.pointerEvents = "auto";
          }, 500);
          setShowItems(!showItems);

          if (sound)
            if (showItems) {
              playSFXAudio(listCloseOpenSFXAudio);
            } else {
              playSFXAudio(openListorClearSFXAudio);
            }
        }}
      >
        {title}:{" "}
        {filteredItems.length < items.length ? filteredItems.length + "/" : ""}{" "}
        {items.length}
        {showItems ? (
          <BsEye className="inline-block" />
        ) : (
          <BsEyeSlash className="inline-block" />
        )}
        <div
          className={`${
            !filteredItems.length ? "invisible" : ""
          } p-2 cursor-pointer text-lg transition-transform inline-flex text-center items-center justify-center w-4 h-4 ${
            showItems
              ? "duration-500 rotate-90 translate-x-0.5"
              : "-rotate-0 transform -translate-y-0.5"
          }`}
        >
          &gt;
        </div>
      </h3>
      {filteredItems && (
        <ul
          className={`overflow-hidden w-full duration-500 transition-all flex-col items-center justify-center ${
            showItems
              ? "duration-500 opacity-100 rotate-0"
              : "opacity-0 h-1 rotate-12 "
          }`}
        >
          {filteredItems.map((item) => (
            <Item
              key={item.id}
              item={item}
              updateItem={updateItem}
              handleDelete={handleDelete}
              handleToggle={handleToggle}
              darkMode={darkMode}
            />
          ))}
        </ul>
      )}
    </article>
  );
}

export default React.memo(List);
