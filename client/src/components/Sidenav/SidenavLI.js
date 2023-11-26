import { memo } from "react";

function SideNavLI({
  title = "Nav Item",
  href = "#",
  onClick = () => {},
  darkMode = true,
  Icon = () => <i></i>,
  LIBadge,
  items = 0,
  badgeText = "",
  margin = "",
  styles = "",
}) {
  return (
    <li>
      <a
        title={title}
        aria-label={title}
        onClick={onClick || (() => {})}
        href={href}
        className={`${styles + " " || ""}${
          darkMode
            ? "text-white hover:bg-gray-700 focus:bg-gray-700"
            : "text-amber-500 hover:bg-red-800 focus:bg-red-800 hover:text-amber-300 focus:text-amber-300"
        } flex items-center p-2 rounded-lg`}
      >
        <Icon darkMode={darkMode} />
        <span className={`${margin} flex-1 sm:ml-3 whitespace-nowrap`}>
          {title}
        </span>
        {LIBadge && (
          <LIBadge darkMode={darkMode} items={items} text={badgeText} />
        )}
      </a>
    </li>
  );
}

export default memo(SideNavLI);
