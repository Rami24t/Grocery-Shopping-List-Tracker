import React from "react";

const badgesCommonStyle =
  "px-2 inline-flex items-center justify-center text-sm font-medium rounded-full px-2 inline-flex items-center justify-center text-sm font-medium rounded-full";

export const ProBadge = React.memo(({ darkMode }) => (
  <span
    className={` ${
      darkMode
        ? "bg-gray-800 hover:bg-gray-600 focus:bg-gray-600 text-gray-300"
        : "text-amber-800 bg-amber-200 "
    } sm:ml-3 pb-[1px] ${badgesCommonStyle}}`}
  >
    Pro
  </span>
));

export const ItemsBadge = React.memo(({ items, darkMode }) => (
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
