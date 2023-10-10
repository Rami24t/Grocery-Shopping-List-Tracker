import { LanguageBadge } from "../aside-left/Badges";

const LanguageButton = ({ text, handleClick, darkMode }) => {
  return (
    <button
      onClick={handleClick || (() => {})}
      className="absolute top-2 left-2 z-50 sm:hidden"
    >
      <LanguageBadge text={text} darkMode={darkMode} />
    </button>
  );
};

export default LanguageButton;
