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
        onClick={(e) => e.target = e.target.parentNode }
        className={`block m-2 text-center hover:font-bold text-2xl hover:scale-110 active:scale-110 transition-transform duration-200 ${
          darkMode
            ? "text-indigo-400 hover:text-indigo-200"
            : "text-indigo-700 hover:text-indigo-900"
        }`}
      />
    </button>
  );
}

export default memo(EditButton);
