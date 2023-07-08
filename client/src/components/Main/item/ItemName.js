import React from "react";

function ItemName({name, handleChange, handleBlur, handleKeyDown, needed}) {
  return <input
    type="text"
    disabled={true}
    name="name"
    value={name}
    onChange={handleChange}
    onBlur={handleBlur}
    onKeyDown={handleKeyDown}
    className={`lg:min-w-[59%] border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5
      dark:border-gray-600 dark:placeholder-gray-400 
      dark:focus:ring-blue-500
      dark:focus:border-blue-500 m-2 inline-block leading-none
      ${!needed && " line-through "}
       text-gray-900 
       dark:text-gray-700 
       disabled:bg-gray-50
       disabled:dark:bg-gray-700
       disabled:dark:text-gray-200
       bg-gray-100 "}
            `}
    readOnly={true}
    title="item name"
    id="item name" />;
}

export default ItemName;