import  { useState, memo, useContext } from "react";
import { checkboxText } from "../../../data/text";
import { Context } from "../../Context";

function Checkbox({ item, handleToggle, darkMode}) {
  const { language } = (useContext(Context)).state.settings;
  const title = checkboxText[`TITLE_${item.need ? "NEEDED" : "NOT_NEEDED"}`][language];

  const [needed, setNeeded] = useState(item.need);
  const handleCheck = (e) => {
    e.target.disabled = true;
    setTimeout(() => {
      e.target.disabled = false;
    }, 500);
    setNeeded(!needed);
    handleToggle(item);
  };
  return (
    <input
      type="checkbox"
      onChange={handleCheck}
      checked={!needed}
      name="needed"
      className={`opacity-75 filter ${
        darkMode && needed ? "invert hue-rotate-180 brightness-75 " : ""
      } cursor-pointer inline-block leading-none w-5 h-6 m-2 border rounded focus:ring-3 ${
        !darkMode
          ? "border-gray-300 bg-gray-50 focus:ring-blue-300"
          : " bg-gray-700 border-gray-600 focus:ring-blue-600 ring-offset-gray-800 focus:ring-offset-gray-800"
      }`}
      style={{ minWidth: "24px", minHeight: "24px" }}
      // style={{ minWidth: "1.2rem" }}
      title={title}
    />
  );
}

export default memo(Checkbox);
