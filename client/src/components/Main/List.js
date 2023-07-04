import React from "react";
import Item from "../Item";

function List({
  title,
  filter,
  items,
  handleDelete,
  handleToggle,
  updateItem,
  validate,
}) {
  return (
    <article>
      <h3>{title}</h3>
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
              />
            )
        )}
      </ul>
    </article>
  );
}

export default List;
