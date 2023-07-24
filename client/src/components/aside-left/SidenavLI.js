import React from "react";

function SideNavLI({ title, href, onClick, darkMode, Icon, LIBadge, items, margin}) {
  return <li>
    <a
      onClick={onClick && onClick}
      href={href}
      className={` ${darkMode
        ? "text-white hover:bg-gray-700"
        : "text-gray-900 hover:bg-gray-100 "} flex items-center p-2  rounded-lg   `}
    >
      <Icon darkMode={darkMode} />
      <span className={`${margin} flex-1 sm:ml-3 whitespace-nowrap`}>{title}</span>
      {LIBadge && <LIBadge darkMode={darkMode} items={items} />}
    </a>
  </li>;
}

export default React.memo(SideNavLI);