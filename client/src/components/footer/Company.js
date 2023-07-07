import React from "react";

function Company({ logo = "/logo-no-background.svg", name = "Rami Al-Saadi", link = "https://www.linkedin.com/in/rami-al-saadi-16a14223a/" }) {
  return <div className="mb-6 md:mb-0">
    <a
      href={link}
      className="flex items-center"
    >
      <img
        src={logo}
        className="h-8 mr-3"
        alt={name + "'s Logo"} />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        {name}
      </span>
    </a>
  </div>;
}

export default Company;