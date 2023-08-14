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
import { MdDeleteForever } from "react-icons/md";

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

  function DeleteButton({ darkMode }) {
    return (
      <button
        onClick={() => handleDelete(item)}
        type="button"
        // previously - last change:
        //   className={`active:scale-110 transition-transform duration-300 inline-flex items-center justify-center w-6 h-6 leading-none rounded-lg ml-3 m-2 text-center hover:border-red-500 hover:font-bold text-3xl border focus:ring-4 focus:outline-none ${
        //     darkMode
        //       ? " text-red-500 hover:text-red-400 bg-red-950 hover:bg-red-900 border-red-600 hover:border-red-400 focus:ring-red-900"
        //       : " text-red-600 hover:text-red-800 bg-red-200 hover:bg-red-300 border-red-500 hover:border-red-700 focus:ring-red-300"
        //   } `}
        // >
        //   {/* <span className="mb-1">x</span> */}

        style={{ minWidth: "1.2rem" }}
        title="Click to permanently delete this item"
      >
        <MdDeleteForever
          className={`ml-0.5 w-8 h-8 rounded-lg text-3xl text-center transition-transform duration-300 hover:scale-110 active:scale-125 hover:font-bold inline-flex items-center justify-center leading-none focus:ring-2 focus:outline-none ${
            darkMode
              ? " text-red-500 hover:text-red-400"
              : " text-red-700 hover:text-red-800"
          } `}
        />
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
      <EditButton handleEdit={handleEdit} darkMode={darkMode} />
      <DeleteButton darkMode={darkMode} />
    </div>
  );
};

export default Item;
