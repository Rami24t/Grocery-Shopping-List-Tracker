import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { navLinkClickSFXAudio } from "../../utils/sfx";

function FooterIconLink({
  srText = "LinkedIn",
  url = "https://www.linkedin.com/in/rami-al-saadi-16a14223a/",
  handleClick = () => {
    navLinkClickSFXAudio.currentTime = 0;
    navLinkClickSFXAudio.play();
  },
  Icon = BsLinkedin,
 dark}) {
  return (
    <a
    title={`my ${srText}`}
      href={url}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-lg ${dark?' hover:text-white':'hover:text-gray-900'} text-gray-500 `}>
      <Icon />
      <span className="sr-only">{srText}</span>
    </a>
  );
}

export default React.memo(FooterIconLink);