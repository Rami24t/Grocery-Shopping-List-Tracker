import React from "react";

function FooterListItem({ link }) {
  return <li className="mb-4">
    <a
      href={link.url}
      className="hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {link.text}
    </a>
  </li>;
}

export default FooterListItem;