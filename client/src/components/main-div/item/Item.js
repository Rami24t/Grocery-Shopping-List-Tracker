import React, { useState } from "react";
import { BsPencil } from "react-icons/bs";
import ItemName from "./ItemName";

const Item = ({ item, handleDelete, handleToggle, updateItem, dark }) => {
  const handleEdit = (e) => {
    e.preventDefault();
    e.target.parentNode.firstChild.disabled = false;
    e.target.parentNode.firstChild.readOnly = false;
    e.target.parentNode.firstChild.focus();
    console.log("edit");
  };

  const handleBlur = (e) => {
    e.preventDefault();
    e.target.disabled = true;
    handleUpdate(e);
    console.log("Handled blur");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.target.disabled = true;
      handleUpdate(e);
      console.log("Handled Enter Keydown");
    }
  };

  const handleUpdate = (e) => {
    const value = e.target.value.trim();
    if (value === "") {
      e.target.value = item.name;
      return;
    }
    if (item.name === value) return;
    setName(value);
    updateItem(item, { name: value });
    console.log("update");
  };

  const handleCheck = (item) => {
    setNeeded(!needed);
    handleToggle(item);
    console.log("toggle");
  };

  const handleChange = (e) => {
    setName(e.target.value);
    console.log("change");
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
        className={`inline-block leading-none w-6 h-6 m-2 border rounded focus:ring-3 ${!dark?'border-gray-300 bg-gray-50 focus:ring-blue-300':' bg-gray-700 border-gray-600 focus:ring-blue-600 ring-offset-gray-800 focus:ring-offset-gray-800'}`}
        title={`Click to ${needed ? "check" : "uncheck"}`}
      />
    );
  }
  function EditButton() {
    return (
      <button
        type="button"
        onClick={handleEdit}
        className={`leading-none w-6 h-6 rounded-lg m-2 text-center border hover:font-bold text-xl focus:ring-4 focus:outline-none  ${dark?'border-slate-500 text-slate-400 focus:ring-slate-800 hover:text-slate-300 hover:border-slate-400': ' text-slate-800 hover:text-slate-600   border-slate-600 focus:ring-slate-400 '}`}
        title="Click to edit this item"
      >
        <BsPencil className="pointer-events-none " />
      </button>
    );
  }
  function DeleteButton() {
    return (
      <button
        onClick={() => handleDelete(item)}
        type="button"
        className={`inline-block w-6 h-6 pb-2 leading-none rounded-lg ml-3 m-2 text-center hover:border-red-500 hover:font-bold text-xl border focus:ring-4 focus:outline-none ${dark?'border-red-600 text-red-500 focus:ring-red-900 hover:text-red-400':' text-red-700 hover:text-red-500 border-red-700 focus:ring-red-300'} `}
        title="Click to permanently delete this item"
      >
        x
      </button>
    );
  }

  return (
    <div className="flex justify-around items-center">
      <ItemName name={name} handleChange={handleChange} handleBlur={handleBlur} handleKeyDown={handleKeyDown} needed={needed}  dark={dark} />
      <Checkbox  dark={dark} />
      <EditButton  dark={dark} />
      <DeleteButton  dark={dark} />
    </div>
  );
};

export default Item;

