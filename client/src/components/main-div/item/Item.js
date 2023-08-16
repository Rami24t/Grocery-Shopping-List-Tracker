import React, { useState, useContext } from "react";
import { Context } from "../../Context";
import {
  editClickSFXAudio,
  writingSFXAudio,
  correctOrAddSFXAudio,
  playSFXAudio,
} from "../../../assets/sfx";
import ItemName from "./ItemName";
import Checkbox from "./Checkbox";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

const Item = ({ item, handleDelete, handleToggle, updateItem, darkMode }) => {
  const { state, dispatch } = useContext(Context);
  const { sound } = state.settings;
  const setInfo = (info) => {
    dispatch({ type: "SET_INFO", payload: info });
  };

  const handleEdit = (e) => {
    if(e.target.tagName === "svg") e.target = e.target.parentNode;
    e.target.parentNode.firstChild.disabled = false;
    e.target.parentNode.firstChild.focus();
    sound && playSFXAudio(editClickSFXAudio, writingSFXAudio);
    setInfo(`Editing ${item.name.match(/.*?[\w]+/)}...`);
  };

  const handleBlur = (e) => {
    e.target.disabled = true;
    handleUpdate(e);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.target.blur();
    } else if (e.key === "Escape") {
      e.target.value = item.name;
      setName(item.name);
      e.target.blur();
    }
  };

  const handleUpdate = (e) => {
    writingSFXAudio.pause();
    writingSFXAudio.currentTime = 0;
    const value = e.target.value.trim();
    if (value === "") {
      e.target.value = item.name;
      setName(item.name);
      setInfo("Edit cancelled");
      return;
    }
    if (item.name === value) {
      setInfo("Edit cancelled");
      return;
    }
    setName(value);
    updateItem(item, { name: value });
    sound && playSFXAudio(correctOrAddSFXAudio);
    setInfo("Item updated");
  };

  const [name, setName] = useState(item.name);

  
  return (
    <div className="flex justify-around items-center">
      <ItemName
        name={name}
        setName={setName}
        handleBlur={handleBlur}
        handleKeyDown={handleKeyDown}
        needed={item.need}
        darkMode={darkMode}
      />
      <Checkbox item={item} handleToggle={handleToggle} darkMode={darkMode} />
      <EditButton handleEdit={handleEdit} darkMode={darkMode} />
      <DeleteButton darkMode={darkMode} handleClick={()=>handleDelete(item)} />
    </div>
  );
};

export default Item;
