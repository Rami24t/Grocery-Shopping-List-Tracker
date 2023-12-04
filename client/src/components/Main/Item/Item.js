import { useContext, useRef } from "react";
import {
  ItemNameInput,
  Checkbox,
  EditButton,
  DeleteButton,
} from "./components";
import { Context } from "../../Context/Context";
import useInView from "../../../hooks/useInView";

const Item = ({ item, handleDelete, handleToggle, updateItem, darkMode }) => {
  const { language } = useContext(Context).state.settings;
  const rtlAlignment = language === 2;

  const itemRef = useRef(null);
  const inView = useInView(itemRef);

  return (
    <li
      ref={itemRef}
      className={`flex justify-around items-center duration-500 filter ${
        !inView ? "saturate-0 brightness-0 opacity-0" : ""
      } ${rtlAlignment ? "flex-row-reverse" : ""}`}
    >
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
