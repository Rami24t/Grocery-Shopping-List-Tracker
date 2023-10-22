import { useContext } from "react";
import ItemNameInput from "./ItemNameInput";
import Checkbox from "./Checkbox";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import  { Context } from "../../Context";

const Item = ({ item, handleDelete, handleToggle, updateItem, darkMode }) => {
  const { language } = useContext(Context).state.settings;
  const rtlAlignment = language === 2;

  return (
    <li className={`flex justify-around items-center ${rtlAlignment ? "flex-row-reverse" : ""}`}>
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
