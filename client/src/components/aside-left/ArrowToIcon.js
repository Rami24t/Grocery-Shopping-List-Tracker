import React from "react";
import { BiSolidArrowToTop } from "react-icons/bi";

const ArrowToIcon = React.memo(({ toBottom, dark, shown, handleClick }) => (
  <a
    href={`${toBottom ? "#footer" : "#app"}`}
    onClick={handleClick}
    className={`text-xl rounded-e-xl bg-gray-900 bg-opacity-80 flex items-center justify-center fixed z-40  ${
      shown ? "-left-0.5" : "-left-8"
    } ${
      dark
        ? "text-gray-400 cursor-pointer hover:text-gray-200 "
        : "text-gray-500  hover:text-gray-900"
    } w-7 h-7 transition-all duration-700 ${
      toBottom ? "-scale-y-100 top-5" : "bottom-5"
    } `}
  >
    <BiSolidArrowToTop />
  </a>
));

export default ArrowToIcon;
