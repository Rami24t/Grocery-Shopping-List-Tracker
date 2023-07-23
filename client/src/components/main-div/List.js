import React from "react";
import Item from "./item/Item";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import {
  listCloseOpenSFXAudio,
  openListorClearSFXAudio,
  playSFXAudio,
} from "../../utils/sfx";

function List({
  title,
  items,
  filteredItems,
  showItems,
  setShowItems,
  handleDelete,
  handleToggle,
  updateItem,
  dark,
}) {
  return (
    <article>
      <h3
        className={`flex justify-between min-w-[154px] items-center gap-2 max-w-max mx-auto cursor-pointer font-bold ${
          items[0].need ? "text-orange-200" : "text-teal-300 "
        }`}
        onClick={(e) => {
          e.target.style.pointerEvents = "none";
          setTimeout(() => {
            e.target.style.pointerEvents = "auto";
          }, 500);
          setShowItems(!showItems);
          try {
            if (showItems) {
              playSFXAudio(listCloseOpenSFXAudio);
            } else {
              playSFXAudio(openListorClearSFXAudio);
            }
          } catch (error) {
            console.log(error);
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
              dark={dark}
            />
          ))}
        </ul>
      )}
    </article>
  );
}

export default React.memo(List);
