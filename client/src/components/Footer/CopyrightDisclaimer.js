import { useContext, memo } from "react";
import { playSFXAudio } from "../../assets/sfx";
import { Context } from "../Context/Context";

function CopyrightDisclaimer({
  year = "2023",
  author = "Rami Al-Saadi™",
  rights = "All Rights Reserved",
  link = "https://www.linkedin.com/in/rami-al-saadi-16a14223a/",
  sfx,
  darkMode,
}) {
  const { state } = useContext(Context);
  const handleClick = () => {
    state.settings.sound && playSFXAudio(sfx);
  };
  return (
    <span
      className={`copyright-disclaimer mt-1 text-sm text-center ${
        darkMode ? "text-gray-500" : "text-gray-600"
      }`}
    >
      {`© ${year} `}
      <a
        href={link}
        aria-label={"Visit " + author + "'s link"}
        onClick={handleClick}
        target="_blank"
        rel="noopener noreferrer"
        className={`${
          darkMode
            ? "hover:text-gray-400 focus:text-gray-400"
            : "text-gray-700 hover:text-gray-800 focus:text-gray-800"
        } hover:underline focus:underline`}
      >
        {author}
      </a>
      .&nbsp; {rights}
    </span>
  );
}

export default memo(CopyrightDisclaimer);
