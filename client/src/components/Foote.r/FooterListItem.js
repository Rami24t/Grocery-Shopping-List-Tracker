import { memo } from "react";

function FooterListItem({ link, handleClick }) {
  return (
    <li className="mb-4">
      <a
        href={link.url}
        aria-label={link.text}
        className="hover:underline focus:underline"
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

export default memo(FooterListItem);
