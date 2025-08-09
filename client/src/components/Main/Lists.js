import { memo, useContext } from "react";
import List from "./List";
import { Context } from "../Context/Context";
import { listsText } from "../../data/text";

function Lists({
  filteredNeeds,
  filteredHaves,
  needs,
  haves,
  handleDelete,
  handleToggle,
  updateItem,
  getConsent,
  list,
  darkMode,
}) {
  const { state, dispatch } = useContext(Context);
  const { language } = state.settings;
  const emptyListTitle = listsText.EMPTY_TITLE[language];
  const emptyListsText = listsText.EMPTY_TEXT[language];
  const needsTitle = listsText.NEEDS_TITLE[language];
  const havesTitle = listsText.HAVES_TITLE[language];

  return !needs?.length && !haves.length ? (
    <article id="list" className="flex flex-col justify-around m-5 p-5">
      <h3 className="text-lg">{emptyListTitle}</h3>
      {/* <h3 className="text-lg">List {list} is Empty!</h3> */}
      <a href="#new-item" className="text-sm m-4" title={emptyListTitle}>
        {emptyListsText}
      </a>
    </article>
  ) : (
    <section id="list">
      {needs[0] && (
        <List
          title={needsTitle}
          items={needs}
          filteredItems={filteredNeeds}
          showItems={state.showNeeds}
          setShowItems={(showNeeds)=>dispatch({ type: "SET_SHOW_ITEMS", payload: { showNeeds } })}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
          updateItem={updateItem}
          getConsent={getConsent}
          darkMode={darkMode}
        />
      )}
      {haves[0] && (
        <List
          title={havesTitle}
          items={haves}
          filteredItems={filteredHaves}
          showItems={state.showHaves}
          setShowItems={(showHaves)=>dispatch({ type: "SET_SHOW_ITEMS", payload: { showHaves } })}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
          updateItem={updateItem}
          getConsent={getConsent}
          darkMode={darkMode}
        />
      )}
    </section>
  );
}

export default memo(Lists);
