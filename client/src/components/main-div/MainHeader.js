import { memo, useContext } from "react";
import AddItemsButton from "./AddItemsButton";
import ResetButton from "./ResetButton";
import { Context } from "../Context";
import { mainHeaderText } from "../../data/text";

function MainHeader({
  showAddItem,
  setShowAddItem,
  items,
  list,
  handleChangeList,
  handleReset,
  handleClear,
  darkMode,
}) {
  const { language } = useContext(Context).state.settings;
  const title = mainHeaderText["TITLE"][language];
  
  return (
    <div className="flex flex-wrap items-center justify-around py-2 mb-2 gap-3">
      <h2 className="text-center text-xl font-semibold select-none">
        {title}
        {/* <input
          className={`"inline-block m-2 p-1 w-10 text-xl font-semibold  ${darkMode?'placeholder-gray-400 bg-gray-700 border-gray-600  text-white':' text-gray-900'}`}
          type="number"
          min={1}
          value={1}
          onChange={handleChangeList}
          max={1}
          maxLength={1}
          readOnly={true}
          disabled={true}
          onInvalidCapture={() => alert("Please enter a number between 1 and 30")}
          size={1}
        /> */}
      </h2>
      <ResetButton
        handleReset={handleReset}
        handleClear={handleClear}
        darkMode={darkMode}
        items={items}
      />
      <AddItemsButton
        showAddItem={showAddItem}
        setShowAddItem={setShowAddItem}
        listIsEmpty={!items.length}
        darkMode={darkMode}
      />
    </div>
  );
}

export default memo(MainHeader);
