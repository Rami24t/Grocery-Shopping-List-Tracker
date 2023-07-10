import React from "react";
import Item from "./item/Item";

function List({
  title,
  filter,
  items,
  handleDelete,
  handleToggle,
  updateItem,
  validate,
  dark
}) {
  return (
    <article>
      <h3 className={`font-bold ${items[0].need?'text-orange-200':'text-teal-300 '}`} >{title}: {items.length} </h3>
      <ul className="w-full">
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

export default List;
