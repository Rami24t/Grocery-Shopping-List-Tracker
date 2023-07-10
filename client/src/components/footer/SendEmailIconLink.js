import React from "react";
import { BsSend } from "react-icons/bs";

function SendEmailIconLink({ lastPartOfEmail = "24@gmail.com", firstPartOfEmail = "alsaadi.rami", dark }) {
  return <a
  title="Email Me"
    href="#send-email"
    className={` ${dark?'hover:text-white':'hover:text-gray-900'} text-gray-500 `}
    onClick={() => {
      lastPartOfEmail = lastPartOfEmail || "24@gmail.com";
      window.open("mailto:" + (firstPartOfEmail || "alsaadi.rami") + lastPartOfEmail);
    }}
  >
    <BsSend />
    <span className="sr-only">Email Me</span>
  </a>;
}

export default SendEmailIconLink;