import React, { useState } from "react";
import { BsPencil } from "react-icons/bs";
import ItemName from "./ItemName";
import {
  editClickSFXAudio,
  writingSFXAudio,
  correctOrAddSFXAudio,
} from "../../../utils/sfx";

const Item = ({ item, handleDelete, handleToggle, updateItem, dark }) => {
  const handleEdit = (e) => {
    e.preventDefault();
    e.target.disabled = true;
    setTimeout(() => {
      e.target.disabled = false;
    }, 900);
    e.target.parentNode.firstChild.disabled = false;
    e.target.parentNode.firstChild.readOnly = false;
    e.target.parentNode.firstChild.focus();
    editClickSFXAudio.currentTime = 0;
    editClickSFXAudio.play();
    writingSFXAudio.currentTime = 0;
    writingSFXAudio.play();
  };

  const handleBlur = (e) => {
    e.preventDefault();
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
    correctOrAddSFXAudio.currentTime = 0;
    correctOrAddSFXAudio.play();
  };

  const handleCheck = (item) => {
    setNeeded(!needed);
    handleToggle(item);
  };

  const [needed, setNeeded] = useState(item.need);
  const [name, setName] = useState(item.name);

  function Checkbox() {
    return (
      <input
        type="checkbox"
        onChange={() => handleCheck(item)}
        checked={!needed}
        id="needed"
        className={`opacity-75 filter  ${
          needed ? "invert hue-rotate-180 brightness-75 " : ""
        } cursor-pointer inline-block leading-none w-5 h-6 m-2 border rounded focus:ring-3 ${
          !dark
            ? "border-gray-300 bg-gray-50 focus:ring-blue-300"
            : " bg-gray-700 border-gray-600 focus:ring-blue-600 ring-offset-gray-800 focus:ring-offset-gray-800"
        }`}
        style={{ minWidth: "1.2rem" }}
        title={`Click to ${needed ? "check" : "uncheck"}`}
      />
    );
  }
  function EditButton() {
    return (
      <button
        type="button"
        onClick={handleEdit}
        className={`leading-none w-6 h-6 rounded-lg m-2 text-center border hover:font-bold text-xl focus:ring-4 focus:outline-none  ${
          dark
            ? "border-indigo-400 bg-indigo-950 text-indigo-300 focus:ring-indigo-700 hover:text-indigo-200 hover:border-indigo-300"
            : " text-slate-800 hover:text-slate-600   border-slate-600 focus:ring-slate-400 "
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
        className={`inline-flex items-center justify-center w-6 h-6 leading-none rounded-lg ml-3 m-2 text-center hover:border-red-500 hover:font-bold text-xl border focus:ring-4 focus:outline-none ${
          dark
            ? "border-red-600 hover:border-red-400 text-red-500 bg-red-950  focus:ring-red-900 hover:text-red-400"
            : " text-red-700 hover:text-red-500 border-red-700 focus:ring-red-300"
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
        needed={needed}
        dark={dark}
      />
      <Checkbox dark={dark} />
      <EditButton dark={dark} />
      <DeleteButton dark={dark} />
    </div>
  );
};

export default Item;
