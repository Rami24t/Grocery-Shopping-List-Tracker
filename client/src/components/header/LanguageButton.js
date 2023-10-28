import { useContext } from "react";
import { LanguageBadge } from "../aside-left/Badges";
import { Context } from "../Context";

const LanguageButton = ({ text, handleClick, darkMode }) => {
  const en = useContext(Context).state.settings.language === 0;
  return (
    <button
      onClick={handleClick || (() => {})}
      className={`absolute rounded-xl z-50 sm:hidden border-2 ${
        en ? "top-0 left-0 border-1" : "top-1 left-0.5"
      } ${
        !darkMode
          ? `bg-orange-100 border-gray-200 focus:ring-gray-300 focus:border-gray-300 hover:border-gray-300`
          : `bg-gray-700 border-gray-700  focus:ring-gray-500 focus:border-gray-600 hover:border-gray-600`
      }`}
    >
      <LanguageBadge text={text} darkMode={darkMode} />
    </button>
  );
};

export default LanguageButton;
