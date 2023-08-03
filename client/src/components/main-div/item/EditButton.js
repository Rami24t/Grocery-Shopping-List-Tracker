import React, {memo} from "react";
import { BsPencil } from "react-icons/bs";

function EditButton({ handleEdit, darkMode }) {
  return (
    <button
      type="button"
      onClick={handleEdit}
      onDoubleClick={handleEdit}
      className={`active:scale-110 transition-transform duration-200 leading-none w-6 h-6 rounded-lg m-2 text-center border hover:font-bold text-xl focus:ring-4 focus:outline-none  ${darkMode
          ? "text-indigo-300 hover:text-indigo-200 bg-indigo-950 hover:bg-indigo-900 border-indigo-400 hover:border-indigo-300 focus:ring-indigo-700"
          : "text-indigo-700 hover:text-indigo-800 bg-indigo-100 hover:bg-indigo-200 border-indigo-600 hover:border-indigo-700 focus:ring-indigo-300"}`}
      title="Click to edit this item"
    >
      <BsPencil className="pointer-events-none" />
    </button>
  );
}

export default memo(EditButton);