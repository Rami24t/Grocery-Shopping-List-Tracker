import React, { useContext } from "react";
import FooterListItem from "./FooterListItem";
import { navLinkClickSFXAudio, playSFXAudio } from "../../assets/sfx";
import { Context } from "../Context";

function FooterList({
  title = "Resources",
  links = [{ text: "Rami", url: "https://www.github.com/rami24t" }],
  darkMode,
}) {
  const { state } = useContext(Context);
  const handleClick = () => {
    state.settings.sound && playSFXAudio(navLinkClickSFXAudio);
  };

  return (
    <div>
      <h2
        className={` ${
          darkMode ? "text-white" : "text-gray-800"
        } mb-6 text-sm font-semibold uppercase `}
      >
        {title}
      </h2>
      <ul
        className={` ${
          darkMode ? "text-gray-400" : "text-gray-700"
        } font-medium`}
      >
        {links.map((link, idx) => (
          <FooterListItem key={idx} link={link} handleClick={handleClick} />
        ))}
      </ul>
    </div>
  );
}

export default React.memo(FooterList);
