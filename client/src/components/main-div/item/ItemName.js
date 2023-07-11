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
      ${dark?'border-gray-600 placeholder-gray-400 disabled:bg-gray-700 text-gray-50  disabled:text-gray-200':' disabled:bg-gray-50 text-gray-900  bg-gray-100'}
      bg-blend-multiply disabled:bg-blend-darken`}
    readOnly={true}
    title="item name"
    style={{background: `#111222dd url("https://source.unsplash.com/random/200x40?${name})"`
      , backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover"}}
    id="item name" />;
}

export default ItemName;