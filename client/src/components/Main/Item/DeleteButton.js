import { useContext } from "react";
import { Context } from "../../Context/Context";
import { MdDeleteForever } from "react-icons/md";
import { deleteButtonText } from "../../../data/text";

export default function DeleteButton({ darkMode, handleClick }) {
  const { language } = useContext(Context).state.settings;
  const rtlAlignment = language === 2;
  const title = deleteButtonText.TITLE[language];
  return (
    <button
      onClick={handleClick}
      type="button"
      style={{ minWidth: "24px", minHeight: "24px" }}
      // style={{ minWidth: "1.2rem" }}
      title={title}
      aria-label="delete"
    >
      <MdDeleteForever
        className={`w-8 h-8 rounded-lg text-3xl text-center transition-transform duration-300 hover:scale-110 active:scale-125 hover:font-bold focus:font-bold inline-flex items-center justify-center leading-none focus:ring-2 focus:outline-none ${
          rtlAlignment ? "mr-1" : "ml-1"
        } ${
          darkMode
            ? " text-red-500 hover:text-red-400 focus:text-red-400"
            : " text-red-700 hover:text-red-800 focus:text-red-800"
        } `}
      />
    </button>
  );
}
