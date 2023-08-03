import React, { useState, memo } from "react";

function Checkbox({ item, handleToggle, darkMode}) {
  const [needed, setNeeded] = useState(item.need);
  const handleCheck = () => {
    setNeeded(!needed);
    handleToggle(item);
  };
  return (
    <input
      type="checkbox"
      onChange={handleCheck}
      checked={!needed}
      id="needed"
      className={`opacity-75 filter  ${
        darkMode && needed ? "invert hue-rotate-180 brightness-75 " : ""
      } cursor-pointer inline-block leading-none w-5 h-6 m-2 border rounded focus:ring-3 ${
        !darkMode
          ? "border-gray-300 bg-gray-50 focus:ring-blue-300"
          : " bg-gray-700 border-gray-600 focus:ring-blue-600 ring-offset-gray-800 focus:ring-offset-gray-800"
      }`}
      style={{ minWidth: "1.2rem" }}
      title={`Click to ${needed ? "check" : "uncheck"}`}
    />
  );
}

export default memo(Checkbox);
