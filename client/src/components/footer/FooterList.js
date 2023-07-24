import React from "react";
import FooterListItem from "./FooterListItem";

function FooterList({
  title = "Resources",
  links = [{ text: "Rami", url: "https://www.github.com/rami24t" }], darkMode
}) {
  return (
    <div>
      <h2
        className={` ${
          darkMode ? "text-white" : "text-gray-900"
        } mb-6 text-sm font-semibold uppercase `}
      >
        {title}
      </h2>
      <ul className={` ${
          darkMode ?'text-gray-400': 'text-gray-600'} font-medium`}>
        {links.map((link, idx) => (
          <FooterListItem key={idx} link={link} />
        ))}
      </ul>
    </div>
  );
}

export default React.memo(FooterList);