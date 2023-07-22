import React from "react";
import { navLinkClickSFXAudio } from "../../utils/sfx";

function FooterListItem({
  link,
  handleClick = () => {
    navLinkClickSFXAudio.currentTime = 0;
    navLinkClickSFXAudio.play();
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
