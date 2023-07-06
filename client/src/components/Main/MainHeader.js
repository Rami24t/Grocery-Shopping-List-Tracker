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
}) {
  return (
    <div className="flex flex-wrap items-center justify-around py-2 mb-2 gap-3">
      <h2 className="text-center text-xl font-semibold ">
        Items in List
        <input
          className="inline-block m-2 p-1 w-10 text-xl font-semibold text-gray-900 dark:text-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          type="number"
          min={1}
          value={list}
          onChange={handleChangeList}
          max={20}
          maxLength={2}
          readOnly={false}
          disabled={false}
        />
      </h2>
      {ResetButton(items, handleClear, handleReset)}
      <AddItemsButton
        showAddItem={showAddItem}
        setShowAddItem={setShowAddItem}
        listIsEmpty={!items.length}
      />
    </div>
  );
}

export default MainHeader;
