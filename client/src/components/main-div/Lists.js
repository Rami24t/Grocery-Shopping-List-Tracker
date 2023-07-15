import React from "react";
import List from "./List";
import { Context } from "../Context";

function Lists({
  filter,
  needs,
  haves,
  handleDelete,
  handleToggle,
  updateItem,
  list,
  validate,
  dark,
}) {
  const { state, dispatch } = React.useContext(Context);

  return !needs?.length && !haves.length ? (
    <article id="list" className="flex flex-col justify-around m-5 p-5">
      <h3 className="text-lg">List {list} is Empty!</h3>
      <p className="text-sm m-4">Add some items to your list.</p>
    </article>
  ) : (
    <section id="list">
      {needs[0] && (
        <List
          title="Needed"
          filter={filter}
          items={needs}
          showItems={state.showNeeds}
          setShowItems={(showNeeds)=>dispatch({ type: "SET_SHOW_ITEMS", payload: { showNeeds } })}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
          updateItem={updateItem}
          validate={validate}
          dark={dark}
        />
      )}
      {haves[0] && (
        <List
          title="Have"
          filter={filter}
          items={haves}
          showItems={state.showHaves}
          setShowItems={(showHaves)=>dispatch({ type: "SET_SHOW_ITEMS", payload: { showHaves } })}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
          updateItem={updateItem}
          validate={validate}
          dark={dark}
        />
      )}
    </section>
  );
}

export default React.memo(Lists);