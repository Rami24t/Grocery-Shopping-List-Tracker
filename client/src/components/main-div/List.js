import React from "react";
import Item from "./item/Item";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";

function List({
  title,
  filter,
  items,
  showItems,
  setShowItems,
  handleDelete,
  handleToggle,
  updateItem,
  validate,
  dark,
}) {

  return (
    <article>
      <h3
        className={`flex justify-between min-w-[154px] items-center gap-2 max-w-max mx-auto cursor-pointer font-bold ${
          items[0].need ? "text-orange-200" : "text-teal-300 "
        }`}
        onClick={() => setShowItems(!showItems)}
      >
        {title}: {items.length}
        {showItems ? <BsFillEyeFill className="inline-block"/>: <BsFillEyeSlashFill className="inline" />}
        <div
          className={`p-2 cursor-pointer text-lg transition-transform inline-flex text-center items-center justify-center w-4 h-4 ${
            showItems ? "rotate-90 translate-x-0.5" : "-rotate-0 transform -translate-y-0.5"
          }`}
        >
          &gt;
        </div>
      </h3>
      <ul
        className={
          "overflow-hidden transition-all " +
          (showItems
            ? "w-full opacity-100 rotate-0"
            : "opacity-0 w-0 h-0 rotate-45")
        }
      >
        {items.map(
          (item) =>
            (!filter || validate(item.name)) && (
              <Item
                key={item.id}
                item={item}
                updateItem={updateItem}
                handleDelete={handleDelete}
                handleToggle={handleToggle}
                dark={dark}
              />
            )
        )}
      </ul>
    </article>
  );
}

export default React.memo(List);