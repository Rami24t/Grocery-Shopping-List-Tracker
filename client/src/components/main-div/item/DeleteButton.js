import React from "react";
import { MdDeleteForever } from "react-icons/md";

export default function DeleteButton({ darkMode, handleClick }) {
  return (
    <button
      onClick={handleClick}
      type="button"
      style={{ minWidth: "1.2rem" }}
      title="Click to permanently delete this item"
      aria-label="delete"
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
