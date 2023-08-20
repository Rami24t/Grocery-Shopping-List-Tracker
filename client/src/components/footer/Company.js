import React from "react";
import { playSFXAudio } from "../../assets/sfx";
import { Context } from "../Context";

function Company({
  logo = "/logo-no-background.svg",
  name = "Rami Al-Saadi",
  link = "https://www.linkedin.com/in/rami-al-saadi-16a14223a/",
  sfx,
  darkMode,
}) {
  const { state } = React.useContext(Context);
  const handleClick = () => {
    state.settings.sound && playSFXAudio(sfx);
  };
  return (
    <div className="mb-6 md:mb-0">
      <a
        href={link}
        aria-label={"Visit " + {name} + "'s link"}
        onClick={handleClick}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center animate-pulse"
      >
        <img
          src={logo}
          className={`h-8 mr-3 ${darkMode ? "" : "filter invert"}`}
          alt={name + "'s Logo"}
        />
        <span
          className={`yellow-tail self-center text-2xl font-semibold whitespace-nowrap ${
            darkMode ? " text-white" : "text-red-900"
          }`}
        >
          {name}
        </span>
      </a>
      <p className="block ml-auto w-36 text-end text-xs opacity-50 select-none">
        {" "}
        's 🛒 Shopping List
      </p>
    </div>
  );
}

export default React.memo(Company);
