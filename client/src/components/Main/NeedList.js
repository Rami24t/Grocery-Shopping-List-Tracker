import React from "react";
import Item from "../Item";

function NeedList({
  filter,
  items,
  handleDelete,
  handleToggle,
  updateItem,
  validate,
}) {
  return (
    <article>
      <h3>Needed</h3>
      <ul>
        {items.map(
          (item) =>
            item.need &&
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

export default NeedList;
