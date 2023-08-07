import React, { useContext, useState } from "react";
import InfoWidget from "./InfoWidget";
import Hero from "./Hero";
import quote from "../../data/randomQuote";
import ToggleDarkModeButton from "./ToggleDarkModeButton";
import ToggleSoundButton from "./ToggleSoundButton";
import { playSFXAudio, navLinkClickSFXAudio } from "../../assets/sfx";
import { Context } from "../Context";
import { createPortal } from "react-dom";
import InfoModal from "../infoModal/InfoModal";

function Header({ list, needs, haves, darkMode, setDarkMode }) {
  const { state, dispatch } = useContext(Context);
  const { sound } = state.settings;
  const [showModal, setShowModal] = useState(false);

  const toggleDarkModeClick = (e) => {
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
    setShowModal(true);
  };

  return (
    <header
      className={`app-header z-40 sticky bg-inherit w-full ${
        darkMode ? "" : "bg-gray-50"
      }`}
    >
      <div className="app-header-container mx-auto max-w-screen-xl px-2 py-4 sm:px-3 sm:py-6 pb-6 sm:pb-9 lg:px-8 md:flex sm:items-center sm:justify-between">
        <Hero
          title="Grocery Shopping List 🛒"
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
      {showModal &&
        createPortal(
          <InfoModal
            onClose={() => setShowModal(false)}
            darkMode={darkMode}
            text={"Sounds are now " + (!sound ? "muted" : "unmuted")}
          />,
          document.body
        )}
    </header>
  );
}

export default React.memo(Header);
