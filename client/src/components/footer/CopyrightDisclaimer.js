import React from "react";
import { playSFXAudio } from "../../utils/sfx";

function CopyrightDisclaimer({
  year = "2023",
  author = "Rami Al-Saadi™",
  link = "https://www.linkedin.com/in/rami-al-saadi-16a14223a/",
  sfx,
  darkMode,
}) {
  const handleClick = () => {
    playSFXAudio(sfx);
  };
  return (
    <span className={`copyright-disclaimer mt-1 text-sm  sm:text-center ${darkMode?"text-gray-500":"text-gray-600"}`}>
      {`© ${year} `}
      <a
        href={link}
        onClick={handleClick}
        target="_blank"
        rel="noopener noreferrer"
        className={`${darkMode?"hover:text-gray-400":"text-gray-700 hover:text-gray-800"} hover:underline`}  
      >
        {author}
      </a>
      .&nbsp; All Rights Reserved.
    </span>
  );
}

export default React.memo(CopyrightDisclaimer);