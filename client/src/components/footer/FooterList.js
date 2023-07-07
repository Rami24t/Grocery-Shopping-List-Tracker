import React from "react";
import FooterListItem from "./FooterListItem";

function FooterList({
  title = "Resources", links = [{ text: "Rami", url: "https://www.github.com/rami24t" }],
}) {
  return (
    <div>
      <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
        {title}
      </h2>
      <ul className="text-gray-600 dark:text-gray-400 font-medium">
        {links.map((link, idx) => (
          <FooterListItem key={idx} link={link} />
        ))}
      </ul>
    </div>
  );
}

export default FooterList;
