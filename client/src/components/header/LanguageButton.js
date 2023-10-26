import { LanguageBadge } from "../aside-left/Badges";

const LanguageButton = ({ text, handleClick, darkMode }) => {
  return (
    <button
      onClick={handleClick || (() => {})}
      className={`absolute rounded-xl top-2 left-2 z-50 sm:hidden border-2 ${
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
