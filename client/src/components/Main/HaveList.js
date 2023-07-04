import React from "react";
import Item from "../Item";

function HaveList({
  filter,
  items,
  handleDelete,
  handleToggle,
  updateItem,
  validate,
}) {
  return (
    <article>
      <h3>Have</h3>
      <ul className="w-full">
        {items.map(
          (item) =>
            !item.need &&
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

export default HaveList;
