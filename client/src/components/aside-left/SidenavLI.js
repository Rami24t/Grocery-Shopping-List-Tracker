import React from "react";

function SideNavLI({ title, href, onClick, dark, Icon, LIBadge, items, margin='ml-3'}) {
  return <li>
    <a
      onClick={onClick}
      href={href}
      className={` ${dark
        ? "text-white hover:bg-gray-700"
        : "text-gray-900 hover:bg-gray-100 "} flex items-center p-2  rounded-lg   `}
    >
      <Icon dark={dark} />
      <span className={`${margin} flex-1 sm:ml-3 whitespace-nowrap`}>{title}</span>
      <LIBadge dark={dark} items={items} />
    </a>
  </li>;
}

export default React.memo(SideNavLI);