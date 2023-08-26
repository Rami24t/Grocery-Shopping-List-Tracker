import  { useContext, memo } from "react";
import InfoWidget from "./InfoWidget";
import Hero from "./Hero";
import quote from "../../data/randomQuote";
import ToggleDarkModeButton from "./ToggleDarkModeButton";
import ToggleSoundButton from "./ToggleSoundButton";
import { playSFXAudio, navLinkClickSFXAudio } from "../../assets/sfx";
import { Context } from "../Context";
import { TiShoppingCart } from "react-icons/ti";

function Header({ list, needs, haves, darkMode, setDarkMode }) {
  const { state, dispatch } = useContext(Context);
  const { sound } = state.settings;

  const toggleDarkModeClick = (e) => {
    dispatch({
      type: "SET_INFO",
      payload: `Theme is now ${darkMode ? "bright" : "dark"}`,
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
      payload: `Sound is now ${sound ? "muted" : "unmuted"}`,
    });
  };
  const icon = TiShoppingCart;
  return (
    <header
      className={`app-header z-40 sticky bg-inherit w-full ${
        darkMode ? "" : "bg-gradient-to-l to-yellow-200"
      }`}
    >
      <div
        className={`
    app-header-container mx-auto max-w-screen-xl px-2 py-4 sm:px-3 sm:py-6 pb-6 sm:pb-9 lg:px-8 md:flex sm:items-center sm:justify-between`}
      >
        <Hero
          title="Grocery Shopping List"
          Icon={icon}
          darkMode={darkMode}
          subtitle={quote}
        />
        <InfoWidget
          needs={needs}
          haves={haves}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          handleClick={toggleDarkModeClick}
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
