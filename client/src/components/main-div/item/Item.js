import React, { useState, useContext } from "react";
import { BsPencil } from "react-icons/bs";
import ItemName from "./ItemName";
import {
  editClickSFXAudio,
  writingSFXAudio,
  correctOrAddSFXAudio,
  playSFXAudio,
} from "../../../assets/sfx";
import { Context } from "../../Context";
import Checkbox from "./Checkbox";

const Item = ({ item, handleDelete, handleToggle, updateItem, darkMode }) => {
  const { state } = useContext(Context);
  const { sound } = state.settings;
  const handleEdit = (e) => {
    // e.preventDefault();
    e.target.disabled = true;
    setTimeout(() => {
      e.target.disabled = false;
    }, 900);
    e.target.parentNode.firstChild.disabled = false;
    e.target.parentNode.firstChild.readOnly = false;
    e.target.parentNode.firstChild.focus();
    sound && playSFXAudio(editClickSFXAudio, writingSFXAudio);
  };

  const handleBlur = (e) => {
    // e.preventDefault();
    e.target.disabled = true;
    handleUpdate(e);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.target.blur();
    }
  };

  const handleUpdate = (e) => {
    writingSFXAudio.pause();
    writingSFXAudio.currentTime = 0;
    const value = e.target.value.trim();
    if (value === "") {
      e.target.value = item.name;
      return;
    }
    if (item.name === value) return;
    setName(value);
    updateItem(item, { name: value });
    sound && playSFXAudio(correctOrAddSFXAudio);
  };

  const [name, setName] = useState(item.name);

  function EditButton() {
    return (
      <button
        type="button"
        onClick={handleEdit}
        className={`active:scale-110 transition-transform duration-200 leading-none w-6 h-6 rounded-lg m-2 text-center border hover:font-bold text-xl focus:ring-4 focus:outline-none  ${
          darkMode
            ? "text-indigo-300 hover:text-indigo-200 bg-indigo-950 hover:bg-indigo-900 border-indigo-400 hover:border-indigo-300 focus:ring-indigo-700"
            : "text-indigo-700 hover:text-indigo-800 bg-indigo-100 hover:bg-indigo-200 border-indigo-600 hover:border-indigo-700 focus:ring-indigo-300"
        }`}
        title="Click to edit this item"
      >
        <BsPencil className="pointer-events-none" />
      </button>
    );
  }
  function DeleteButton() {
    return (
      <button
        onClick={() => handleDelete(item)}
        type="button"
        className={`active:scale-110 transition-transform duration-300 inline-flex items-center justify-center w-6 h-6 leading-none rounded-lg ml-3 m-2 text-center hover:border-red-500 hover:font-bold text-2xl border focus:ring-4 focus:outline-none ${
          darkMode
            ? " text-red-500 hover:text-red-400 bg-red-950 hover:bg-red-900 border-red-600 hover:border-red-400 focus:ring-red-900"
            : " text-red-600 hover:text-red-800 bg-red-200 hover:bg-red-300 border-red-500 hover:border-red-700 focus:ring-red-300"
        } `}
        style={{ minWidth: "1.2rem" }}
        title="Click to permanently delete this item"
      >
        <span className="mb-1">x</span>
      </button>
    );
  }

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
      <EditButton darkMode={darkMode} />
      <DeleteButton darkMode={darkMode} />
    </div>
  );
};

export default Item;
