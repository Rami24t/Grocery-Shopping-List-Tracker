import { memo } from "react";
const badgesCommonStyle =
  "px-2 inline-flex items-center justify-center text-sm font-medium rounded-full px-2 inline-flex items-center justify-center text-sm font-medium rounded-full";

export const LanguageBadge = memo(({ text = "DE", darkMode }) => (
  <span
    className={` ${
      darkMode
        ? "text-gray-300 bg-gray-700 hover:bg-gray-600 focus:bg-gray-600"
        : "text-orange-700 bg-yellow-200 hover:bg-amber-200 focus:bg-amber-200"
    } sm:ml-3 ${badgesCommonStyle}}`}
  >
    {text}
  </span>
));

export const ItemsBadge = memo(({ items, darkMode }) => (
  <span
    className={` ${
      darkMode
        ? "bg-blue-950 hover:bg-blue-800 focus:bg-blue-800 text-blue-300"
        : "text-red-600 bg-amber-200 "
    } sm:ml-3 mr-1 w-3 h-3 py-2 ${badgesCommonStyle} `}
  >
    {items}
  </span>
));
