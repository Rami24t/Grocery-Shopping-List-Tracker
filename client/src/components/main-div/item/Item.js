import React from "react";
import ItemNameInput from "./ItemNameInput";
import Checkbox from "./Checkbox";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

const Item = ({ item, handleDelete, handleToggle, updateItem, darkMode }) => {
  return (
    <li className="flex justify-around items-center">
      <ItemNameInput item={item} updateItem={updateItem} darkMode={darkMode} />
      <Checkbox item={item} handleToggle={handleToggle} darkMode={darkMode} />
      <EditButton darkMode={darkMode} />
      <DeleteButton
        darkMode={darkMode}
        handleClick={() => handleDelete(item)}
      />
    </li>
  );
};

export default Item;
