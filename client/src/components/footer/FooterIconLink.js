import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { navLinkClickSFXAudio, playSFXAudio } from "../../assets/sfx";

function FooterIconLink({
  srText = "LinkedIn",
  url = "https://www.linkedin.com/in/rami-al-saadi-16a14223a/",
  handleClick = () => {
    playSFXAudio(navLinkClickSFXAudio);
  },
  Icon = BsLinkedin,
 darkMode}) {
  return (
    <a
    title={`my ${srText}`}
      href={url}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-lg ${darkMode?' hover:text-white text-gray-500':'hover:text-gray-900 text-gray-600'}  `}>
      <Icon />
      <span className="sr-only">{srText}</span>
    </a>
  );
}

export default React.memo(FooterIconLink);