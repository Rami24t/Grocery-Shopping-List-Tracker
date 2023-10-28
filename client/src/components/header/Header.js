import { useContext, memo } from "react";
import InfoWidget from "./InfoWidget";
import Hero from "./Hero";
import ToggleDarkModeButton from "./DarkModeButton";
import ToggleSoundButton from "./SoundButton";
import { playSFXAudio, navLinkClickSFXAudio } from "../../assets/sfx";
import { Context } from "../Context";
import { TiShoppingCart } from "react-icons/ti";
import { headerText } from "../../data/text";
import LanguageButton from "./LanguageButton";

function Header({ list, needs, haves, darkMode, setDarkMode }) {
  const { state, dispatch } = useContext(Context);
  const { sound } = state.settings;
  const { language } = state.settings;
  const rtlAlignment = language === 2;

  const toggleDarkModeClick = (e) => {
    dispatch({
      type: "SET_INFO",
      payload: darkMode
        ? headerText.DARK_OFF[language]
        : headerText.DARK_ON[language],
    });
    e.preventDefault();
    e.stopPropagation();
    setDarkMode((prev) => !prev);
    sound && playSFXAudio(navLinkClickSFXAudio);
  };

  const toggleSoundClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    !sound && playSFXAudio(navLinkClickSFXAudio);
    dispatch({ type: "TOGGLE_SOUND" });
    dispatch({
      type: "SET_INFO",
      payload: sound
        ? headerText.SOUND_OFF[language]
        : headerText.SOUND_ON[language],
    });
  };
  const changeLanguage = () => dispatch({ type: "CHANGE_LANGUAGE" });
  const icon = TiShoppingCart;
  return (
    <header
      className={`app-header z-40 sticky bg-inherit w-full ${
        darkMode ? "" : "bg-gradient-to-l to-yellow-200"
      }`}
    >
      <div
        className={`
    app-header-container mx-auto max-w-screen-xl px-2 py-5 sm:px-3 sm:py-6 pb-6 sm:pb-9 lg:px-8 md:flex sm:items-center sm:justify-between
    ${rtlAlignment ? "md:flex-row-reverse" : "md:flex-row"}    
    `}
      >
        <Hero
          title={headerText.TITLES[language]}
          Icon={icon}
          darkMode={darkMode}
          subtitle={headerText.SUBTITLES[language]}
          rtlAlignment={language === 2}
        />
        <InfoWidget
          needs={needs}
          haves={haves}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          handleClick={toggleDarkModeClick}
        />
        <LanguageButton
          text={state.LANGUAGES[language % state.LANGUAGES.length]}
          darkMode={darkMode}
          handleClick={changeLanguage}
        />
        <ToggleSoundButton
          handleClick={toggleSoundClick}
          darkMode={darkMode}
          sound={sound}
        />
        <ToggleDarkModeButton
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          handleClick={toggleDarkModeClick}
        />
        <div className="clear-both invisible" />
      </div>
    </header>
  );
}

export default memo(Header);
