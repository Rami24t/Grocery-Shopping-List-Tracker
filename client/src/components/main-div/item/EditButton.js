import React, { memo } from "react";
import { BsPencil } from "react-icons/bs";

function EditButton({ handleEdit, darkMode }) {
  return (
    <button
      type="button"
      onClick={handleEdit}
      onDoubleClick={handleEdit}
      title="Click to edit this item"
    >
      <BsPencil
        className={`block m-2 text-center hover:font-bold text-2xl hover:scale-110 active:scale-110 transition-transform duration-200 ${
          darkMode
            ? "text-indigo-300 hover:text-indigo-100 border-indigo-400 hover:border-indigo-300 focus:ring-indigo-700"
            : "text-indigo-700 hover:text-indigo-900 border-indigo-600 hover:border-indigo-700 focus:ring-indigo-300"
        }`}
      />
    </button>
  );
}

export default memo(EditButton);
