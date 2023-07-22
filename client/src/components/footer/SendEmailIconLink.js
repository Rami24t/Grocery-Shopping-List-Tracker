import React from "react";
import { BsSend } from "react-icons/bs";
import { emailSFXAudio, navLinkClickSFXAudio } from "../../utils/sfx";

function SendEmailIconLink({ lastPartOfEmail = "24@gmail.com", firstPartOfEmail = "alsaadi.rami", dark }) {
  return <a
  title="Email Me"
    href="#send-email"
    className={` ${dark?'hover:text-white':'hover:text-gray-900'} text-gray-500 `}
    onClick={() => {
      navLinkClickSFXAudio.currentTime = 0;
      navLinkClickSFXAudio.play();
      setTimeout(() => {
      emailSFXAudio.currentTime = 0;
      emailSFXAudio.play();
      }, 500);
      lastPartOfEmail = lastPartOfEmail || "24@gmail.com";
      window.open("mailto:" + (firstPartOfEmail || "alsaadi.rami") + lastPartOfEmail);
    }}
  >
    <BsSend />
    <span className="sr-only">Email Me</span>
  </a>;
}

export default React.memo(SendEmailIconLink);