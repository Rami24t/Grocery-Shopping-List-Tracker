import React from "react";

function FooterListItem({ link }) {
  return (
    <li className="mb-4">
      <a
        href={link.url}
        className="hover:underline"
        target="_blank"
        rel="noopener noreferrer"
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
