import React from "react";
import List from "./List";
import { Context } from "../Context";

function Lists({
  filteredNeeds,
  filteredHaves,
  needs,
  haves,
  handleDelete,
  handleToggle,
  updateItem,
  list,
  darkMode,
}) {
  const { state, dispatch } = React.useContext(Context);

  return !needs?.length && !haves.length ? (
    <article id="list" className="flex flex-col justify-around m-5 p-5">
      <h3 className="text-lg">Empty list!</h3>
      {/* <h3 className="text-lg">List {list} is Empty!</h3> */}
      <a href="#new-item" className="text-sm m-4" title="Empty List! Add Items.">
      Add some items to your list.
      </a>
    </article>
  ) : (
    <section id="list">
      {needs[0] && (
        <List
          title="Need"
          items={needs}
          filteredItems={filteredNeeds}
          showItems={state.showNeeds}
          setShowItems={(showNeeds)=>dispatch({ type: "SET_SHOW_ITEMS", payload: { showNeeds } })}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
          updateItem={updateItem}
          darkMode={darkMode}
        />
      )}
      {haves[0] && (
        <List
          title="Have"
          items={haves}
          filteredItems={filteredHaves}
          showItems={state.showHaves}
          setShowItems={(showHaves)=>dispatch({ type: "SET_SHOW_ITEMS", payload: { showHaves } })}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
          updateItem={updateItem}
          darkMode={darkMode}
        />
      )}
    </section>
  );
}

export default React.memo(Lists);