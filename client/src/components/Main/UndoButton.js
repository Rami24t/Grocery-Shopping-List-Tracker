import { useState, useContext, memo } from "react";
import { GiReturnArrow } from "react-icons/gi";
import { Context } from "../Context";
import { undoButtonText } from "../../data/text";

const UndoButton = ({ darkMode, handleUndo, disabled = true }) => {
  const [isCoolDown, setIsCoolDown] = useState(false);
  const { language } = useContext(Context).state.settings;
  const title = disabled
    ? undoButtonText.TITLE_DISABLED[language]
    : undoButtonText.TITLE_ENABLED[language];
  const rtl = language === 2;

  const handleClick = () => {
    if (!isCoolDown) {
      handleUndo();
      setIsCoolDown(true);
      setTimeout(() => {
        setIsCoolDown(false);
      }, 600);
    }
  };

  return (
    <div className="relative">
      <button
        disabled={disabled}
        title={title}
        aria-label={title}
        className={`transition duration-300 ease-in-out group absolute -top-4 rounded-full ${
          rtl ? "left-1.5 -scale-x-100" : "right-1.5"
        } ${
          isCoolDown || disabled
            ? "opacity-90 cursor-default"
            : rtl
            ? "active:-scale-x-90 active:scale-y-90"
            : "active:scale-90"
        } ${
          darkMode
            ? `border-violet-800 border ${
                !disabled
                  ? "text-violet-300 hover:text-violet-200 hover:border-violet-700 hover:bg-violet-900 hover:bg-opacity-80 focus:text-violet-200 focus:border-violet-700 focus:bg-opacity-80 focus:bg-violet-900 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-opacity-60 bg-violet-950"
                  : "text-violet-400 bg-slate-900"
              }`
            : `border-violet-200 border bg-violet-100 ${
                !disabled
                  ? "text-violet-800 hover:text-violet-900 hover:bg-white  hover:border-violet-50 focus:text-violet-900 focus:bg-white  focus:border-violet-50 focus:outline-none focus:ring-2 focus:ring-violet-400"
                  : "text-violet-600"
              }`
        } ${!disabled ? "text-xl p-1.5" : "p-1 text-lg"}`}
        onClick={handleClick}
      >
        <GiReturnArrow
          className={
            !disabled
              ? rtl
                ? `transition-transform group-focus:rotate-45 group-hover:rotate-45 group-active:rotate-45 group-focus:scale-x-90 group-hover:scale-x-90 group-active:scale-x-75`
                : `transition-transform rotate-180 -scale-x-100 group-focus:rotate-90 group-hover:rotate-90 group-active:rotate-90 group-focus:-scale-x-75 group-hover:-scale-x-75 group-active:-scale-x-75`
              : ""
          }
        />
      </button>
    </div>
  );
};

export default memo(UndoButton);
