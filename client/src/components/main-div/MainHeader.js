import React from "react";
import AddItemsButton from "./AddItemsButton";
import { ResetButton } from "./ResetButton";

function MainHeader({
  showAddItem,
  setShowAddItem,
  items,
  list,
  handleChangeList,
  handleReset,
  handleClear,
  dark
}) {
  return (
    <div className="flex flex-wrap items-center justify-around py-2 mb-2 gap-3">
      <h2 className="text-center text-xl font-semibold ">
        Items in List
        <input
          className={`"inline-block m-2 p-1 w-10 text-xl font-semibold  ${dark?'placeholder-gray-400 bg-gray-700 border-gray-600  text-white':' text-gray-900'}`}
          type="number"
          min={1}
          value={list}
          onChange={handleChangeList}
          max={30}
          maxLength={2}
          readOnly={false}
          disabled={false}
          onInvalidCapture={() => alert("Please enter a number between 1 and 30")}
          size={2}
        />
      </h2>
      <ResetButton handleReset={handleReset} handleClear={handleClear} dark={dark} items={items} />
      <AddItemsButton
        showAddItem={showAddItem}
        setShowAddItem={setShowAddItem}
        listIsEmpty={!items.length}
        dark={dark} 
      />
    </div>
  );
}

export default MainHeader;
