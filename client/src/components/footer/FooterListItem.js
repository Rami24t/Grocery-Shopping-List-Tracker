import React from "react";
import { navLinkClickSFXAudio, playSFXAudio } from "../../utils/sfx";

function FooterListItem({
  link,
  handleClick = () => {
    playSFXAudio(navLinkClickSFXAudio);
  },
}) {
  return (
    <li className="mb-4">
      <a
        href={link.url}
        className="hover:underline"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
      >
        <span className="flex items-center gap-2">
          {link.text}
          {link.Logo ? <link.Logo className="inline" /> : null}
        </span>
      </a>
    </li>
  );
}

export default React.memo(FooterListItem);
