import React from "react";
import { BsSend } from "react-icons/bs";

function SendEmailIconLink({ lastPartOfEmail = "24@gmail.com", firstPartOfEmail = "alsaadi.rami" }) {
  return <a
    href="#send-email"
    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
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