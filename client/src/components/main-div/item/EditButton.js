import  { memo, useContext } from "react";
import { BsPencil } from "react-icons/bs";
import { Context } from "../../Context";
import { editButtonText } from "../../../data/text";

function EditButton({ darkMode }) {
  const { language } = useContext(Context).state.settings;
  const rtlAlignment = language === 2;
  const title = editButtonText.TITLE[language];
  const label = editButtonText.LABEL[language];

  const handleEdit = (e) => {
    if (e.target.tagName === "svg") e.target = e.target.parentNode;
    e.target.parentNode.firstChild.disabled = false;
    e.target.parentNode.firstChild.focus();
  };

  return (
    <button
      type="button"
      onClick={handleEdit}
      onDoubleClick={handleEdit}
      title={title}
      aria-label={label}
      style={{ width: "24px", height: "24px" }}
    >
      <BsPencil
        onClick={(e) => (e.target = e.target.parentNode)}
        className={`block text-center hover:font-bold hover:scale-110 focus:font-bold focus:scale-110 active:scale-110 text-2xl transition-transform duration-200 ${
          rtlAlignment ? "ml-0.5" : "mr-1"
        } ${
          darkMode
            ? "text-indigo-400 hover:text-indigo-200 focus:text-indigo-200"
            : "text-indigo-700 hover:text-indigo-900 focus:text-indigo-900"
        }`}
      />
    </button>
  );
}

export default memo(EditButton);
