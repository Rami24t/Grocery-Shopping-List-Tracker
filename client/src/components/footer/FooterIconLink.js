import React from "react";
import { BsLinkedin } from "react-icons/bs";

function FooterIconLink({
  srText = "LinkedIn",
  url = "https://www.linkedin.com/in/rami-al-saadi-16a14223a/",
  icon = BsLinkedin,
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
    >
      {icon()}
      <span className="sr-only">{srText}</span>
    </a>
  );
}

export default FooterIconLink;