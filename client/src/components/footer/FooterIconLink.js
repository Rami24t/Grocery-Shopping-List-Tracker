import React from "react";
import { BsLinkedin } from "react-icons/bs";

function FooterIconLink({
  srText = "LinkedIn",
  url = "https://www.linkedin.com/in/rami-al-saadi-16a14223a/",
  Icon = BsLinkedin,
 dark}) {
  return (
    <a
    title={`my ${srText}`}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={` ${dark?' hover:text-white':'hover:text-gray-900'} text-gray-500 `}>
      <Icon />
      <span className="sr-only">{srText}</span>
    </a>
  );
}

export default React.memo(FooterIconLink);