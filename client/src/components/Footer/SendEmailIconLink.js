import { useContext, memo } from "react";
import { BsSend } from "react-icons/bs";
import {
  emailSFXAudio,
  navLinkClickSFXAudio,
  playSFXAudio,
} from "../../assets/sfx";
import { Context } from "../Context/Context";

function SendEmailIconLink({
  lastPartOfEmail = "24@gmail.com",
  firstPartOfEmail = "alsaadi.rami",
  title = "Email Me",
  darkMode,
}) {
  const { state } = useContext(Context);
  const { sound } = state.settings;

  return (
    <a
      title={title}
      aria-label={title}
      href="#send-email"
      className={` ${
        darkMode
          ? "hover:text-white focus:text-white"
          : "hover:text-gray-900 focus:text-gray-900"
      } text-gray-500 `}
      onClick={() => {
        if (sound) {
          playSFXAudio(navLinkClickSFXAudio);
          setTimeout(() => {
            playSFXAudio(emailSFXAudio);
          }, 500);
        }
        lastPartOfEmail = lastPartOfEmail || "24@gmail.com";
        window.open(
          "mailto:" + (firstPartOfEmail || "alsaadi.rami") + lastPartOfEmail
        );
      }}
    >
      <BsSend />
      <span className="sr-only">Email Me</span>
    </a>
  );
}

export default memo(SendEmailIconLink);
