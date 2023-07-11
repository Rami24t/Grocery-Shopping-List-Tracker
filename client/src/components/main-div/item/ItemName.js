import React from "react";

function ItemName({name, setName, handleBlur, handleKeyDown, needed, dark}) {
  const handleChange = (e) => {
    setName(e.target.value);
    // console.log("change");
  };

  return <input
    type="text"
    disabled={true}
    name="name"
    value={name}
    onChange={handleChange}
    onBlur={handleBlur}
    onKeyDown={handleKeyDown}
    className={`lg:min-w-[59%] border border-gray-300 text-sm rounded-lg
     focus:ring-blue-500 focus:border-blue-500 p-2.5
      ${!needed && " line-through "}
       m-2 inline-block leading-none
      ${dark?'border-gray-600 placeholder-gray-400 disabled:bg-gray-700 text-gray-700  disabled:text-gray-200':' disabled:bg-gray-50 text-gray-900  bg-gray-100'} "}
            `}
    readOnly={true}
    title="item name"
    id="item name" />;
}

export default ItemName;