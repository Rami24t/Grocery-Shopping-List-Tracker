import React from "react";

const badgesCommonStyle = 'px-2 inline-flex items-center justify-center text-sm font-medium rounded-full px-2 inline-flex items-center justify-center text-sm font-medium rounded-full';

export const ProBadge = React.memo(({ dark }) => (
    <span
      className={` ${dark
          ? "bg-gray-700 hover:bg-gray-800 text-gray-300"
          : "text-gray-800 bg-gray-200 "} sm:ml-3 pb-[1px] ${badgesCommonStyle}}`}
    >
      Pro
    </span>
  ));

export const ItemsBadge = React.memo(({ items, dark }) => (
    <span
      className={` ${
        dark ? "bg-blue-900 text-blue-300" : "text-blue-800 bg-blue-100 "
      } sm:ml-3 mr-1 w-3 h-3 py-2 ${badgesCommonStyle} `}
    >
      {items}
    </span>
  ));